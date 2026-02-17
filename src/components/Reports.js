import React, { useState } from "react";

const Reports = () => {
  const [reportData, setReportData] = useState("");

  const generateReport = () => {
    const data = `
Total Inventory Items: 15
Orders Today: 8
Production Status: Running Smoothly
    `;
    setReportData(data);
  };

  return (
    <div>
      <h2>Reports Page</h2>
      <p>Click the button below to generate a quick report:</p>

      <button 
        onClick={generateReport} 
        style={{
          padding: "10px 20px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "1rem"
        }}
      >
        Generate Report
      </button>

      {reportData && (
        <pre
          style={{
            backgroundColor: "#f3f4f6",
            padding: "1rem",
            borderRadius: "8px",
            whiteSpace: "pre-wrap"
          }}
        >
          {reportData}
        </pre>
      )}
    </div>
  );
};

export default Reports;
