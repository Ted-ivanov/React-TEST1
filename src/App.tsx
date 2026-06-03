import { useState, ChangeEvent } from 'react'
// Import our new parser function and its type interfaces
import { parseCSVText, ParsedCSVResult } from './utils/csvParser'

function App() {
  // Fetch the file from the page
  const [file, setFile] = useState<File | null>(null)
  // Pass it to the parser
  const [csvData, setCsvData] = useState<ParsedCSVResult | null>(null)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]

    if (selectedFile) {
      setFile(selectedFile)

      // 2. Initialize the native browser file reader
      const reader = new FileReader()

      // Define what happens when the browser finishes reading the file
      reader.onload = (e) => {
        const text = e.target?.result as string
        if (text) {
          // Send the raw text to our TypeScript parsing engine
          const parsedResult = parseCSVText(text)
          setCsvData(parsedResult) // Save the structured data into state
        }
      }

      // Start reading the file as a plain text string
      reader.readAsText(selectedFile)
    }
  }

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif' }}>
      <h1>📊 CSV Data Visualizer</h1>
      <p>Select a CSV file from your computer to begin parsing.</p>

      <hr style={{ margin: '20px 0', borderColor: '#eee' }} />

      <div style={{ marginBottom: '20px' }}>
        <input type="file" accept=".csv" onChange={handleFileChange} />
      </div>

      {file && (
        <div style={{ marginBottom: '20px', padding: '12px', background: '#f5f5f5', borderRadius: '6px', fontSize: '14px' }}>
          <strong>Selected File:</strong> {file.name} ({(file.size / 1024).toFixed(2)} KB)
        </div>
      )}

      {/* 3. Temporal Diagnostic Verification Box */}
      {csvData && (
        <div style={{ marginTop: '20px', padding: '15px', border: '1px dashed #999', borderRadius: '6px', background: '#fafafa' }}>
          <h3 style={{ marginTop: 0, color: '#2b6cb0' }}>✅ Success: Text Successfully Parsed into State!</h3>
          <p><strong>Detected Column Headers:</strong> {csvData.headers.join(' | ')}</p>
          <p><strong>Total Row Count:</strong> {csvData.rows.length} records found.</p>
        </div>
      )}
    </div>
  )
}

export default App