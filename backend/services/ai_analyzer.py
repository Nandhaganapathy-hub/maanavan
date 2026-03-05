import google.generativeai as genai
import json
import re

class AIAnalyzer:
    """Service for AI-powered resume analysis using Google Gemini"""
    
    def __init__(self, api_key):
        """
        Initialize AI Analyzer with Gemini API
        
        Args:
            api_key (str): Google Gemini API key
        """
        # We only want to raise an error if the key is missing or is the placeholder text
        if not api_key or api_key == 'your_gemini_api_key_here':
            raise ValueError("Please set a valid GEMINI_API_KEY in .env file")
        
        genai.configure(api_key=api_key)
        # Using the most reliable current model
        self.model = genai.GenerativeModel('gemini-1.5-flash')
    
    def analyze_resume(self, resume_text):
        """
        Analyze resume using AI
        """
        prompt = self._create_analysis_prompt(resume_text)
        
        try:
            response = self.model.generate_content(prompt)
            analysis = self._parse_ai_response(response.text)
            return analysis
        except Exception as e:
            # Re-raise with a clear message
            raise Exception(f"AI analysis failed: {str(e)}")
    
    def _create_analysis_prompt(self, resume_text):
        """Create detailed prompt for AI analysis"""
        return f"""You are an expert ATS (Applicant Tracking System) resume analyzer and career coach. 
Analyze the following student resume and provide detailed feedback.

RESUME TEXT:
{resume_text}

Please provide your analysis in the following JSON format:
{{
    "score": <number between 0-100>,
    "analysis": {{
        "strengths": [
            "List 3-5 specific strengths of this resume",
            "Focus on formatting, content, keywords, achievements"
        ],
        "weaknesses": [
            "List 3-5 specific areas that need improvement",
            "Be constructive and specific"
        ],
        "recommendations": [
            "Provide 5-7 actionable recommendations",
            "Be specific about what to add, remove, or modify"
        ],
        "summary": "A 2-3 sentence overall summary of the resume quality and main areas to focus on"
    }}
}}

Scoring criteria:
- 90-100: Exceptional resume, ATS-optimized, strong content
- 80-89: Very good resume, minor improvements needed
- 70-79: Good resume, some important improvements needed
- 60-69: Average resume, significant improvements needed
- Below 60: Needs major revision

Focus on:
1. ATS compatibility (formatting, keywords, structure)
2. Content quality (achievements, quantifiable results, action verbs)
3. Clarity and conciseness
4. Relevance for student/entry-level positions
5. Professional presentation

Return ONLY the JSON object, no additional text."""

    def _parse_ai_response(self, response_text):
        """Parse AI response and extract structured data"""
        try:
            # Try to extract JSON from response
            json_match = re.search(r'\{.*\}', response_text, re.DOTALL)
            if json_match:
                json_str = json_match.group()
                data = json.loads(json_str)
                
                # Validate required fields
                if 'score' in data and 'analysis' in data:
                    return data
            
            # If parsing fails, create a structured response from the text
            return self._create_fallback_response(response_text)
            
        except Exception as e:
            print(f"Error parsing AI response: {str(e)}")
            return self._create_fallback_response(response_text)
    
    def _create_fallback_response(self, response_text):
        """Create a fallback structured response if JSON parsing fails"""
        return {
            "score": 75,
            "analysis": {
                "strengths": [
                    "Resume has been submitted for analysis",
                    "Content is readable and parseable"
                ],
                "weaknesses": [
                    "Detailed analysis could not be completed",
                    "Please try again or check resume format"
                ],
                "recommendations": [
                    "Ensure resume is well-formatted",
                    "Use clear section headings",
                    "Include quantifiable achievements",
                    "Use action verbs to describe experiences",
                    "Keep formatting simple and ATS-friendly"
                ],
                "summary": "Your resume has been received. For best results, ensure it's well-formatted with clear sections, quantifiable achievements, and relevant keywords for your target role."
            }
        }
