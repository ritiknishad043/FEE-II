function placeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order Placed");
        }, 2000);
    });
}

function processPayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Payment Successful");
        }, 2000);
    });
}

function inventoryUpdate() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("updated inventory");
        }, 2000);
    });
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Email Sent");
        }, 2000);
    });
}

placeOrder()
    .then(result => {
        console.log(result);
        return processPayment();
    })
    .then(result => {
        console.log(result);
        return inventoryUpdate();
    })
    .then(result => {
        console.log(result);
        return sendEmail();
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });