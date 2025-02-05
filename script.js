// Initialize points
let points = 0;

// Function to update the points displayed on the dashboard
function updatePoints() {
    document.getElementById("user-points").innerText = points;
}

// Function to simulate earning points (e.g., after completing a game)
document.getElementById("earn-points-btn").addEventListener("click", function() {
    // Simulate earning points (e.g., add 10 points when button is clicked)
    points += 10;  // You can replace this with actual game completion logic
    updatePoints();
});

// Initially update points on page load
updatePoints();
