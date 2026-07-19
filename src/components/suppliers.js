import React, { useState } from "react";
import "./suppliers.css";


const Suppliers = () => {


const [suppliers,setSuppliers] = useState([

{
id:1,
code:"SUP001",
company:"ABC Steel Pvt Ltd",
contact:"Kamal Perera",
phone:"0712345678",
email:"abcsteel@gmail.com",
address:"Colombo",
status:"Active"
},

{
id:2,
code:"SUP002",
company:"Power Lanka",
contact:"Nimal Silva",
phone:"0771234567",
email:"powerlanka@gmail.com",
address:"Kandy",
status:"Active"
}

]);



const [supplier,setSupplier] = useState({

code:"",
company:"",
contact:"",
phone:"",
email:"",
address:""

});



const [search,setSearch] = useState("");




const handleChange=(e)=>{

setSupplier({

...supplier,

[e.target.name]:e.target.value

});

};





const addSupplier=()=>{


if(!supplier.company)
return;



const newSupplier={

id:Date.now(),

...supplier,

status:"Active"

};



setSuppliers([

...suppliers,

newSupplier

]);



setSupplier({

code:"",
company:"",
contact:"",
phone:"",
email:"",
address:""

});


};







const deleteSupplier=(id)=>{


setSuppliers(

suppliers.filter(

(item)=>item.id!==id

)

);


};







const filteredSuppliers=suppliers.filter(

(item)=>

item.company
.toLowerCase()
.includes(search.toLowerCase())

);






return(


<div className="supplier-container">


<h2>
Supplier Management
</h2>




<div className="search-section">


<input

placeholder="Search Supplier..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


</div>






<div className="supplier-form">


<input

name="code"

placeholder="Supplier Code"

value={supplier.code}

onChange={handleChange}

/>




<input

name="company"

placeholder="Company Name"

value={supplier.company}

onChange={handleChange}

/>





<input

name="contact"

placeholder="Contact Person"

value={supplier.contact}

onChange={handleChange}

/>





<input

name="phone"

placeholder="Phone Number"

value={supplier.phone}

onChange={handleChange}

/>





<input

name="email"

placeholder="Email"

value={supplier.email}

onChange={handleChange}

/>





<input

name="address"

placeholder="Address"

value={supplier.address}

onChange={handleChange}

/>




<button

className="add-btn"

onClick={addSupplier}

>

Add Supplier

</button>



</div>







<table>


<thead>

<tr>

<th>Code</th>

<th>Company</th>

<th>Contact</th>

<th>Phone</th>

<th>Email</th>

<th>Address</th>

<th>Status</th>

<th>Action</th>

</tr>


</thead>




<tbody>


{

filteredSuppliers.map((item)=>(


<tr key={item.id}>


<td>{item.code}</td>

<td>{item.company}</td>

<td>{item.contact}</td>

<td>{item.phone}</td>

<td>{item.email}</td>

<td>{item.address}</td>


<td>

<span className="active-status">

{item.status}

</span>

</td>



<td>

<button

className="delete-btn"

onClick={()=>deleteSupplier(item.id)}

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



export default Suppliers;