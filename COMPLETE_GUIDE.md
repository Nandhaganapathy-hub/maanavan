# 🎓 Student Resume Analyzer - Complete Guide

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [What You've Built](#what-youve-built)
3. [Installation](#installation)
4. [Running the Application](#running-the-application)
5. [How to Use](#how-to-use)
6. [Project Files](#project-files)
7. [Customization](#customization)
8. [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

You now have a **production-ready Student Resume Analyzer** that combines:
- **React Frontend**: Modern, responsive UI with premium design
- **Flask Backend**: Robust API with AI integration
- **Google Gemini AI**: Intelligent resume analysis and feedback

### Key Capabilities
✅ Upload PDF/DOCX resumes  
✅ AI-powered ATS score (0-100)  
✅ Detailed strengths & weaknesses  
✅ Actionable recommendations  
✅ Beautiful, responsive UI  
✅ Real-time analysis  

---

## 🏗️ What You've Built

### Frontend (React + Vite)
```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # App header
│   │   ├── UploadSection.jsx       # File upload UI
│   │   ├── AnalysisResults.jsx     # Results display
│   │   └── LoadingSpinner.jsx      # Loading state
│   ├── App.jsx                     # Main app
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Design system
├── index.html
├── package.json
└── vite.config.js
```

### Backend (Flask + Python)
```
backend/
├── services/
│   ├── resume_parser.py            # PDF/DOCX parsing
│   └── ai_analyzer.py              # Gemini AI integration
├── app.py                          # Flask API
├── requirements.txt
└── .env.example
```

### Documentation
- **README.md**: Comprehensive documentation
- **QUICKSTART.md**: Quick setup guide
- **FEATURES.md**: Feature list
- **PROJECT_STRUCTURE.md**: Technical details
- **setup.ps1**: Automated setup script

---

## 🚀 Installation

### Option 1: Automated Setup (Recommended)

1. **Open PowerShell** in the project directory
2. **Run the setup script**:
   ```powershell
   .\setup.ps1
   ```
3. **Add your Gemini API Key**:
   - Edit `backend/.env`
   - Replace `your_gemini_api_key_here` with your actual key
   - Get key from: https://makersuite.google.com/app/apikey

### Option 2: Manual Setup

#### Backend Setup
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
# Edit .env and add your API key
```

#### Frontend Setup
```bash
cd frontend
npm install
```

---

## 🎮 Running the Application

### Step 1: Start Backend
```bash
cd backend
venv\Scripts\activate
python app.py
```
✅ Backend runs on: http://localhost:5000

### Step 2: Start Frontend (New Terminal)
```bash
cd frontend
npm run dev
```
✅ Frontend runs on: http://localhost:3000

### Step 3: Open Browser
Navigate to: **http://localhost:3000**

---

## 📖 How to Use

### 1. Upload Resume
- **Drag & Drop**: Drag a PDF/DOCX file onto the upload zone
- **OR Click**: Click to browse and select a file
- **Supported**: PDF, DOCX (max 10MB)

### 2. Analyze
- Click **"Analyze Resume"** button
- Wait 5-10 seconds for AI analysis

### 3. Review Results
- **ATS Score**: See your score (0-100)
- **Strengths**: What's working well
- **Weaknesses**: What needs improvement
- **Recommendations**: Specific actions to take
- **Summary**: Overall assessment

### 4. Improve & Re-analyze
- Apply the recommendations
- Upload improved resume
- Compare scores!

---

## 📁 Project Files

### Configuration Files
| File | Purpose |
|------|---------|
| `frontend/package.json` | Node.js dependencies |
| `frontend/vite.config.js` | Vite build configuration |
| `backend/requirements.txt` | Python dependencies |
| `backend/.env` | Environment variables (API key) |

### Source Files
| File | Description |
|------|-------------|
| `frontend/src/App.jsx` | Main React component |
| `frontend/src/index.css` | Design system & styles |
| `backend/app.py` | Flask API server |
| `backend/services/resume_parser.py` | Text extraction |
| `backend/services/ai_analyzer.py` | AI analysis logic |

### Documentation
| File | Content |
|------|---------|
| `README.md` | Full documentation |
| `QUICKSTART.md` | Quick start guide |
| `FEATURES.md` | Feature list |
| `PROJECT_STRUCTURE.md` | Technical details |

---

## 🎨 Customization

### Change Colors
Edit `frontend/src/index.css`:
```css
:root {
  --color-primary: #6366f1;    /* Change primary color */
  --color-secondary: #8b5cf6;  /* Change secondary color */
  /* ... more colors ... */
}
```

### Change Port Numbers
**Backend** (`backend/app.py`):
```python
app.run(debug=True, host='0.0.0.0', port=5000)  # Change 5000
```

**Frontend** (`frontend/vite.config.js`):
```javascript
server: {
  port: 3000,  // Change 3000
  // ...
}
```

### Modify AI Prompt
Edit `backend/services/ai_analyzer.py`:
```python
def _create_analysis_prompt(self, resume_text):
    return f"""Your custom prompt here..."""
```

### Add New Features
- **Frontend**: Add components in `frontend/src/components/`
- **Backend**: Add routes in `backend/app.py`
- **Services**: Add logic in `backend/services/`

---

## 🔧 Troubleshooting

### PowerShell Script Execution Error
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Port Already in Use
**Find and kill process**:
```powershell
# Find process on port 5000
netstat -ano | findstr :5000
# Kill process (replace PID)
taskkill /PID <PID> /F
```

### Module Not Found Error
```bash
# Backend
cd backend
venv\Scripts\activate
pip install -r requirements.txt

# Frontend
cd frontend
npm install
```

### Gemini API Error
- ✅ Check API key is correct in `backend/.env`
- ✅ Verify API key is active at https://makersuite.google.com/
- ✅ Check internet connection
- ✅ Restart Flask server after adding key

### CORS Error
- ✅ Ensure backend is running on port 5000
- ✅ Check `flask-cors` is installed
- ✅ Verify proxy in `vite.config.js`

### File Upload Error
- ✅ Check file is PDF or DOCX
- ✅ Verify file size < 10MB
- ✅ Ensure `uploads/` directory exists in backend

---

## 📊 API Testing

### Test Backend Health
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "status": "healthy",
  "message": "Resume Analyzer API is running"
}
```

### Test Resume Analysis
```bash
curl -X POST http://localhost:5000/api/analyze \
  -F "resume=@path/to/resume.pdf"
```

---

## 🎯 Next Steps

### Immediate
1. ✅ Get Gemini API key
2. ✅ Run setup script
3. ✅ Start both servers
4. ✅ Test with a sample resume

### Optional Enhancements
- 📊 Add analytics dashboard
- 💾 Save analysis history
- 📧 Email results feature
- 🎨 Custom themes
- 🌐 Deploy to production
- 📱 Mobile app version

---

## 📚 Resources

### Documentation
- [React Docs](https://react.dev/)
- [Flask Docs](https://flask.palletsprojects.com/)
- [Vite Docs](https://vitejs.dev/)
- [Gemini API Docs](https://ai.google.dev/docs)

### Getting Help
- Check `README.md` for detailed info
- Review `FEATURES.md` for capabilities
- See `PROJECT_STRUCTURE.md` for architecture

---

## ✨ Summary

You now have a **complete, production-ready** resume analyzer with:

✅ **Modern React Frontend** with premium UI  
✅ **Flask Backend** with AI integration  
✅ **Google Gemini AI** for intelligent analysis  
✅ **Comprehensive Documentation**  
✅ **Easy Setup** with automated scripts  
✅ **Professional Design** with dark theme  
✅ **Real-time Processing** with loading states  
✅ **Error Handling** for robust operation  

### Quick Start Commands
```bash
# Terminal 1 - Backend
cd backend
venv\Scripts\activate
python app.py

# Terminal 2 - Frontend
cd frontend
npm run dev

# Open: http://localhost:3000
```

**Enjoy building and improving resumes! 🚀**

---

**Version**: 1.0.0  
**Created**: February 2026  
**Tech Stack**: React + Flask + Gemini AI
