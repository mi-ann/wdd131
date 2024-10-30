document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the current count from localStorage
    let reviewCount = localStorage.getItem("reviewCount");

    // If there's no count stored, initialize it to 0
    if (!reviewCount) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount, 10); // Convert to number
    }

    // Increment the review count
    reviewCount++;

    // Store the updated count back to localStorage
    localStorage.setItem("reviewCount", reviewCount);

    // Display the updated count on the page
    document.getElementById("count").textContent = reviewCount;
});