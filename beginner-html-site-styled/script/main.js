let myH1 = document.querySelector('h1');
myH1.textContent = 'HELLO!';

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/QQ图片20210316121455.jpg') {
        myImage.setAttribute('src', 'images/QQ图片20210316121501.jpg');
    } else {
        myImage.setAttribute('src', 'images/QQ图片20210316121455.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    myHeading.textContent = 'Mozilla 酷毙了，' + localStorage.getItem('name');
}

myButton.onclick = function() {
    setUserName();
}