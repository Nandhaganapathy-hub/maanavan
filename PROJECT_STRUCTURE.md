# 📋 Project Structure

```
maanavan/
│
├── 📁 frontend/                      # React Frontend Application
│   ├── 📁 src/
│   │   ├── 📁 components/           # React Components
│   │   │   ├── Header.jsx          # App header with branding
│   │   │   ├── UploadSection.jsx   # File upload with drag-and-drop
│   │   │   ├── AnalysisResults.jsx # Results display with visualizations
│   │   │   └── LoadingSpinner.jsx  # Loading state component
│   │   ├── App.jsx                 # Main application component
│   │   ├── main.jsx                # React entry point
│   │   └── index.css               # Design system & global styles
│   ├── index.html                  # HTML template
│   ├── package.json                # Node.js dependencies
│   ├── vite.config.js              # Vite configuration
│   └── .gitignore                  # Git ignore rules
│
├── 📁 backend/                       # Flask Backend Application
│   ├── 📁 services/                 # Business logic services
│   │   ├── __init__.py             # Package initializer
│   │   ├── resume_parser.py        # PDF/DOCX text extraction
│   │   └── ai_analyzer.py          # Gemini AI integration
│   ├── 📁 uploads/                  # Temporary file storage
│   │   └── .gitignore              # Ignore uploaded files
│   ├── app.py                      # Flask application & routes
│   ├── requirements.txt            # Python dependencies
│   ├── .env.example                # Environment variables template
│   └── .gitignore                  # Git ignore rules
│
├── 📄 README.md                      # Comprehensive documentation
├── 📄 QUICKSTART.md                  # Quick start guide
├── 📄 PROJECT_STRUCTURE.md           # This file
└── 📄 setup.ps1                      # Automated setup script

```

## 🎯 Component Responsibilities

### Frontend Components

#### `App.jsx`
- Main application state management
- Handles file upload, analysis, loading, and error states
- Coordinates between child components

#### `Header.jsx`
- Application branding and logo
- AI badge indicator
- Sticky navigation

#### `UploadSection.jsx`
- Drag-and-drop file upload
- File validation (type, size)
- Feature highlights
- Upload button and file preview

#### `AnalysisResults.jsx`
- ATS score visualization (circular progress)
- Strengths display
- Weaknesses/improvements display
- Recommendations list
- Overall summary
- Reset functionality

#### `LoadingSpinner.jsx`
- Animated loading indicator
- Progress bar
- Analysis step indicators

### Backend Services

#### `app.py`
- Flask application initialization
- API route definitions
- File upload handling
- Error handling and validation
- CORS configuration

#### `resume_parser.py`
- PDF text extraction using PyPDF2
- DOCX text extraction using python-docx
- Error handling for parsing failures

#### `ai_analyzer.py`
- Gemini AI integration
- Prompt engineering for resume analysis
- Response parsing and validation
- Fallback response generation

## 🔄 Data Flow

```
User uploads resume
       ↓
UploadSection validates file
       ↓
POST /api/analyze
       ↓
Flask receives file
       ↓
ResumeParser extracts text
       ↓
AIAnalyzer sends to Gemini
       ↓
Parse AI response
       ↓
Return JSON to frontend
       ↓
AnalysisResults displays data
```

## 🎨 Design System

### Colors
- **Primary**: Indigo (#6366f1)
- **Secondary**: Purple (#8b5cf6)
- **Success**: Green (#10b981)
- **Warning**: Amber (#f59e0b)
- **Error**: Red (#ef4444)
- **Background**: Dark theme (#0a0e1a)

### Typography
- **Font**: Inter (Google Fonts)
- **Sizes**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl
- **Weights**: 300, 400, 500, 600, 700, 800

### Components
- Cards with glassmorphism effect
- Gradient buttons with hover effects
- Badges for status indicators
- Progress bars with animations
- Smooth transitions and animations

## 📦 Dependencies

### Frontend
- **react**: UI library
- **react-dom**: React DOM rendering
- **axios**: HTTP client for API calls
- **lucide-react**: Icon library
- **vite**: Build tool and dev server
- **@vitejs/plugin-react**: React plugin for Vite

### Backend
- **flask**: Web framework
- **flask-cors**: CORS support
- **PyPDF2**: PDF parsing
- **python-docx**: DOCX parsing
- **google-generativeai**: Gemini AI SDK
- **python-dotenv**: Environment variables

## 🔐 Environment Variables

### Backend (.env)
```
GEMINI_API_KEY=your_api_key_here
FLASK_ENV=development
FLASK_DEBUG=True
```

## 🚀 Development Workflow

1. **Start Backend**: `python app.py` (port 5000)
2. **Start Frontend**: `npm run dev` (port 3000)
3. **Make Changes**: Edit files and see hot reload
4. **Test**: Upload resumes and verify analysis
5. **Build**: `npm run build` for production

## 📊 API Specification

### Endpoints

#### `GET /api/health`
Health check endpoint

**Response**: 
```json
{
  "status": "healthy",
  "message": "Resume Analyzer API is running"
}
```

#### `POST /api/analyze`
Analyze resume file

**Request**:
- Content-Type: multipart/form-data
- Body: resume (file)

**Response**:
```json
{
  "score": 85,
  "analysis": {
    "strengths": ["..."],
    "weaknesses": ["..."],
    "recommendations": ["..."],
    "summary": "..."
  }
}
```

## 🎓 Key Features

1. **File Upload**: Drag-and-drop or click to upload
2. **Validation**: File type and size checks
3. **Text Extraction**: PDF and DOCX support
4. **AI Analysis**: Gemini-powered insights
5. **Score Visualization**: Circular progress indicator
6. **Categorized Feedback**: Strengths, weaknesses, recommendations
7. **Responsive Design**: Works on all devices
8. **Error Handling**: Graceful error messages
9. **Loading States**: Progress indicators
10. **Clean UI**: Modern dark theme with animations

---

**Last Updated**: February 2026
