# 🚀 Quick Start Guide

Get the Student Resume Analyzer up and running in 5 minutes!

## Step 1: Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

## Step 2: Setup Backend

```bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment (Windows)
python -m venv venv
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
copy .env.example .env

# Edit .env and paste your API key
# GEMINI_API_KEY=your_actual_api_key_here

# Start Flask server
python app.py
```

✅ Backend should now be running on `http://localhost:5000`

## Step 3: Setup Frontend

Open a **new terminal window**:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

✅ Frontend should now be running on `http://localhost:3000`

## Step 4: Use the Application

1. Open your browser and go to `http://localhost:3000`
2. Drag and drop a resume (PDF or DOCX) or click to browse
3. Click "Analyze Resume"
4. Wait a few seconds for AI analysis
5. Review your ATS score and recommendations!

## 🎯 Tips for Best Results

- Use a well-formatted resume (PDF preferred)
- Ensure resume has clear sections (Education, Experience, Skills, etc.)
- Include quantifiable achievements
- Use action verbs
- Keep file size under 10MB

## ⚠️ Common Issues

### "Scripts disabled" error on Windows
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Port already in use
- Kill the process using the port or change the port in configuration files

### API Key error
- Make sure you copied the entire API key
- Check that `.env` file is in the `backend` directory
- Restart the Flask server after adding the API key

## 📊 What You'll Get

- **ATS Score**: 0-100 rating of your resume's ATS compatibility
- **Strengths**: What's working well in your resume
- **Weaknesses**: Areas that need improvement
- **Recommendations**: Specific, actionable suggestions
- **Summary**: Overall assessment of your resume

## 🎨 Features to Explore

- Drag and drop file upload
- Real-time analysis progress
- Beautiful score visualization
- Categorized feedback
- Mobile-responsive design

---

**Need help?** Check the main [README.md](README.md) for detailed documentation.
