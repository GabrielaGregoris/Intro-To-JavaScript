// script.js //

function showGreeting() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("greeting").textContent = "Greetings, " + name;
}

function moveBox() {
    let box = document.getElementById("movingBox");
    box.style.transition = "transform 2s";
    box.style.transform = "translateX(200px)";
}

setInterval(() => {
    let text = document.getElementById("colorText");
    text.style.color = text.style.color === "blue" ? "green" : "blue";
}, 30000);
