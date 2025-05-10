const btn = document.querySelector('button');
const selectElement = document.querySelector('select');
const seedColor = document.querySelector('input')


const colorOne = document.querySelector('#color-one')
const colorOneName = document.querySelector('#color-one-name')

const colorTwo = document.querySelector('#color-two')
const colorTwoName = document.querySelector('#color-two-name')

const colorThree = document.querySelector('#color-three')
const colorThreeName = document.querySelector('#color-three-name')

const colorFour = document.querySelector('#color-four')
const colorFourName = document.querySelector('#color-four-name')

const colorFive = document.querySelector('#color-five')
const colorFiveName = document.querySelector('#color-five-name')




btn.addEventListener('click', () => {
    
    
    const hex = seedColor.value.split('#')[1]
    const style = selectElement.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${style}`)
    .then(response => response.json())
    .then(data => {
      
        colorOneName.textContent = data.colors[0].hex.value
        colorOne.style.backgroundColor = data.colors[0].hex.value

        colorTwoName.textContent = data.colors[1].hex.value
        colorTwo.style.backgroundColor = data.colors[1].hex.value

        colorThreeName.textContent = data.colors[2].hex.value
        colorThree.style.backgroundColor = data.colors[2].hex.value

        colorFourName.textContent = data.colors[3].hex.value
        colorFour.style.backgroundColor = data.colors[3].hex.value

        colorFiveName.textContent = data.colors[4].hex.value
        colorFive.style.backgroundColor = data.colors[4].hex.value
      


    })
    .catch(error => console.error(error))
})