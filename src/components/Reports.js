import React, { useState } from "react";
import "./Report.css";

const Reports = () => {
  
  const [reportData, setReportData] = useState({
    totalInventory: 20,
    ordersToday: 5,
    productionStatus: "Pending",
  });

  const generateReport = () => {
   
    const data = {
      totalInventory: Math.floor(Math.random() * 50) + 1,
      ordersToday: Math.floor(Math.random() * 20) + 1,
      productionStatus: ["Running Smoothly", "Pending", "Delayed"][Math.floor(Math.random() * 3)],
    };
    setReportData(data);
  };

  return (
    <div className="reports-container">
      <h2>Reports Dashboard</h2>
      <p>Click the button below to generate a quick report:</p>

      <button className="generate-btn" onClick={generateReport}>
        Generate Report
      </button>

      {reportData && (
        <div className="report-cards">
          <div className="card">
            <h3><b>Total Inventory</b></h3>
            <p>{reportData.totalInventory}</p>
          </div>

          <div className="card">
            <h3><b>Orders Today</b></h3>
            <p>{reportData.ordersToday}</p>
          </div>

          <div className="card">
            <h3><b>Production Status</b></h3>
            <p>{reportData.productionStatus}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;