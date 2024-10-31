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
    

    const artImages = [
        'images/love.webp',
        'images/art-example.webp',
        'images/unity.webp' ,
        'images/art3.jpg',
        // Add more art image paths
    ];
    
    const pianoVideos = [
        'images/love-art.mp4',
        'images/piano1.jpg',
        'images/piano2.jpg',
        'images/piano3.jpg',
        // Add more piano image paths
    ];
    
    const danceImages = [
        'images/art-example.webp',
        'images/dance1.jpg',
        'images/dance2.jpg',
        'images/dance3.jpg',
        // Add more dance image paths
    ];
    
    
    
    const imagesContainer = document.querySelector('.figure-container');
    const pianoContainer = document.getElementById('video-container'); // Remove the dot

    function displayImages(images) {
        imagesContainer.innerHTML = ''; // Clear existing images
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = 'Image';
            imagesContainer.appendChild(imgElement);
        });
    }

    function displayVideos(videos) {
        pianoContainer.innerHTML = ''; // Clear existing videos
        videos.forEach(videoSrc => {
            const videoElement = document.createElement('video');
            videoElement.src = videoSrc;
            videoElement.controls = true; // Add controls for video playback
            videoElement.allowFullscreen = true;
            pianoContainer.appendChild(videoElement);
        });
    }

    document.querySelector('#art-nav').addEventListener('click', () => {
        displayImages(artImages);
    });
    
    document.querySelector('#piano-nav').addEventListener('click', () => {
        displayVideos(pianoVideos); // Call displayVideos instead
    });
    
    document.querySelector('#dance-nav').addEventListener('click', () => {
        displayImages(danceImages); // Display dance images
    });
    
    // Optional: Display art images by default on page load
    displayImages(artImages);
    
     
});
