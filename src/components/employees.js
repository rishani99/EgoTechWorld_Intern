import React, { useState } from "react";
import "./employees.css";


const Employees = () => {


const [employees,setEmployees] = useState([

{
id:1,
empId:"EMP001",
name:"Kasun Perera",
department:"Production",
position:"Supervisor",
phone:"0712345678",
email:"kasun@gmail.com",
shift:"Morning",
attendance:"Present"
},


{
id:2,
empId:"EMP002",
name:"Nimal Silva",
department:"Inventory",
position:"Store Keeper",
phone:"0774567890",
email:"nimal@gmail.com",
shift:"Night",
attendance:"Present"
}

]);





const [employee,setEmployee] = useState({

empId:"",
name:"",
department:"",
position:"",
phone:"",
email:"",
shift:""

});



const [search,setSearch]=useState("");





const handleChange=(e)=>{

setEmployee({

...employee,

[e.target.name]:e.target.value

});

};






const addEmployee=()=>{


if(!employee.name)
return;



const newEmployee={

id:Date.now(),

...employee,

attendance:"Present"

};



setEmployees([

...employees,

newEmployee

]);



setEmployee({

empId:"",
name:"",
department:"",
position:"",
phone:"",
email:"",
shift:""

});


};






const deleteEmployee=(id)=>{


setEmployees(

employees.filter(

(emp)=>emp.id!==id

)

);


};






const filteredEmployees=employees.filter(

(emp)=>

emp.name
.toLowerCase()
.includes(search.toLowerCase())

);






return(

<div className="employee-container">


<h2>
Employee Management
</h2>





<div className="search-box">


<input

placeholder="Search Employee..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


</div>







<div className="employee-form">


<input

name="empId"

placeholder="Employee ID"

value={employee.empId}

onChange={handleChange}

/>



<input

name="name"

placeholder="Employee Name"

value={employee.name}

onChange={handleChange}

/>




<input

name="department"

placeholder="Department"

value={employee.department}

onChange={handleChange}

/>





<input

name="position"

placeholder="Position"

value={employee.position}

onChange={handleChange}

/>




<input

name="phone"

placeholder="Phone Number"

value={employee.phone}

onChange={handleChange}

/>





<input

name="email"

placeholder="Email"

value={employee.email}

onChange={handleChange}

/>





<input

name="shift"

placeholder="Shift"

value={employee.shift}

onChange={handleChange}

/>






<button

className="add-btn"

onClick={addEmployee}

>

Add Employee

</button>


</div>







<table>


<thead>

<tr>

<th>ID</th>

<th>Name</th>

<th>Department</th>

<th>Position</th>

<th>Phone</th>

<th>Email</th>

<th>Shift</th>

<th>Attendance</th>

<th>Action</th>

</tr>

</thead>





<tbody>


{

filteredEmployees.map((emp)=>(


<tr key={emp.id}>


<td>
{emp.empId}
</td>


<td>
{emp.name}
</td>


<td>
{emp.department}
</td>


<td>
{emp.position}
</td>


<td>
{emp.phone}
</td>


<td>
{emp.email}
</td>


<td>
{emp.shift}
</td>



<td>

<span className="present">

{emp.attendance}

</span>


</td>




<td>


<button

className="delete-btn"

onClick={()=>deleteEmployee(emp.id)}

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



export default Employees;