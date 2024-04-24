import { useState } from "react"
import { collection,addDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";


function Form() {
  //create states to save the values from the input
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [dish, setDish] = useState("");
  const [qty, setQty] = useState(0);
  //get the collection from our database
  const ordersCollection = collection(db, "orders");

  const addOrder = async (e)=>{
    e.preventDefault();//prevenrts refresh and allows to start fucntion
    console.log("start to add order");
    await addDoc(ordersCollection, {date:date, customerName:name, platillos:dish, total:qty});//add new document 
  };

  return (
    <>
    <h2>Take Order</h2>
    <form action="" className="container-col">
        <label htmlFor="">Order Number #</label>
        <label htmlFor="">Date: <input type="date" onChange={(event)=>{setDate(event.target.value)}}/></label>
        <label htmlFor="">Name: <input type="text" onChange={(event)=>{setName(event.target.value)}}/></label>
        <label htmlFor="">Platillo: <input type="text" onChange={(event)=>{setDish(event.target.value)}}/></label>
        <label htmlFor="">cantidad:<input type="number" onChange={(event)=>{setQty(event.target.value)}}/></label>
        <button onClick={(e)=>{addOrder(e)}}>Submit</button>
    </form>
    </>
  )
}

export default Form