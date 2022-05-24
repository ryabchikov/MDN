const myImage = document.querySelector("img");
const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/brain1.png') {
        myImage.setAttribute('src', 'images/brain2.png');
    } else {
        myImage.setAttribute('src', 'images/brain1.png');
    }
}

const setUserName = () => {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Going to learn something new today, ' + myName + '?';
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Going to learn something new today, ' + storedName + '?';
}

myButton.onclick = () => {
    setUserName();
}