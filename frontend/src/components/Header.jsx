import { FileText, Sparkles } from 'lucide-react'

function Header() {
    return (
        <header style={{
            background: 'var(--color-bg-secondary)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: 'var(--spacing-lg) 0',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            backdropFilter: 'blur(10px)',
            boxShadow: 'var(--shadow-md)'
        }}>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-md">
                        <div style={{
                            width: '48px',
                            height: '48px',
                            background: 'var(--gradient-primary)',
                            borderRadius: 'var(--radius-md)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 'var(--shadow-glow)'
                        }}>
                            <FileText size={28} color="white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gradient">
                                Student Resume Analyzer
                            </h1>
                            <p className="text-sm text-tertiary">
                                AI-Powered Resume Analysis & Optimization
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-sm">
                        <Sparkles size={20} color="var(--color-primary)" />
                        <span className="text-sm font-medium text-secondary">
                            Powered by Gemini AI
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
