import { Loader2 } from 'lucide-react'

function LoadingSpinner() {
    return (
        <div className="animate-fade-in" style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center'
        }}>
            <div className="card card-gradient">
                <div style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto var(--spacing-lg)',
                    background: 'var(--gradient-primary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-glow)',
                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                }}>
                    <Loader2 size={40} color="white" style={{ animation: 'spin 1s linear infinite' }} />
                </div>

                <h2 className="text-2xl font-bold" style={{ marginBottom: 'var(--spacing-sm)' }}>
                    Analyzing Your Resume
                </h2>
                <p className="text-secondary" style={{ marginBottom: 'var(--spacing-lg)' }}>
                    Our AI is carefully reviewing your resume...
                </p>

                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '100%' }}></div>
                </div>

                <div style={{
                    marginTop: 'var(--spacing-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-sm)',
                    textAlign: 'left'
                }}>
                    {[
                        'Extracting text from resume...',
                        'Analyzing ATS compatibility...',
                        'Evaluating content quality...',
                        'Generating recommendations...'
                    ].map((step, idx) => (
                        <div
                            key={idx}
                            className="text-sm text-tertiary animate-slide-in"
                            style={{
                                animationDelay: `${idx * 200}ms`,
                                paddingLeft: 'var(--spacing-md)'
                            }}
                        >
                            • {step}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Add spin animation to the CSS
const style = document.createElement('style')
style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`
document.head.appendChild(style)

export default LoadingSpinner
