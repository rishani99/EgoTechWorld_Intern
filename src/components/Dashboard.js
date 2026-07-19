import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import {
  LayoutDashboard,
  Package,
  Boxes,
  Warehouse,
  Factory,
  Truck,
  Users,
  Cpu,
  ShoppingBag,
  Settings,
  BarChart3,
  Bell,
  Search,
  CircleUserRound
} from "lucide-react";


import DashboardHome from "./DashboardHome";
import Products from "./products";
import Materials from "./materials";
import Inventory from "./Inventory";
import Production from "./Production";
import Suppliers from "./suppliers";
import Employees from "./employees";
import Machines from "./machines";
import Orders from "./Orders";
import Reports from "./Reports";
import SettingsPage from "./settings";

import "./Dashboard.css";


// Sidebar Menu

const menuItems = [

{
name:"Dashboard",
path:"/",
icon:<LayoutDashboard size={20}/>
},

{
name:"Products",
path:"/products",
icon:<Package size={20}/>
},

{
name:"Raw Materials",
path:"/materials",
icon:<Boxes size={20}/>
},

{
name:"Inventory",
path:"/inventory",
icon:<Warehouse size={20}/>
},

{
name:"Production",
path:"/production",
icon:<Factory size={20}/>
},

{
name:"Suppliers",
path:"/suppliers",
icon:<Truck size={20}/>
},

{
name:"Employees",
path:"/employees",
icon:<Users size={20}/>
},

{
name:"Machines",
path:"/machines",
icon:<Cpu size={20}/>
},

{
name:"Orders",
path:"/orders",
icon:<ShoppingBag size={20}/>
},

{
name:"Reports",
path:"/reports",
icon:<BarChart3 size={20}/>
},

{
name:"Settings",
path:"/settings",
icon:<Settings size={20}/>
}

];



function Dashboard(){


return(

<Router>


<div className="dashboard-container">


{/* Sidebar */}

<aside className="sidebar">


<div className="sidebar-brand">

<h2>MMS Portal</h2>

<p>
Manufacturing Management
</p>

</div>



<nav>

<ul className="menu-list">


{
menuItems.map((item)=>(

<li key={item.name}>


<NavLink

to={item.path}

className={({isActive})=>

isActive ?

"nav-link active-link"

:

"nav-link"

}

>


<span className="nav-icon">

{item.icon}

</span>


<span>

{item.name}

</span>


</NavLink>


</li>


))
}


</ul>

</nav>





<div className="sidebar-footer">


<div className="user-avatar">

A

</div>


<div>

<h4>

Admin User

</h4>

<p>

System Manager

</p>


</div>


</div>


</aside>





{/* Main Area */}


<main className="main-content">



<header className="top-navbar">


<div className="page-title">

Manufacturing Dashboard

</div>




<div className="navbar-right">


<div className="search">

<Search size={18}/>

<input

placeholder="Search..."

 />

</div>



<Bell className="icon"/>



<CircleUserRound

size={32}

/>



</div>



</header>






<div className="content-body">


<Routes>


<Route

path="/"

element={<DashboardHome/>}

/>


<Route

path="/products"

element={<Products/>}

/>



<Route

path="/materials"

element={<Materials/>}

/>



<Route

path="/inventory"

element={<Inventory/>}

/>


<Route

path="/production"

element={<Production/>}

/>


<Route

path="/suppliers"

element={<Suppliers/>}

/>


<Route

path="/employees"

element={<Employees/>}

/>



<Route

path="/machines"

element={<Machines/>}

/>


<Route

path="/orders"

element={<Orders/>}

/>



<Route

path="/reports"

element={<Reports/>}

/>



<Route

path="/settings"

element={<SettingsPage/>}

/>


</Routes>



</div>



</main>


</div>


</Router>


)

}



export default Dashboard;