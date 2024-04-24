
function Form() {
  return (
    <>
    <h2>Take Order</h2>
    <form action="" className="container-col">
        <label htmlFor="">Order Number #</label>
        <label htmlFor="">Date: <input type="date" /></label>
        <label htmlFor="">Name: <input type="text" /></label>
        <label htmlFor="">Platillo: <input type="text" /></label>
        <label htmlFor="">cantidad:<input type="range" /></label>
        <input type="submit" value="Submit" />
    </form>
    </>
  )
}

export default Form