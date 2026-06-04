import { useState } from 'react'
import { parseCSVText, ParsedCSVResult } from '../utils/csvParser'

/**
 * An isolated custom hook that encapsulates all state management
 * and data loading mechanics for processing CSV files.
 */
export function useCSVFile() {
  const [file, setFile] = useState<File | null>(null)
  const [csvData, setCsvData] = useState<ParsedCSVResult | null>(null)

  const handleFileSuccess = (selectedFile: File) => {
    setFile(selectedFile)

    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target?.result as string
      if (text) {
        const parsedResult = parseCSVText(text)
        setCsvData(parsedResult)
      }
    }
    reader.readAsText(selectedFile)
  }

  // We return a dashboard of values and functions that the UI needs
  return {
    file,
    csvData,
    handleFileSuccess
  }
}