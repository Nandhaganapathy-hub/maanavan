import { useState, useRef } from 'react'
import { Upload, FileText, X } from 'lucide-react'
import axios from 'axios'

function UploadSection({ onAnalysisStart, onAnalysisComplete, onError }) {
    const [selectedFile, setSelectedFile] = useState(null)
    const [dragActive, setDragActive] = useState(false)
    const fileInputRef = useRef(null)

    const handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true)
        } else if (e.type === 'dragleave') {
            setDragActive(false)
        }
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileSelect(e.dataTransfer.files[0])
        }
    }

    const handleFileSelect = (file) => {
        console.log('File selected:', file.name, 'Type:', file.type, 'Size:', file.size)

        // Check file extension as fallback
        const fileName = file.name.toLowerCase()
        const isPDF = file.type === 'application/pdf' || fileName.endsWith('.pdf')
        const isDOCX = file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || fileName.endsWith('.docx')

        if (!isPDF && !isDOCX) {
            console.error('Invalid file type:', file.type)
            onError('Please upload a PDF or DOCX file')
            return
        }

        if (file.size > 10 * 1024 * 1024) { // 10MB limit
            console.error('File too large:', file.size)
            onError('File size must be less than 10MB')
            return
        }

        console.log('File validated successfully')
        setSelectedFile(file)
    }

    const handleFileInputChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            handleFileSelect(e.target.files[0])
        }
    }

    const handleRemoveFile = () => {
        setSelectedFile(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    const handleAnalyze = async () => {
        if (!selectedFile) {
            console.error('No file selected')
            return
        }

        console.log('Starting analysis for:', selectedFile.name)
        onAnalysisStart()

        const formData = new FormData()
        formData.append('resume', selectedFile)

        console.log('FormData created, sending to backend...')

        try {
            const response = await axios.post('/api/analyze', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })

            console.log('Analysis complete:', response.data)
            onAnalysisComplete(response.data)
        } catch (error) {
            console.error('Analysis error:', error)
            console.error('Error response:', error.response?.data)
            onError(error.response?.data?.error || 'Failed to analyze resume. Please try again.')
        }
    }

    return (
        <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Hero Section */}
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
                <h2 className="text-4xl font-extrabold text-primary" style={{ marginBottom: 'var(--spacing-md)' }}>
                    Optimize Your Resume with AI
                </h2>
                <p className="text-lg text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    Upload your resume and get instant AI-powered feedback on ATS compatibility,
                    content quality, and actionable improvement suggestions.
                </p>
            </div>

            {/* Upload Card */}
            <div className="card card-gradient">
                <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    style={{
                        border: `2px dashed ${dragActive ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.2)'}`,
                        borderRadius: 'var(--radius-lg)',
                        padding: 'var(--spacing-2xl)',
                        textAlign: 'center',
                        background: dragActive ? 'rgba(99, 102, 241, 0.05)' : 'transparent',
                        transition: 'all var(--transition-base)',
                        cursor: 'pointer'
                    }}
                    onClick={() => !selectedFile && fileInputRef.current?.click()}
                >
                    {!selectedFile ? (
                        <>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'var(--gradient-primary)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto var(--spacing-lg)',
                                boxShadow: 'var(--shadow-glow)'
                            }}>
                                <Upload size={40} color="white" />
                            </div>

                            <h3 className="text-xl font-bold" style={{ marginBottom: 'var(--spacing-sm)' }}>
                                Drop your resume here
                            </h3>
                            <p className="text-secondary" style={{ marginBottom: 'var(--spacing-lg)' }}>
                                or click to browse files
                            </p>

                            <div className="flex gap-md" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                                <span className="badge badge-info">PDF</span>
                                <span className="badge badge-info">DOCX</span>
                                <span className="badge badge-info">Max 10MB</span>
                            </div>

                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".pdf,.docx"
                                onChange={handleFileInputChange}
                                style={{ display: 'none' }}
                            />
                        </>
                    ) : (
                        <div className="animate-slide-in">
                            <div style={{
                                background: 'var(--color-bg-tertiary)',
                                borderRadius: 'var(--radius-md)',
                                padding: 'var(--spacing-lg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: 'var(--spacing-lg)'
                            }}>
                                <div className="flex items-center gap-md">
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        background: 'var(--gradient-success)',
                                        borderRadius: 'var(--radius-md)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <FileText size={24} color="white" />
                                    </div>
                                    <div style={{ textAlign: 'left' }}>
                                        <p className="font-semibold">{selectedFile.name}</p>
                                        <p className="text-sm text-tertiary">
                                            {(selectedFile.size / 1024).toFixed(2)} KB
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleRemoveFile()
                                    }}
                                    style={{
                                        background: 'rgba(239, 68, 68, 0.2)',
                                        border: 'none',
                                        borderRadius: 'var(--radius-sm)',
                                        padding: 'var(--spacing-sm)',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all var(--transition-base)'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.3)'}
                                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'}
                                >
                                    <X size={20} color="var(--color-error)" />
                                </button>
                            </div>

                            <button
                                className="btn btn-primary btn-lg"
                                onClick={handleAnalyze}
                                style={{ width: '100%' }}
                            >
                                <Upload size={20} />
                                Analyze Resume
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Features */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--spacing-lg)',
                marginTop: 'var(--spacing-2xl)'
            }}>
                {[
                    { title: 'ATS Score', desc: 'Get your ATS compatibility score' },
                    { title: 'AI Analysis', desc: 'Powered by Google Gemini AI' },
                    { title: 'Instant Feedback', desc: 'Receive results in seconds' },
                    { title: 'Actionable Tips', desc: 'Get specific improvements' }
                ].map((feature, idx) => (
                    <div key={idx} className="glass" style={{
                        padding: 'var(--spacing-lg)',
                        borderRadius: 'var(--radius-md)',
                        textAlign: 'center'
                    }}>
                        <h4 className="font-semibold" style={{ marginBottom: 'var(--spacing-xs)' }}>
                            {feature.title}
                        </h4>
                        <p className="text-sm text-tertiary">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UploadSection
