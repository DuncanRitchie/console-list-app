const orders = require("./orders");
const yargs = require("yargs");

switch (process.argv[2]) {
    case "add":
        if (process.argv[3]!==undefined) {
            console.log(`Adding "${yargs.argv.order}"!`);
    orders.addOrders(yargs.argv.order,yargs.argv.size,yargs.argv.extras);
        }
        else {
            console.log(`You have to specify something to add! Try again!`);
        }
        break;
    case "remove":
        if (process.argv[3]!==undefined) {
            console.log(`Removing "${yargs.argv.order}"!`);
            orders.removeOrder(yargs.argv.order);}
        else {
            console.log(`You have to specify something to remove! Try again!`);
        }
        break;
    case "list":
        console.log("Listing all orders!");
        orders.listOrders();
        break;
    default:
    console.log("Command not recognised!")
}