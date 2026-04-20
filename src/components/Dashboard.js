import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import Inventory from "./Inventory";
import Production from "./Production";
import Orders from "./Orders";
import Reports from "./Reports";
import "./Dashboard.css";

const menuItems = [
  { name: "Dashboard", path: "/" },
  { name: "Inventory", path: "/inventory" },
  { name: "Production", path: "/production" },
  { name: "Orders", path: "/orders" },
  { name: "Reports", path: "/reports" },
];

const Dashboard = () => {
  return (
    <Router>
      <div className="dashboard-container">
        {/* Sidebar */}
        <div className="sidebar">
          <h2 className="sidebar-title">MMS Portal</h2>
          <ul className="menu-list">
            {menuItems.map((item) => (
              <li key={item.name} className="menu-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? "active-link" : undefined)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/production" element={<Production />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;