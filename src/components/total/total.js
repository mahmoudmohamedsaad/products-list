import React from 'react';

const Total = (props) => {
    const {items} = props;
    let total = 0
    for (let i = 0; i < items.length; i++) {
        total = total + parseFloat(items[i].price * items[i].quantity)
    }
    //anther solution
    //const total = items.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
        <div>
            <p className="text">Total Price: {total}</p>
        </div>
    )
}

export default Total