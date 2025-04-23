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

document.querySelector('#home-1').addEventListener('click', () => {
    home = addOne(home);
    homeScore.textContent = home;
})

document.querySelector('#home-2').addEventListener('click', () => {
    home = addTwo(home);
    homeScore.textContent = home;
})

document.querySelector('#home-3').addEventListener('click', () => {
    home = addThree(home);
    homeScore.textContent = home;
})


document.querySelector('#guest-1').addEventListener('click', () => {
    guest = addOne(guest);
    guestScore.textContent = guest;
})

document.querySelector('#guest-2').addEventListener('click', () => {
    guest = addTwo(guest);
    guestScore.textContent = guest;
})

document.querySelector('#guest-3').addEventListener('click', () => {
    guest = addThree(guest);
    guestScore.textContent = guest;
})


