import { useCSVFile } from './hooks/useCSVFile' // 👈 Import our custom logic dashboard
import { FileInput } from './components/FileInput'
import { DataTable } from './components/DataTable'

function App() {
  // Pull out our state boxes and handler trigger in a single clean line
  const { file, csvData, handleFileSuccess } = useCSVFile()

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>📊 CSV Data Visualizer (Custom Hook Approach)</h1>
      <hr style={{ margin: '20px 0', borderColor: '#e2e8f0' }} />

      {/* Plug the hook trigger right into the component prop */}
      <FileInput onFileLoaded={handleFileSuccess} />

      {file && (
        <div style={{ marginBottom: '20px', padding: '12px', background: '#edf2f7', borderRadius: '6px', fontSize: '14px' }}>
          <strong>Selected File:</strong> {file.name}
        </div>
      )}

      {/* Plug the hook state data right into the table prop */}
      {csvData && <DataTable data={csvData} />}
    </div>
  )
}

export default App