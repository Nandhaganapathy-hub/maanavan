import { useState } from 'react'
import Header from './components/Header'
import UploadSection from './components/UploadSection'
import AnalysisResults from './components/AnalysisResults'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
    const [analysisData, setAnalysisData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleAnalysisComplete = (data) => {
        setAnalysisData(data)
        setLoading(false)
        setError(null)
    }

    const handleAnalysisStart = () => {
        setLoading(true)
        setError(null)
        setAnalysisData(null)
    }

    const handleError = (errorMessage) => {
        setError(errorMessage)
        setLoading(false)
        setAnalysisData(null)
    }

    const handleReset = () => {
        setAnalysisData(null)
        setError(null)
        setLoading(false)
    }

    return (
        <div className="app">
            <Header />

            <main className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                {!analysisData && !loading && (
                    <UploadSection
                        onAnalysisStart={handleAnalysisStart}
                        onAnalysisComplete={handleAnalysisComplete}
                        onError={handleError}
                    />
                )}

                {loading && <LoadingSpinner />}

                {error && (
                    <div className="card animate-fade-in" style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        borderColor: 'var(--color-error)',
                        textAlign: 'center',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        <h2 className="text-2xl font-bold" style={{ color: 'var(--color-error)', marginBottom: '1rem' }}>
                            Analysis Failed
                        </h2>
                        <p className="text-secondary" style={{ marginBottom: '1.5rem' }}>{error}</p>
                        <button className="btn btn-primary" onClick={handleReset}>
                            Try Again
                        </button>
                    </div>
                )}

                {analysisData && (
                    <AnalysisResults
                        data={analysisData}
                        onReset={handleReset}
                    />
                )}
            </main>
        </div>
    )
}

export default App
