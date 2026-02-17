import React from "react";

const DashboardHome = () => {
  const recentJobs = [
    { job: "Order #101", machine: "Machine A", date: "2026-02-16", status: "Completed" },
    { job: "Order #102", machine: "Machine B", date: "2026-02-16", status: "Pending" },
    { job: "Order #103", machine: "Machine C", date: "2026-02-16", status: "In Progress" },
    { job: "Order #104", machine: "Machine A", date: "2026-02-16", status: "Cancelled" },
  ];

  return (
    <div>
      <div className="header">
        <h1>Dashboard</h1>
        <span>{new Date().toLocaleString()}</span>
      </div>

      {/* Info Cards */}
      <div className="info-cards">
        <div className="card card-blue"><h3>Total Orders</h3><p>120</p></div>
        <div className="card card-teal"><h3>Work in Progress</h3><p>35</p></div>
        <div className="card card-green"><h3>Finished Goods</h3><p>50</p></div>
        <div className="card card-yellow"><h3>Pending Issues</h3><p>8</p></div>
      </div>

      {/* Recent Jobs Table */}
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
                <td className={`status ${
                    job.status === "Completed" ? "status-completed" :
                    job.status === "Pending" ? "status-pending" :
                    job.status === "In Progress" ? "status-progress" : "status-cancelled"
                  }`}>{job.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardHome;
