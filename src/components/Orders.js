import React, { useState } from "react";
import "./Orders.css";


const Orders = () => {


const [orders,setOrders] = useState([

{
id:1,
orderId:"ORD001",
customer:"ABC Company",
product:"Office Chair",
quantity:50,
orderDate:"2026-02-10",
deliveryDate:"2026-02-20",
status:"Completed"
},

{
id:2,
orderId:"ORD002",
customer:"XYZ Stores",
product:"Wooden Table",
quantity:20,
orderDate:"2026-02-15",
deliveryDate:"2026-03-01",
status:"Processing"
},

{
id:3,
orderId:"ORD003",
customer:"Global Mart",
product:"Computer Desk",
quantity:10,
orderDate:"2026-02-18",
deliveryDate:"2026-03-05",
status:"Pending"
}

]);





const [order,setOrder] = useState({

orderId:"",
customer:"",
product:"",
quantity:"",
orderDate:"",
deliveryDate:"",
status:"Pending"

});




const [search,setSearch]=useState("");





const handleChange=(e)=>{


setOrder({

...order,

[e.target.name]:e.target.value

});


};






const addOrder=()=>{


if(!order.customer || !order.product)

return;



const newOrder={

id:Date.now(),

...order,

quantity:Number(order.quantity)

};



setOrders([

...orders,

newOrder

]);



setOrder({

orderId:"",
customer:"",
product:"",
quantity:"",
orderDate:"",
deliveryDate:"",
status:"Pending"

});


};







const deleteOrder=(id)=>{


setOrders(

orders.filter(

(item)=>item.id!==id

)

);


};







const filteredOrders = orders.filter(

(item)=>

item.customer
.toLowerCase()
.includes(search.toLowerCase())

);







return(


<div className="orders-container">


<h2>
Order Management
</h2>





<div className="search-box">


<input

placeholder="Search Customer Order..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


</div>








<div className="order-form">


<input

name="orderId"

placeholder="Order ID"

value={order.orderId}

onChange={handleChange}

/>



<input

name="customer"

placeholder="Customer Name"

value={order.customer}

onChange={handleChange}

/>




<input

name="product"

placeholder="Product Name"

value={order.product}

onChange={handleChange}

/>




<input

name="quantity"

type="number"

placeholder="Quantity"

value={order.quantity}

onChange={handleChange}

/>





<input

name="orderDate"

type="date"

value={order.orderDate}

onChange={handleChange}

/>





<input

name="deliveryDate"

type="date"

value={order.deliveryDate}

onChange={handleChange}

/>






<select

name="status"

value={order.status}

onChange={handleChange}

>


<option>
Pending
</option>

<option>
Processing
</option>

<option>
Completed
</option>

<option>
Cancelled
</option>


</select>





<button

className="add-btn"

onClick={addOrder}

>

Add Order

</button>



</div>









<table>


<thead>

<tr>

<th>
Order ID
</th>

<th>
Customer
</th>

<th>
Product
</th>

<th>
Quantity
</th>

<th>
Order Date
</th>

<th>
Delivery Date
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

filteredOrders.map((item)=>(


<tr key={item.id}>


<td>
{item.orderId}
</td>


<td>
{item.customer}
</td>


<td>
{item.product}
</td>


<td>
{item.quantity}
</td>


<td>
{item.orderDate}
</td>


<td>
{item.deliveryDate}
</td>




<td>


<span

className={

item.status==="Completed"

?

"completed"

:

item.status==="Processing"

?

"processing"

:

item.status==="Cancelled"

?

"cancelled"

:

"pending"

}

>

{item.status}

</span>


</td>





<td>


<button

className="delete-btn"

onClick={()=>deleteOrder(item.id)}

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


export default Orders;