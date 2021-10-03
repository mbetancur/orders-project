module.exports = (() => {
    let orders = [];

    return {
        enqueue: (element) => {
            console.log("enqueue");
            orders.push(element)
        },
        enqueueFromArray: (array) => {
            console.log("enqueue from array");
            array.forEach(element => {
                orders.push(element);
            });
        },
        dequeue: (element) => {
            console.log("dequeue");
            return orders.shift(element);
        },
        printQueue: () => {
            orders.forEach((item) => {
                console.log(item);
            });
        },
        isEmpty: () => {
            return orders.length === 0;
        }
    };
});