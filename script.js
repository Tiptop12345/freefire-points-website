// Load the stored points from localStorage (if any)
let points = parseFloat(localStorage.getItem('playerPoints')) || 0;

// Display the current points on the page
document.getElementById('points-display').innerText = points.toFixed(2);

// Function to handle a win in any game
function playerWins() {
    // Add 0.30 points for each game win
    points += 0.30;

    // Save the updated points to localStorage
    localStorage.setItem('playerPoints', points);

    // Update the points display on the page
    document.getElementById('points-display').innerText = points.toFixed(2);

    // Show a message
    alert('You won! Points awarded: 0.30');
}

// Toggle the menu for mobile view
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}

// Scroll to section smoothly
function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
        });
    }
}
