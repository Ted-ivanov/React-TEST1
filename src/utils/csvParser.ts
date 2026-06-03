// 1. Define the structural blueprint for a single parsed row
export interface CSVRowData {
  [key: string]: string;
}

// 2. Define the structure for the final parsed output
export interface ParsedCSVResult {
  headers: string[];
  rows: CSVRowData[];
}

// 3. The Core Parsing Function
export function parseCSVText(rawText: string): ParsedCSVResult {
  // Split the text into individual lines, removing completely empty lines
  const lines = rawText.split('\n').map(line => line.trim()).filter(line => line.length > 0);

  if (lines.length === 0) {
    return { headers: [], rows: [] };
  }

  // Extract the very first line as our column headers
  const headers = lines[0].split(',').map(header => header.trim());

  // Loop through the remaining lines to build our data rows
  const rows: CSVRowData[] = lines.slice(1).map(line => {
    const values = line.split(',').map(val => val.trim());
    const rowObject: CSVRowData = {};

    headers.forEach((header, index) => {
      // Pair each header with its corresponding cell value
      rowObject[header] = values[index] || '';
    });

    return rowObject;
  });

  return { headers, rows };
}