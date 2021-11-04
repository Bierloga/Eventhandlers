const giveAlert = function () {
    alert("Button pushed")
};

const clickButton = document.getElementById('mybutton');
clickButton.addEventListener('click', giveAlert);

const toggleColor = function () {
    button2.parentElement.classList.toggle('red-background');
}

const button2 = document.getElementById('button2');
button2.addEventListener('click', toggleColor)