// 1. Show an alert message when the page loads
window.onload = function() {
    alert("Hello! Welcome to my page.");
};

// 2. Display a greeting when the user inputs their name and clicks submit
function displayGreeting() {
    let name = document.getElementById("nameInput").value;  // Get the user's input
    
    if (name.trim() !== "") {  // Check if the name isn't empty
        document.getElementById("outputGreeting").innerText = `Greetings, ${name}!`;  // Display the greeting
    } else {
        alert("Please enter your name!");  // Alert if the input is empty
    }
}


// 3. Show hidden text when the "Learn More" button is clicked
document.getElementById("learnMoreBtn").onclick = function() {
    let text = document.getElementById("hiddenText");
    if (text.style.display === "none" || text.classList.contains("hidden")) {
        text.style.display = "block";
        text.classList.remove("hidden");
    } else {
        text.style.display = "none";
    }
};

// 4. Change the profile picture on hover
let profilePic = document.getElementById("profile-Pic");

profilePic.onmouseover = function() {
    profilePic.src = "img/profile2.png";  
};

profilePic.onmouseout = function() {
    profilePic.src = "img/profile1.jpg";  
};


// Function to generate a random hex color
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the text color
function changeTextColor() {
    let textElement = document.getElementById("greeting");  // Target the greeting paragraph
    textElement.style.color = getRandomColor();  // Apply a random color
}

// Change color every 30 seconds (30000 milliseconds)
setInterval(changeTextColor, 30000);

// Initial call to apply a random color immediately
changeTextColor();
