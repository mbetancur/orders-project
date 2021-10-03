const purchaseOrders = require('./mockData/purchaseOrders');
const salesOrders = require('./mockData/salesOrders');
const salesOrdersQueue = require('./queue')();
const purchaseOrdersQueue = require('./queue')();

console.info('Starting');

//ARRANGE the data
salesOrdersQueue.enqueueFromArray(salesOrders);
purchaseOrdersQueue.enqueueFromArray(purchaseOrders);

// salesOrdersQueue.printQueue();
// purchaseOrdersQueue.printQueue();

const NO_STOCK_MESSAGE = 'No Stock available at the moment';

// TODO: check for stock and purchases availability
const allocate = (salesOrdersQueue, purchaseOrdersQueue) => {
    let result = [];
    let currentStock = 0;
    let deliveryDate = '';

    while (!salesOrdersQueue.isEmpty() && !purchaseOrdersQueue.isEmpty()) {
        let { id: saleId, quantity: saleQuantity } = salesOrdersQueue.dequeue();

        while (currentStock < saleQuantity) {
            if (purchaseOrdersQueue.isEmpty()) {
                deliveryDate = NO_STOCK_MESSAGE;
                break;
            }
            let { receiving, quantity: nextPurchaseQuantity } = purchaseOrdersQueue.dequeue();
            deliveryDate = receiving;
            currentStock += nextPurchaseQuantity;
        };

        result.push({ id: saleId, deliveryDate: deliveryDate });
        currentStock -= saleQuantity;
    };
    return result;
};

const allocation = allocate(salesOrdersQueue, purchaseOrdersQueue);
console.log('Allocation:', allocation);