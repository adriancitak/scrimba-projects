import { menuArray } from "/data.js"


const itemsEl = document.querySelector('.items');
const checkoutEl = document.querySelector('.checkout')

// check if anything is added to cart isAdded = bool
// if added render the checkout 
//make checkout clickable
//once clicked make a payment card with pay btn
//after payment show success


function render (){

    const itemsHTML = menuArray.map(food => {
        return `
            <div class="food-card">
                <div class="card-left">
                    <span class="food-emoji">${food.emoji}</span>
                    <div class="food-info">
                        <p class='food-title'>${food.name}</p>
                        <p class='ingredients'>${food.ingredients.join(' ')}</p>
                        <p class="price">$${food.price}</p>
                    </div>
                </div>
                <div class="card-right">
                    <button class="atc-btn" data-id="${food.id}"><p>+</p></button>
                </div>
            </div>
        `
    })

    

    itemsEl.innerHTML = itemsHTML.join('');
}

render()

const order = [];

itemsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.atc-btn')
    if (btn) {
        const itemId = parseInt(btn.dataset.id);
        const item = menuArray.find(food => food.id === itemId);
        order.push(item)
        renderCheckout(order)
    }
})


function renderCheckout(order){

    if (!order.length){
        checkoutEl.innerHTML = ''
    } else {
        const itemHTML = order.map(food => {
            return `

            <div class="food-checkout">
                <div class = "left-order">
                    <p class = "food-checkout-name">${food.name}</p>
                    <button class = "remove">remove</button> 
                </div>
                <div class = "right-order">
                    <p class="order-price">$${food.price}</p>
                </div>
            </div>
            
            
            
            `
        }).join('')

        const totalPrice = order.reduce((acc, num) => acc + num.price, 0);
        console.log(totalPrice)
    
        const checkoutHTML = `
        
        <div class="order-sec">
            <div class="your-order">
                <h3 id="your-order">Your Order</h3>
            </div>
            ${itemHTML}
            <div class = "price">
                <p>Total price:</p>
                <p>$${totalPrice}</p>       
            </div>
            <button class="complete-order">Complete Order</button>
        </div> `
        

        checkoutEl.innerHTML = checkoutHTML;
    }


    

}
