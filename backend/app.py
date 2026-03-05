from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
from services.resume_parser import ResumeParser
from services.ai_analyzer import AIAnalyzer

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Configuration
app.config['MAX_CONTENT_LENGTH'] = 10 * 1024 * 1024  # 10MB max file size
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Initialize services
resume_parser = ResumeParser()
ai_analyzer = AIAnalyzer(api_key=os.getenv('GEMINI_API_KEY'))

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'message': 'Resume Analyzer API is running'
    }), 200

@app.route('/api/analyze', methods=['POST'])
def analyze_resume():
    """Analyze uploaded resume"""
    try:
        # Check if file is present
        if 'resume' not in request.files:
            return jsonify({'error': 'No file uploaded'}), 400
        
        file = request.files['resume']
        
        # Check if file is selected
        if file.filename == '':
            return jsonify({'error': 'No file selected'}), 400
        
        # Validate file type
        allowed_extensions = {'pdf', 'docx'}
        file_ext = file.filename.rsplit('.', 1)[1].lower() if '.' in file.filename else ''
        
        if file_ext not in allowed_extensions:
            return jsonify({'error': 'Invalid file type. Only PDF and DOCX are allowed'}), 400
        
        # Save file temporarily
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(file_path)
        
        try:
            # Parse resume
            resume_text = resume_parser.extract_text(file_path, file_ext)
            
            if not resume_text or len(resume_text.strip()) < 50:
                return jsonify({'error': 'Could not extract sufficient text from resume'}), 400
            
            # Analyze with AI
            analysis_result = ai_analyzer.analyze_resume(resume_text)
            
            # Clean up uploaded file
            os.remove(file_path)
            
            return jsonify(analysis_result), 200
            
        except Exception as e:
            # Clean up on error
            if os.path.exists(file_path):
                os.remove(file_path)
            raise e
            
    except Exception as e:
        print(f"Error analyzing resume: {str(e)}")
        return jsonify({'error': f'Failed to analyze resume: {str(e)}'}), 500

@app.errorhandler(413)
def request_entity_too_large(error):
    """Handle file too large error"""
    return jsonify({'error': 'File size exceeds 10MB limit'}), 413

@app.errorhandler(500)
def internal_server_error(error):
    """Handle internal server errors"""
    return jsonify({'error': 'Internal server error occurred'}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
