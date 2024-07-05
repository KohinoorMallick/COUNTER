// Function to animate the counter
function animateCounter(targetCount, duration) {
    const countElement = document.getElementById('count');
    const countIncrement = targetCount / duration;
    let currentCount = 0;

    const interval = setInterval(() => {
        currentCount += countIncrement;
        countElement.textContent = Math.round(currentCount);

        if (currentCount >= targetCount) {
            clearInterval(interval);
            countElement.textContent = targetCount;
        }
    }, 10); // Adjust the interval for smoother animation
}

// Call the animateCounter function when the page loads
window.addEventListener('load', () => {
    animateCounter(10000, 2000); // Example: Count up to 10000 in 2 seconds (2000 milliseconds)
});
