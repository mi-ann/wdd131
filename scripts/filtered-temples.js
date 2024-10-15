document.addEventListener('DOMContentLoaded', () => {
    // Set the current year and last modified date
    const yearElement = document.getElementById('year');
    const lastModifiedElement = document.getElementById('last-modified');

    yearElement.textContent = new Date().getFullYear();
    lastModifiedElement.textContent = document.lastModified;

    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
        hamburger.innerHTML = hamburger.innerHTML === '✖' ? '&#9776;' : '✖'; // Toggle hamburger icon
    });

    

    // Array of temple objects
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        // Additional temple objects
        {
            templeName: "Seoul Korea",
            location: "Seoul, Korea",
            dedicated: "1983, May, 9",
            area: 28057,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/400x250/seoul-korea-temple-lds-424784-wallpaper.jpg"
        },
        {
            templeName: "Manaus Brazil",
            location: "Manaus, Brazil",
            dedicated: "2008, June, 20",
            area: 48525,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manaus-brazil/400x250/manaus-brazil-temple-lds-1006711-wallpaper.jpg"
        },
        {
            templeName: "Santo Domingo Dominican Republic",
            location: "Santo Domingo, Dominican Republic",
            dedicated: "1996, August, 18",
            area: 67000,
            imageUrl: 
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santo-domingo-dominican-republic/400x250/santo-domingo-dominican-republic-temple-lds-1078094-wallpaper.jpg"
        }
    ];

    // Function to display temples
    function displayTemples(templesArray) {
        const figureContainer = document.querySelector('.figure-container'); // Select the figure container
        figureContainer.innerHTML = ''; // Clear existing cards
    
        templesArray.forEach(temple => {
            const card = document.createElement('div');
            card.className = 'temple-card'; // Apply a class for styling
            card.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" width="400" height="250" loading="lazy">
            `;
            figureContainer.appendChild(card); // Append the card to the figure container
        });
    }

    // Function to change the heading and display relevant temples
    function updateHeadingAndDisplayTemples(title, templesArray) {
        const heading = document.querySelector('#temple-cards h2'); // Ensure you are selecting the correct h2
        heading.textContent = title;
        displayTemples(templesArray);
    }

    document.getElementById('home').addEventListener('click', () => {
        updateHeadingAndDisplayTemples('Home', temples); // Show all temples
    });

    document.getElementById('old').addEventListener('click', () => {
        const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        updateHeadingAndDisplayTemples('Old Temples', oldTemples);
    });

    document.getElementById('new').addEventListener('click', () => {
        const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        updateHeadingAndDisplayTemples('New Temples', newTemples);
    });

    document.getElementById('large').addEventListener('click', () => {
        const largeTemples = temples.filter(temple => temple.area > 90000);
        updateHeadingAndDisplayTemples('Large Temples', largeTemples);
    });

    document.getElementById('small').addEventListener('click', () => {
        const smallTemples = temples.filter(temple => temple.area < 10000);
        updateHeadingAndDisplayTemples('Small Temples', smallTemples);
    });
    
    // Initial display of all temples
    updateHeadingAndDisplayTemples('Home', temples);
    // Initial display of all temples
});
