const ordersDb = [{
  id: 1,
  date: "12-03-2024",
  idCustomer: 1322,
  custumerName: "Pedro Perez",
  order: [{name:"lasagna", price:8}],
  qty:1,
  status: ["progress"]
},
{
  id: 2,
  date: "12-03-2024",
  idCustomer: 1222,
  custumerName: "Marlene Gonzalez",
  order: [{name:"lasagna", price:8}],
  qty:1,
  status: ["progress"]
}]

function Orders() {
  return (
    <>
        <h2>Orders</h2>
        <div>
          {ordersDb.map(order => {
            return(
              <span>{order.date}{order.custumerName}{order.qty}</span>
            )
          })}
        </div>
    </>

  )
}

export default Orders;