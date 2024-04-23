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
},
{
  id: 3,
  date: "13-03-2024",
  idCustomer: 1222,
  custumerName: "Marlene Gonzalez",
  order: [{name:"brownie", price:8}],
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
              <div className="container">
                <ol className="container">
                  <li>{order.id}</li>
                  <li>{order.date}</li>
                  <li>{order.custumerName}</li>
                  <li>{order.order[0].name}</li>
                  <li>{order.qty}</li>
                </ol>
              </div>
            )
          })}
        </div>
    </>

  )
}

export default Orders;