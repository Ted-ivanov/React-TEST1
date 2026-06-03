import { useState, ChangeEvent } from 'react'

function App() {
  // 1. Defining our State with a TypeScript Generic
  const [file, setFile] = useState<File | null>(null)

  // 2. Handling the File Selection Event with Type Annotations
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]

    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '600px' }}>
      <h1>📊 CSV Data Visualizer</h1>
      <p>Select a CSV file from your computer to begin parsing.</p>

      <hr style={{ margin: '20px 0', borderColor: '#eee' }} />

      {/* 3. The File Input UI */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
        />
      </div>

      {/* 4. Conditional Rendering Display */}
      {file && (
        <div style={{ padding: '15px', background: '#f5f5f5', borderRadius: '6px' }}>
          <strong>Selected File:</strong> {file.name} ({(file.size / 1024).toFixed(2)} KB)
        </div>
      )}
    </div>
  )
}

export default App