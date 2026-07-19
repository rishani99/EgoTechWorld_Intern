import React, { useState } from "react";
import "./Reports.css";

import {
  FileText,
  Factory,
  Boxes,
  Users,
  Cpu,
  Download
} from "lucide-react";


const Reports = () => {


const [reports] = useState([

{
id:1,
name:"Monthly Production Report",
type:"Production",
date:"2026-02-15",
status:"Completed"
},

{
id:2,
name:"Inventory Stock Report",
type:"Inventory",
date:"2026-02-20",
status:"Completed"
},

{
id:3,
name:"Employee Attendance Report",
type:"Employee",
date:"2026-02-25",
status:"Available"
},

{
id:4,
name:"Machine Performance Report",
type:"Machine",
date:"2026-03-01",
status:"Available"
}

]);



const [search,setSearch]=useState("");




const filteredReports = reports.filter(

(report)=>

report.name
.toLowerCase()
.includes(search.toLowerCase())

);





const downloadReport=(name)=>{

alert(name+" Download Started");

};






return(


<div className="reports-container">


<h2>
Reports Management
</h2>






{/* Summary Cards */}


<div className="report-cards">


<div className="report-card">

<Factory/>

<h3>
25
</h3>

<p>
Production Reports
</p>

</div>




<div className="report-card">

<Boxes/>

<h3>
18
</h3>

<p>
Inventory Reports
</p>

</div>





<div className="report-card">

<Users/>

<h3>
12
</h3>

<p>
Employee Reports
</p>

</div>





<div className="report-card">

<Cpu/>

<h3>
8
</h3>

<p>
Machine Reports
</p>

</div>


</div>








<div className="search-area">


<input

placeholder="Search Report..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


</div>








<table>


<thead>

<tr>

<th>
Report Name
</th>

<th>
Type
</th>

<th>
Created Date
</th>

<th>
Status
</th>

<th>
Action
</th>


</tr>


</thead>






<tbody>


{

filteredReports.map((report)=>(


<tr key={report.id}>


<td>


<div className="report-name">

<FileText size={18}/>

{report.name}

</div>


</td>


<td>
{report.type}
</td>


<td>
{report.date}
</td>



<td>

<span className="status">

{report.status}

</span>


</td>




<td>


<button

className="download-btn"

onClick={()=>downloadReport(report.name)}

>

<Download size={16}/>

Download

</button>



</td>



</tr>



))


}



</tbody>



</table>







</div>


)

}


export default Reports;