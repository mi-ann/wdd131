document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the current count from localStorage
    let memberCount = localStorage.getItem("memberCount");

    // If there's no count stored, initialize it to 0
    if (!memberCount) {
        memberCount = 0;
    } else {
        memberCount = parseInt(memberCount, 10); // Convert to number
    }

    // Increment the review count
    memberCount++;

    // Store the updated count back to localStorage
    localStorage.setItem("memberCount", memberCount);

    // Display the updated count on the page
    document.getElementById("count").textContent = memberCount;

    // Set the current year in the footer
    document.getElementById("year").textContent = new Date().getFullYear();
});
