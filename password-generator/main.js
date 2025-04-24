const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const btn = document.querySelector('button');
const leftPassword = document.querySelector('#left-password');
const rightPassword = document.querySelector('#right-password');

const slider = document.getElementById('length');
const output = document.getElementById('length-value');

const leftCopy = document.querySelector('.left-copy');
const rightCopy = document.querySelector('.right-copy');

slider.addEventListener('input', () => {
    output.textContent = slider.value
})


function generatePassword(){
    const password = [];
    for (let i = 0; i < slider.value; i++){
        let num = Math.floor(Math.random() * characters.length);
        password.push(characters[num]);
    }

    return password.join('');
}


btn.addEventListener('click', () => {
    leftPassword.textContent = generatePassword();
    rightPassword.textContent = generatePassword();

})


leftCopy.addEventListener('click', () => {
    const text = leftPassword.textContent;
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied: ', text);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
});

rightCopy.addEventListener('click', () => {
    const text = rightPassword.textContent;
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied: ', text);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
});


