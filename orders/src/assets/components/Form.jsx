import { useState } from "react"
import { collection,addDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";


function Form() {
  //create states to save the values from the input
  const [newDate, setDate] = useState("");
  const [newName, setName] = useState("");
  const [newDish, setDish] = useState("");
  const [newBreakroom, setBreakroom] = useState("")
  const [newTotal, setTotal] = useState(0);

  //get the collection from our database
  const ordersCollection = collection(db, "orders");

  const addOrder = async (e)=>{
    e.preventDefault();//prevenrts refresh and allows to start fucntion
    console.log("start to add order");
    //add validation
    if((newDate.length > 0) && (newName.length > 0) && (newDish.length > 0) && (newBreakroom.length > 0)){ //conditions to add doc to database...
      await addDoc(ordersCollection, {date:newDate, customerName:newName, platillos:newDish, breakroom:newBreakroom, total:newTotal});//add new document 
    }
  };

  return (
    <>
    <h2>Take Order</h2>
    <form action="" className="container-col">
        <label htmlFor="">Order Number #</label>
        <label htmlFor="">Date: <input type="date" required onChange={(event)=>{setDate(event.target.value)}}/></label>
        <label htmlFor="">Name: <input type="text" required onChange={(event)=>{setName(event.target.value)}}/></label>
        <label htmlFor="">Platillo: <input type="text" required onChange={(event)=>{setDish(event.target.value)}}/></label>
        <label htmlFor="">Breakroom: <input type="text" required onChange={(event)=>{setBreakroom(event.target.value)}}/></label>
        <label htmlFor="">Total:<input type="number" required onChange={(event)=>{setTotal(event.target.value)}}/></label>
        <button onClick={(e)=>{addOrder(e)}}>Submit</button>
    </form>
    </>
  )
}

export default Form