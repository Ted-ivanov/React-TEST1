import { ChangeEvent } from 'react'
interface FileInputProps {
  onFileLoaded: (file: File) => void;
}

// Visual Presenter Component
export function FileInput({ onFileLoaded }: FileInputProps) {

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]

    if (selectedFile) {
      onFileLoaded(selectedFile)
    }
  }

  return (
    <div style={{
      border: '2px dashed #cbd5e0',
      borderRadius: '8px',
      padding: '30px',
      textAlign: 'center',
      background: '#f7fafc',
      cursor: 'pointer',
      marginBottom: '20px'
    }}>
      <label style={{ cursor: 'pointer', display: 'block' }}>
        <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#4a5568', display: 'block', marginBottom: '8px' }}>
          📤 Upload your CSV File
        </span>
        <span style={{ fontSize: '13px', color: '#718096', display: 'block', marginBottom: '15px' }}>
          Click to browse or drag and drop a .csv file here
        </span>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          style={{ display: 'inline-block', fontSize: '14px' }}
        />
      </label>
    </div>
  )
}