let homeScore = document.querySelector('#home-score');
let guestScore = document.querySelector('#guest-score');

let home = 0;
let guest = 0;


function addOne (num) {
    return num + 1;
}

function addTwo (num) {
    return num + 2;
}

function addThree (num) {
    return num + 3;
}

function checkWinner(){
    const homeBox = document.querySelector('.home-box');
    const guestBox = document.querySelector('.guest-box');

    homeBox.classList.remove('flash-winner');
    guestBox.classList.remove('flash-winner');

    if (home > guest){
        homeBox.classList.add('flash-winner');
    } else if (guest > home){
        guestBox.classList.add('flash-winner')
    }
}


document.querySelector('#home-1').addEventListener('click', () => {
    home = addOne(home);
    homeScore.textContent = home;
    checkWinner()
})

document.querySelector('#home-2').addEventListener('click', () => {
    home = addTwo(home);
    homeScore.textContent = home;
    checkWinner()

})

document.querySelector('#home-3').addEventListener('click', () => {
    home = addThree(home);
    homeScore.textContent = home;
    checkWinner()

})


document.querySelector('#guest-1').addEventListener('click', () => {
    guest = addOne(guest);
    guestScore.textContent = guest;
    checkWinner()

})

document.querySelector('#guest-2').addEventListener('click', () => {
    guest = addTwo(guest);
    guestScore.textContent = guest;
    checkWinner()

})

document.querySelector('#guest-3').addEventListener('click', () => {
    guest = addThree(guest);
    guestScore.textContent = guest;
    checkWinner()

})

document.querySelector('.new-game').addEventListener('click', () => {
    guest = 0;
    home = 0;
    guestScore.textContent = guest;
    homeScore.textContent = home;
    checkWinner()
})




