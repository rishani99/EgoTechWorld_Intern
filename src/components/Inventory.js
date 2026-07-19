import React, { useState } from "react";
import "./Inventory.css";


const Inventory = () => {


const [inventory,setInventory] = useState([

{
id:1,
name:"Steel Sheet",
category:"Raw Material",
quantity:200,
supplier:"ABC Steel",
price:2500
},

{
id:2,
name:"Plastic Component",
category:"Raw Material",
quantity:50,
supplier:"XYZ Supplier",
price:500
},

{
id:3,
name:"Motor",
category:"Machine Part",
quantity:10,
supplier:"Power Tech",
price:15000
}


]);



const [form,setForm] = useState({

name:"",
category:"",
quantity:"",
supplier:"",
price:""

});



const [search,setSearch]=useState("");




const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};





const addItem=()=>{


if(!form.name || !form.quantity)

return;



const newItem={

id:Date.now(),

...form,

quantity:Number(form.quantity),

price:Number(form.price)

};



setInventory([

...inventory,

newItem

]);



setForm({

name:"",
category:"",
quantity:"",
supplier:"",
price:""

});


};





const deleteItem=(id)=>{


setInventory(

inventory.filter(

(item)=>item.id!==id

)

);


};





const filteredInventory=inventory.filter(

(item)=>

item.name.toLowerCase()

.includes(search.toLowerCase())

);





return(


<div className="inventory-container">



<h2>
Inventory Management
</h2>




<div className="top-section">


<input

placeholder="Search Material..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


</div>





<div className="input-section">



<input

name="name"

placeholder="Material Name"

value={form.name}

onChange={handleChange}

/>



<input

name="category"

placeholder="Category"

value={form.category}

onChange={handleChange}

/>



<input

name="quantity"

type="number"

placeholder="Quantity"

value={form.quantity}

onChange={handleChange}

/>



<input

name="supplier"

placeholder="Supplier"

value={form.supplier}

onChange={handleChange}

/>



<input

name="price"

type="number"

placeholder="Unit Price"

value={form.price}

onChange={handleChange}

/>



<button

className="add-btn"

onClick={addItem}

>

Add Material

</button>



</div>






<table>


<thead>

<tr>

<th>Material</th>

<th>Category</th>

<th>Quantity</th>

<th>Supplier</th>

<th>Unit Price</th>

<th>Status</th>

<th>Action</th>


</tr>


</thead>



<tbody>


{

filteredInventory.map((item)=>(


<tr key={item.id}>


<td>{item.name}</td>


<td>{item.category}</td>


<td>{item.quantity}</td>


<td>{item.supplier}</td>


<td>

Rs. {item.price}

</td>



<td>


{

item.quantity < 20 ?

<span className="low-stock">

Low Stock

</span>

:

<span className="available">

Available

</span>

}


</td>




<td>


<button

className="delete-btn"

onClick={()=>deleteItem(item.id)}

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



export default Inventory;