const fs = require("fs");

const loadOrders = () => {
    try {
        const allOrders = JSON.parse(fs.readFileSync("orders.json").toString());
        return allOrders
    }
    catch (e){
        return [];
    }
}

const saveOrders = (orders) => {
    fs.writeFileSync("orders.json",JSON.stringify(orders))
}

const addOrders = (order,size,extras) => {
    allOrders = loadOrders();
    allOrders.push({Order: order, Size: size, Extras: extras});
    saveOrders(allOrders)
}

const listOrders = () => {
    allOrders = loadOrders();
    allOrders.map((order)=>{console.log(`Order for a ${order.Order}, size ${order.Size}, extras ${order.Extras}`)})
}

const removeOrder = (deletedOrder) => {
    allOrders = loadOrders();
    let ordersToKeep = allOrders.filter((order)=>{
        return order.Order!==deletedOrder
    })
    saveOrders(ordersToKeep)
}

module.exports = {
    addOrders,
    loadOrders,
    saveOrders,
    listOrders,
    removeOrder
}