import React, { useState } from "react";
import "./materials.css";


const Materials = () => {


const [materials,setMaterials] = useState([

{
id:1,
code:"RM001",
name:"Steel Sheet",
category:"Metal",
supplier:"ABC Steel",
quantity:200,
price:2500
},

{
id:2,
code:"RM002",
name:"Plastic Granules",
category:"Plastic",
supplier:"XYZ Industries",
quantity:80,
price:800
},

{
id:3,
code:"RM003",
name:"Copper Wire",
category:"Electrical",
supplier:"Power Lanka",
quantity:15,
price:1200
}

]);



const [material,setMaterial] = useState({

code:"",
name:"",
category:"",
supplier:"",
quantity:"",
price:""

});



const [search,setSearch]=useState("");





const handleChange=(e)=>{

setMaterial({

...material,

[e.target.name]:e.target.value

});

};






const addMaterial=()=>{


if(
!material.name ||
!material.quantity
)

return;



const newMaterial={

id:Date.now(),

...material,

quantity:Number(material.quantity),

price:Number(material.price)

};



setMaterials([

...materials,

newMaterial

]);



setMaterial({

code:"",
name:"",
category:"",
supplier:"",
quantity:"",
price:""

});


};







const deleteMaterial=(id)=>{


setMaterials(

materials.filter(

(item)=>item.id!==id

)

);


};







const filteredMaterials = materials.filter(

(item)=>

item.name
.toLowerCase()
.includes(search.toLowerCase())

);






return(

<div className="materials-container">


<h2>
Raw Material Management
</h2>





<div className="search-area">


<input

placeholder="Search Material..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


</div>







<div className="material-form">



<input

name="code"

placeholder="Material Code"

value={material.code}

onChange={handleChange}

/>



<input

name="name"

placeholder="Material Name"

value={material.name}

onChange={handleChange}

/>




<input

name="category"

placeholder="Category"

value={material.category}

onChange={handleChange}

/>




<input

name="supplier"

placeholder="Supplier"

value={material.supplier}

onChange={handleChange}

/>




<input

name="quantity"

type="number"

placeholder="Quantity"

value={material.quantity}

onChange={handleChange}

/>




<input

name="price"

type="number"

placeholder="Unit Price"

value={material.price}

onChange={handleChange}

/>





<button

className="add-btn"

onClick={addMaterial}

>

Add Material

</button>



</div>









<table>


<thead>

<tr>

<th>
Code
</th>

<th>
Material
</th>

<th>
Category
</th>

<th>
Supplier
</th>

<th>
Quantity
</th>

<th>
Unit Price
</th>

<th>
Total Value
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

filteredMaterials.map((item)=>(


<tr key={item.id}>


<td>
{item.code}
</td>


<td>
{item.name}
</td>


<td>
{item.category}
</td>


<td>
{item.supplier}
</td>


<td>
{item.quantity}
</td>


<td>
Rs. {item.price}
</td>



<td>

Rs. {item.quantity * item.price}

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

onClick={()=>deleteMaterial(item.id)}

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



export default Materials;