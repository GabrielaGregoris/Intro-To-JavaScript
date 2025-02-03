// script.js
// Personalized Greeting
function greet() {
    let name = document.getElementById("nameInput").value;
    let greeting = "Greetings, " + name;
    document.getElementById("greeting").textContent = greeting;
}

// Element Movement
let movingElement = document.getElementById("movingElement");
let position = 0;
let direction = 1;

movingElement.onmouseover = function() {
    setInterval(moveElement, 30);
};

function moveElement() {
    position += direction;
    movingElement.style.left = position + "px";

    if (position > window.innerWidth - movingElement.offsetWidth || position < 0) {
        direction *= -1;
    }
}

// Text Color Change Timer
let changingText = document.getElementById("changingText");
let colors = ["red", "green", "blue", "orange", "purple"];
let currentColorIndex = 0;

setInterval(changeTextColor, 30000);

function changeTextColor() {
    changingText.style.color = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Bonus Interaction
document.getElementById("greeting").onclick = function() {
    alert("You clicked the greeting!");
};

// List of functions used:
// 1. greet():  Handles the personalized greeting.
// 2. moveElement(): Animates the moving element.
// 3. changeTextColor(): Changes the color of the text.
// 4. setInterval():  Repeatedly calls other functions for animation and timed events.