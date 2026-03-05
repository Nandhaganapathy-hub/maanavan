import { CheckCircle, XCircle, AlertCircle, TrendingUp, Award, FileText, Lightbulb } from 'lucide-react'

function AnalysisResults({ data, onReset }) {
    const { score, analysis } = data

    const getScoreColor = (score) => {
        if (score >= 80) return 'var(--color-success)'
        if (score >= 60) return 'var(--color-warning)'
        return 'var(--color-error)'
    }

    const getScoreBadge = (score) => {
        if (score >= 80) return { text: 'Excellent', class: 'badge-success' }
        if (score >= 60) return { text: 'Good', class: 'badge-warning' }
        return { text: 'Needs Improvement', class: 'badge-error' }
    }

    const badge = getScoreBadge(score)

    return (
        <div className="animate-fade-in" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Header with Score */}
            <div className="card" style={{
                marginBottom: 'var(--spacing-xl)',
                background: 'var(--gradient-card)',
                textAlign: 'center'
            }}>
                <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <span className={`badge ${badge.class}`} style={{ fontSize: 'var(--font-size-sm)' }}>
                        {badge.text}
                    </span>
                </div>

                <div style={{
                    width: '160px',
                    height: '160px',
                    margin: '0 auto var(--spacing-lg)',
                    position: 'relative'
                }}>
                    <svg width="160" height="160" style={{ transform: 'rotate(-90deg)' }}>
                        <circle
                            cx="80"
                            cy="80"
                            r="70"
                            fill="none"
                            stroke="var(--color-bg-tertiary)"
                            strokeWidth="12"
                        />
                        <circle
                            cx="80"
                            cy="80"
                            r="70"
                            fill="none"
                            stroke={getScoreColor(score)}
                            strokeWidth="12"
                            strokeDasharray={`${2 * Math.PI * 70}`}
                            strokeDashoffset={`${2 * Math.PI * 70 * (1 - score / 100)}`}
                            strokeLinecap="round"
                            style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                        />
                    </svg>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center'
                    }}>
                        <div className="text-4xl font-extrabold" style={{ color: getScoreColor(score) }}>
                            {score}
                        </div>
                        <div className="text-sm text-tertiary">ATS Score</div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold" style={{ marginBottom: 'var(--spacing-sm)' }}>
                    Resume Analysis Complete
                </h2>
                <p className="text-secondary">
                    Your resume has been analyzed by AI. Review the insights below.
                </p>
            </div>

            {/* Analysis Sections */}
            <div style={{
                display: 'grid',
                gap: 'var(--spacing-xl)',
                marginBottom: 'var(--spacing-xl)'
            }}>
                {/* Strengths */}
                {analysis.strengths && analysis.strengths.length > 0 && (
                    <div className="card animate-slide-in">
                        <div className="flex items-center gap-md" style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                background: 'rgba(16, 185, 129, 0.2)',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CheckCircle size={24} color="var(--color-success)" />
                            </div>
                            <h3 className="text-xl font-bold">Strengths</h3>
                        </div>

                        <ul style={{
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--spacing-md)'
                        }}>
                            {analysis.strengths.map((strength, idx) => (
                                <li key={idx} className="flex gap-md" style={{
                                    padding: 'var(--spacing-md)',
                                    background: 'rgba(16, 185, 129, 0.05)',
                                    borderRadius: 'var(--radius-md)',
                                    borderLeft: '3px solid var(--color-success)'
                                }}>
                                    <CheckCircle size={20} color="var(--color-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span className="text-secondary">{strength}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Weaknesses */}
                {analysis.weaknesses && analysis.weaknesses.length > 0 && (
                    <div className="card animate-slide-in" style={{ animationDelay: '100ms' }}>
                        <div className="flex items-center gap-md" style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                background: 'rgba(239, 68, 68, 0.2)',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <XCircle size={24} color="var(--color-error)" />
                            </div>
                            <h3 className="text-xl font-bold">Areas for Improvement</h3>
                        </div>

                        <ul style={{
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--spacing-md)'
                        }}>
                            {analysis.weaknesses.map((weakness, idx) => (
                                <li key={idx} className="flex gap-md" style={{
                                    padding: 'var(--spacing-md)',
                                    background: 'rgba(239, 68, 68, 0.05)',
                                    borderRadius: 'var(--radius-md)',
                                    borderLeft: '3px solid var(--color-error)'
                                }}>
                                    <XCircle size={20} color="var(--color-error)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span className="text-secondary">{weakness}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Recommendations */}
                {analysis.recommendations && analysis.recommendations.length > 0 && (
                    <div className="card animate-slide-in" style={{ animationDelay: '200ms' }}>
                        <div className="flex items-center gap-md" style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                background: 'rgba(99, 102, 241, 0.2)',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Lightbulb size={24} color="var(--color-primary)" />
                            </div>
                            <h3 className="text-xl font-bold">Recommendations</h3>
                        </div>

                        <ul style={{
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--spacing-md)'
                        }}>
                            {analysis.recommendations.map((rec, idx) => (
                                <li key={idx} className="flex gap-md" style={{
                                    padding: 'var(--spacing-md)',
                                    background: 'rgba(99, 102, 241, 0.05)',
                                    borderRadius: 'var(--radius-md)',
                                    borderLeft: '3px solid var(--color-primary)'
                                }}>
                                    <Lightbulb size={20} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span className="text-secondary">{rec}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Summary */}
                {analysis.summary && (
                    <div className="card animate-slide-in" style={{
                        animationDelay: '300ms',
                        background: 'var(--gradient-card)'
                    }}>
                        <div className="flex items-center gap-md" style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                background: 'rgba(6, 182, 212, 0.2)',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <FileText size={24} color="var(--color-accent)" />
                            </div>
                            <h3 className="text-xl font-bold">Overall Summary</h3>
                        </div>

                        <p className="text-secondary" style={{ lineHeight: '1.8' }}>
                            {analysis.summary}
                        </p>
                    </div>
                )}
            </div>

            {/* Action Button */}
            <div style={{ textAlign: 'center' }}>
                <button className="btn btn-primary btn-lg" onClick={onReset}>
                    Analyze Another Resume
                </button>
            </div>
        </div>
    )
}

export default AnalysisResults
