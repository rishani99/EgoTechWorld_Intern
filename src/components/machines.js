import React, { useState } from "react";
import "./machines.css";


const Machines = () => {


const [machines,setMachines] = useState([

{
id:1,
machineId:"MC001",
name:"CNC Cutting Machine",
type:"Cutting",
location:"Production Floor A",
purchase:"2024-01-15",
status:"Running"
},


{
id:2,
machineId:"MC002",
name:"Injection Molding Machine",
type:"Molding",
location:"Production Floor B",
purchase:"2023-06-20",
status:"Maintenance"
},


{
id:3,
machineId:"MC003",
name:"Packaging Machine",
type:"Packaging",
location:"Packing Area",
purchase:"2025-02-10",
status:"Idle"
}


]);





const [machine,setMachine] = useState({

machineId:"",
name:"",
type:"",
location:"",
purchase:"",
status:"Running"

});



const [search,setSearch] = useState("");





const handleChange=(e)=>{


setMachine({

...machine,

[e.target.name]:e.target.value

});


};






const addMachine=()=>{


if(!machine.name)
return;



const newMachine={

id:Date.now(),

...machine

};



setMachines([

...machines,

newMachine

]);



setMachine({

machineId:"",
name:"",
type:"",
location:"",
purchase:"",
status:"Running"

});


};







const deleteMachine=(id)=>{


setMachines(

machines.filter(

(machine)=>machine.id!==id

)

);


};







const filteredMachines = machines.filter(

(machine)=>

machine.name
.toLowerCase()
.includes(search.toLowerCase())

);







return(


<div className="machine-container">


<h2>
Machine Management
</h2>





<div className="search-box">


<input

placeholder="Search Machine..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


</div>







<div className="machine-form">



<input

name="machineId"

placeholder="Machine ID"

value={machine.machineId}

onChange={handleChange}

/>



<input

name="name"

placeholder="Machine Name"

value={machine.name}

onChange={handleChange}

/>




<input

name="type"

placeholder="Machine Type"

value={machine.type}

onChange={handleChange}

/>




<input

name="location"

placeholder="Location"

value={machine.location}

onChange={handleChange}

/>




<input

name="purchase"

type="date"

value={machine.purchase}

onChange={handleChange}

 />





<select

name="status"

value={machine.status}

onChange={handleChange}

>


<option>
Running
</option>

<option>
Maintenance
</option>

<option>
Idle
</option>


</select>






<button

className="add-btn"

onClick={addMachine}

>

Add Machine

</button>



</div>









<table>


<thead>

<tr>

<th>Machine ID</th>

<th>Machine Name</th>

<th>Type</th>

<th>Location</th>

<th>Purchase Date</th>

<th>Status</th>

<th>Action</th>

</tr>

</thead>





<tbody>


{

filteredMachines.map((item)=>(


<tr key={item.id}>


<td>
{item.machineId}
</td>


<td>
{item.name}
</td>


<td>
{item.type}
</td>


<td>
{item.location}
</td>


<td>
{item.purchase}
</td>




<td>


{

item.status==="Running" &&

<span className="running">

Running

</span>

}



{

item.status==="Maintenance" &&

<span className="maintenance">

Maintenance

</span>

}



{

item.status==="Idle" &&

<span className="idle">

Idle

</span>

}



</td>




<td>


<button

className="delete-btn"

onClick={()=>deleteMachine(item.id)}

>

Delete

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



export default Machines;