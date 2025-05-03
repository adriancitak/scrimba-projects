import { menuArray } from "/data.js"


const itemsEl = document.querySelector('.items');

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
                    <button class="atc-btn"><p>+</p></button>
                </div>
            </div>
        `
    })

    itemsEl.innerHTML = itemsHTML.join('');
}

render()