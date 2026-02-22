import React, { useEffect, useState } from "react";
import "./dashboardhome.css";

const DashboardHome = () => {

  const [dateTime, setDateTime] = useState(new Date());

  // Live clock update
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const recentJobs = [
    { job: "Order #101", machine: "Machine A", date: "2026-02-16", status: "Completed" },
    { job: "Order #102", machine: "Machine B", date: "2026-02-16", status: "Pending" },
    { job: "Order #103", machine: "Machine C", date: "2026-02-16", status: "In Progress" },
    { job: "Order #104", machine: "Machine A", date: "2026-02-16", status: "Cancelled" },
  ];

  return (
    <div className="dashboard-home">

      {/* Header */}
      <div className="header">
        <div>
          <h1>Manufacturing Dashboard</h1>
          <p className="subtitle">Welcome back 👋</p>
        </div>

        <div className="datetime-box">
          <span>{dateTime.toLocaleDateString()}</span>
          <strong>{dateTime.toLocaleTimeString()}</strong>
        </div>
      </div>

      {/* Info Cards */}
      <div className="info-cards">
        <div className="card gradient-blue">
          <h3>Total Orders</h3>
          <p>120</p>
        </div>

        <div className="card gradient-purple">
          <h3>Work in Progress</h3>
          <p>35</p>
        </div>

        <div className="card gradient-green">
          <h3>Finished Goods</h3>
          <p>50</p>
        </div>

        <div className="card gradient-orange">
          <h3>Pending Issues</h3>
          <p>8</p>
        </div>
      </div>

      {/* Table */}
      <div className="jobs-table">
        <h2>Recent Production Jobs</h2>

        <table>
          <thead>
            <tr>
              <th>Job</th>
              <th>Machine</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {recentJobs.map((job, idx) => (
              <tr key={idx}>
                <td>{job.job}</td>
                <td>{job.machine}</td>
                <td>{job.date}</td>
                <td>
                  <span className={`status-badge ${
                    job.status === "Completed" ? "completed" :
                    job.status === "Pending" ? "pending" :
                    job.status === "In Progress" ? "progress" :
                    "cancelled"
                  }`}>
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default DashboardHome;