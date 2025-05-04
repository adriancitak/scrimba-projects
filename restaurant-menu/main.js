import { menuArray } from "/data.js"


const itemsEl = document.querySelector('.items');
const checkoutEl = document.querySelector('.checkout');
const paymentEl = document.querySelector('#modal-root');
const overlayEl = document.querySelector('#overlay')
const orderMessageEl = document.querySelector('#order-confirmation')

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
        const itemHTML = order.map((food,index) => {
            return `

            <div class="food-checkout">
                <div class = "left-order">
                    <p class = "food-checkout-name">${food.name}</p>
                    <button class = "remove" data-index="${index}">remove</button> 
                </div>
                <div class = "right-order">
                    <p class="order-price">$${food.price}</p>
                </div>
            </div>
            
            
            
            `
        }).join('')

        const totalPrice = order.reduce((acc, num) => acc + num.price, 0);
    
        const checkoutHTML = `
        
        <div class="order-sec">
            <div class="your-order">
                <h3 id="your-order">Your Order</h3>
            </div>
            ${itemHTML}
            <div class = "total-price">
                <p>Total price:</p>
                <p>$${totalPrice}</p>       
            </div>
            <button class="complete-order">Complete Order</button>
        </div> `
        

        checkoutEl.innerHTML = checkoutHTML;
       
    }
}

function paymentPage(){

    const paymentHMTL = `
        <div class="payment-card">
            <p>Enter card details</p>
            <input type="text" name="holder-name" id = "holder-name" placeholder = "Enter your name" required>
            <input type="text" inputmode="numeric" name="card-number" id = "card-number" placeholder = "Enter card number" required>
            <input type="text" inputmode="numeric" name="card-cvv" id = "card-cvv" placeholder = "Enter CVV" required>
            <button id="pay">Pay</button>
        </div>
        `

        paymentEl.innerHTML = paymentHMTL;


}


checkoutEl.addEventListener('click', (e) => {
    const removeBtn = e.target.closest(".remove")
    const orderBtn = e.target.closest('.complete-order')
  

    if (removeBtn){
        const itemIndex = parseInt(removeBtn.dataset.index)
        order.splice(itemIndex, 1);
        renderCheckout(order)
    }
    if (orderBtn){
        paymentPage()
        overlayEl.classList.toggle('hidden')
        paymentEl.classList.toggle('hidden')
    }

})


function orderConfirmation(name){

    if (!name.trim()){
        name = 'Customer'
    }

    name = name.split(' ')[0].toUpperCase()[0] + name.split(' ')[0].slice(1)

   

    orderMessageEl.innerHTML = `
        <p>Thanks, ${name}! Your order is on its way!
    `

}

paymentEl.addEventListener('click', (e) => {
    const payBtn = e.target.closest('#pay')
    let name = ''

    if (payBtn){
        let name = document.getElementById("holder-name").value

        overlayEl.classList.toggle('hidden')
        checkoutEl.classList.toggle('hidden')
        paymentEl.classList.toggle('hidden')
        orderConfirmation(name)
        orderMessageEl.classList.toggle('hidden')
        
    }
})