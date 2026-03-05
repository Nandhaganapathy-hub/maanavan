# 🎓 Student Resume Analyzer

An AI-powered student resume analyzer built with **React** and **Flask** that provides instant feedback on ATS compatibility, content quality, and actionable improvement suggestions using Google's Gemini AI.

![Resume Analyzer](https://img.shields.io/badge/React-18.2.0-blue)
![Flask](https://img.shields.io/badge/Flask-3.0.0-green)
![Gemini AI](https://img.shields.io/badge/AI-Gemini-purple)

## ✨ Features

- 📄 **Resume Upload**: Support for PDF and DOCX formats
- 🤖 **AI-Powered Analysis**: Leverages Google Gemini AI for intelligent feedback
- 📊 **ATS Score**: Get a comprehensive ATS compatibility score (0-100)
- ✅ **Strengths Analysis**: Identify what's working well in your resume
- ⚠️ **Improvement Areas**: Discover specific weaknesses to address
- 💡 **Actionable Recommendations**: Receive concrete suggestions for improvement
- 🎨 **Modern UI**: Clean, premium dark theme with smooth animations
- ⚡ **Real-time Processing**: Get results in seconds
- 📱 **Responsive Design**: Works seamlessly on all devices

## 🏗️ Architecture

```
maanavan/
├── frontend/                 # React Frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Header.jsx
│   │   │   ├── UploadSection.jsx
│   │   │   ├── AnalysisResults.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # React entry point
│   │   └── index.css        # Design system & styles
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── backend/                  # Flask Backend
    ├── services/
    │   ├── resume_parser.py  # PDF/DOCX text extraction
    │   └── ai_analyzer.py    # Gemini AI integration
    ├── uploads/              # Temporary file storage
    ├── app.py               # Flask application
    ├── requirements.txt     # Python dependencies
    └── .env.example         # Environment variables template
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **Google Gemini API Key** ([Get one here](https://makersuite.google.com/app/apikey))

### Backend Setup

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Create virtual environment**:
   ```bash
   python -m venv venv
   ```

3. **Activate virtual environment**:
   - Windows:
     ```bash
     venv\Scripts\activate
     ```
   - macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

5. **Configure environment variables**:
   ```bash
   # Copy the example file
   copy .env.example .env
   
   # Edit .env and add your Gemini API key
   GEMINI_API_KEY=your_actual_api_key_here
   ```

6. **Run the Flask server**:
   ```bash
   python app.py
   ```
   
   The backend will start on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   
   The frontend will start on `http://localhost:3000`

4. **Open in browser**:
   Navigate to `http://localhost:3000`

## 🎯 Usage

1. **Upload Resume**: Drag and drop or click to select a PDF/DOCX resume file
2. **Analyze**: Click the "Analyze Resume" button
3. **Review Results**: View your ATS score, strengths, weaknesses, and recommendations
4. **Improve**: Apply the suggestions and re-analyze for better scores

## 🔧 API Endpoints

### `GET /api/health`
Health check endpoint to verify API status.

**Response**:
```json
{
  "status": "healthy",
  "message": "Resume Analyzer API is running"
}
```

### `POST /api/analyze`
Analyze uploaded resume file.

**Request**:
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body: `resume` (file) - PDF or DOCX file

**Response**:
```json
{
  "score": 85,
  "analysis": {
    "strengths": [
      "Well-structured with clear sections",
      "Strong use of action verbs",
      "Quantifiable achievements included"
    ],
    "weaknesses": [
      "Missing keywords for target role",
      "Limited technical skills section"
    ],
    "recommendations": [
      "Add relevant industry keywords",
      "Expand technical skills section",
      "Include more quantifiable metrics"
    ],
    "summary": "Strong resume with good structure. Focus on adding more role-specific keywords and expanding technical competencies."
  }
}
```

## 🎨 Design System

The application uses a comprehensive design system with:

- **Color Palette**: Premium dark theme with vibrant accents
- **Typography**: Inter font family with multiple weights
- **Components**: Reusable buttons, cards, badges, and inputs
- **Animations**: Smooth fade-in, slide-in, and pulse effects
- **Responsive**: Mobile-first design approach

### Key Colors

- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Success: `#10b981` (Green)
- Warning: `#f59e0b` (Amber)
- Error: `#ef4444` (Red)

## 🔐 Security Considerations

- File size limited to 10MB
- Only PDF and DOCX files accepted
- Temporary files deleted after processing
- API key stored in environment variables
- CORS enabled for frontend-backend communication

## 📝 Environment Variables

Create a `.env` file in the backend directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
FLASK_ENV=development
FLASK_DEBUG=True
```

## 🛠️ Technologies Used

### Frontend
- **React 18.2** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **Lucide React** - Icon library

### Backend
- **Flask 3.0** - Web framework
- **Flask-CORS** - Cross-origin resource sharing
- **PyPDF2** - PDF text extraction
- **python-docx** - DOCX text extraction
- **Google Generative AI** - Gemini AI integration
- **python-dotenv** - Environment variable management

## 🚧 Troubleshooting

### PowerShell Execution Policy Error
If you encounter script execution errors on Windows:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Port Already in Use
If port 5000 or 3000 is already in use:
- Backend: Change port in `app.py`
- Frontend: Change port in `vite.config.js`

### Gemini API Errors
- Ensure your API key is valid
- Check your API quota and limits
- Verify internet connectivity

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues or questions, please open an issue on the repository.

---

**Built with ❤️ using React, Flask, and Google Gemini AI**
