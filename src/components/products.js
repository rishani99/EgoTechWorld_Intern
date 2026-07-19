import React, { useState } from "react";
import "./products.css";


const Products = () => {


const [products,setProducts] = useState([

{
id:1,
code:"P001",
name:"Office Chair",
category:"Furniture",
price:25000,
stock:50
},

{
id:2,
code:"P002",
name:"Wooden Table",
category:"Furniture",
price:45000,
stock:15
},

{
id:3,
code:"P003",
name:"Computer Desk",
category:"Equipment",
price:30000,
stock:5
}

]);



const [product,setProduct] = useState({

code:"",
name:"",
category:"",
price:"",
stock:""

});



const [search,setSearch] = useState("");




const handleChange=(e)=>{

setProduct({

...product,

[e.target.name]:e.target.value

});

};





const addProduct=()=>{


if(
!product.name ||
!product.code
)

return;



const newProduct={

id:Date.now(),

...product,

price:Number(product.price),

stock:Number(product.stock)

};



setProducts([

...products,

newProduct

]);



setProduct({

code:"",
name:"",
category:"",
price:"",
stock:""

});


};





const deleteProduct=(id)=>{


setProducts(

products.filter(

(product)=>product.id!==id

)

);


};





const filteredProducts = products.filter(

(item)=>

item.name
.toLowerCase()
.includes(search.toLowerCase())

);






return(


<div className="product-container">


<h2>
Product Management
</h2>



<div className="search-box">


<input

type="text"

placeholder="Search Product..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


</div>






<div className="product-form">



<input

name="code"

placeholder="Product Code"

value={product.code}

onChange={handleChange}

/>



<input

name="name"

placeholder="Product Name"

value={product.name}

onChange={handleChange}

/>




<input

name="category"

placeholder="Category"

value={product.category}

onChange={handleChange}

/>




<input

name="price"

type="number"

placeholder="Price"

value={product.price}

onChange={handleChange}

/>





<input

name="stock"

type="number"

placeholder="Stock Quantity"

value={product.stock}

onChange={handleChange}

/>





<button

onClick={addProduct}

className="add-product-btn"

>

Add Product

</button>


</div>






<table>


<thead>

<tr>

<th>
Code
</th>

<th>
Product Name
</th>

<th>
Category
</th>

<th>
Price
</th>

<th>
Stock
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

filteredProducts.map((item)=>(


<tr key={item.id}>


<td>{item.code}</td>


<td>{item.name}</td>


<td>{item.category}</td>


<td>
Rs. {item.price}
</td>


<td>
{item.stock}
</td>



<td>


{

item.stock < 10 ?

<span className="low">

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

onClick={()=>deleteProduct(item.id)}

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


export default Products;