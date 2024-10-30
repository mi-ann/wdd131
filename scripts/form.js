const yearElement = document.getElementById('year');
const lastModifiedElement = document.getElementById('last-modified');

yearElement.textContent = new Date().getFullYear();
lastModifiedElement.textContent = document.lastModified;

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  // Function to dynamically populate product options
const productSelect = document.getElementById("product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

const form = document.querySelector('.wf1');
const errorMessage = document.querySelector('.error-message');
function validateForm(event) {
    const starRating = document.querySelector('input[name="stars"]:checked');
    // Check if a star rating is selected
    if (!starRating) {
        event.preventDefault(); // Prevent form submission
        errorMessage.style.display = 'block'; // Show error message
        console.log("Error: No star rating selected."); // Debugging log
    } else {
        errorMessage.style.display = 'none'; // Hide error message if valid
    }
}

        // Call validateForm on the submit button click
document.getElementById('submit-button').addEventListener('click', validateForm);

document.querySelectorAll('.stars input[type="radio"]').forEach((input) => {
  input.addEventListener('change', function() {
      const starsContainer = this.closest('.stars');
      const errorMessage = starsContainer.nextElementSibling; // Select the error message
      starsContainer.classList.add('active'); // Add active class

      // Hide the error message if a star is selected
      errorMessage.style.display = 'none'; 
  });
});

