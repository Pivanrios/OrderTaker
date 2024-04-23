import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";

function Orders() {
  //add some states to our component
  const [orders, setOrders] = useState([]);
  const ordersCollections = collection(db, "orders")
  //When we refresh the page
  useEffect(()=>{

    const setData = async()=>{
      const data = await getDocs(ordersCollections);
      setOrders(data.docs.map((doc)=> ({...doc.data(), id:doc.id})))
      console.log("data:",data);
      console.log("orders",orders);

    };
    setData();

  },[]);

  return (
    <>
        <h2>Orders</h2>
        <div>
          {orders.map((order)=>(
            <div className="container-row">
              <p>{order.orderId}</p>
              <p>{order.date}</p>
              <p>{order.customerName}</p>
              <p>{order.platillos}</p>
              <p>{order.total}</p>
              <p>{order.status}</p>
            </div>
          ))}
        </div>
    </>

  )
}

export default Orders;