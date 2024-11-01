document.addEventListener("DOMContentLoaded", function() {
    const membershipRadios = document.querySelectorAll('input[name="membership"]');
    const membership2Radios = document.querySelectorAll('input[name="membership2"]');
    
    const membershipDiv = document.querySelector('.membership');
    const membership2Div = document.querySelector('.membership2');

    // Function to handle validation for a given group of radios
    function validateMembership(radios, div) {
        radios.forEach(radio => {
            radio.addEventListener('change', () => {
                if (radio.checked) {
                    div.classList.add('valid');
                    div.classList.remove('invalid');
                }
            });
        });
    }

    // Validate each membership group
    validateMembership(membershipRadios, membershipDiv);
    validateMembership(membership2Radios, membership2Div);

    // Handle required validation on form submission
    const form = document.querySelector('.wf1');
    form.addEventListener('submit', (e) => {
        let isValid = true;

        // Check if at least one radio from each group is checked
        if (![...membershipRadios].some(radio => radio.checked)) {
            isValid = false;
            membershipDiv.classList.add('invalid');
            membershipDiv.classList.remove('valid');
        }

        if (![...membership2Radios].some(radio => radio.checked)) {
            isValid = false;
            membership2Div.classList.add('invalid');
            membership2Div.classList.remove('valid');
        }

        // Prevent form submission if either group is invalid
        if (!isValid) {
            e.preventDefault();
        }
    });
});
