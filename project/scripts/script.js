document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');
    const lastModifiedElement = document.getElementById('last-modified');

    yearElement.textContent = new Date().getFullYear();
    lastModifiedElement.textContent = document.lastModified;

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
        hamburger.innerHTML = hamburger.innerHTML === '✖' ? '&#9776;' : '✖';
    });

    const artImages = [
        'images/love.webp',
        'images/unity.webp',
        'images/art-example.webp',
        
    ];

    const pianoVideos = [
        'images/love-art.mp4',
        'https://www.youtube.com/embed/LJ4WNr1qvH8',
    ];

    const danceVideos = [
        'https://www.youtube.com/embed/_TW5Xo3cqOY?si=p28KyilF09AV-5_b',
        
    ];
    const beginnerArtImages = [
        'images/beginner-art-example.webp',
        'images/beginner-piano-example.webp',
        // Add more beginner art image paths
    ];
    
    const beginnerDanceVideos = [
        'https://www.youtube.com/embed/jjPlqrGv-lA?si=_8y4RHPV1_zS_2-m',
        'https://www.youtube.com/embed/LmrNle3MfaI?si=BYrBcc9WPHYfSQxh',
        
        // Add more beginner dance video paths
    ];
    
    const beginnerPianoVideos = [
        'https://www.youtube.com/embed/-70Zb0KZu9s?si=Cnnkt99QZP6bAyYw',
        'https://www.youtube.com/embed/Ou09zz-Cedo?si=s0i5-RhKQIW9eY9M',
    ];

    function displayArtImages(images, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = ''; // Clear existing images
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = 'Art Image';
            container.appendChild(imgElement);
        });
    }

    function displayVideos(items, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = ''; // Clear existing items

        items.forEach(src => {
            if (src.endsWith('.mp4')) {
                const videoElement = document.createElement('video');
                videoElement.src = src; 
                videoElement.controls = true; 
                videoElement.style.width = '100%'; 
                container.appendChild(videoElement);
            } else if (src.includes('youtube.com')) {
                const iframeElement = document.createElement('iframe');
                iframeElement.src = src; 
                iframeElement.style.width = '100%'; 
                iframeElement.style.height = '400px'; 
                iframeElement.frameBorder = '0';
                iframeElement.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
                iframeElement.referrerPolicy = 'strict-origin-when-cross-origin';
                iframeElement.allowFullscreen = true;

                container.appendChild(iframeElement);
            }
        });
    }

    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.add('hidden')); // Hide all sections initially

    function showGallery(galleryId) {
        sections.forEach(section => section.classList.add('hidden')); // Hide all sections
        const selectedGallery = document.getElementById(galleryId);
        if (selectedGallery) {
            selectedGallery.classList.remove('hidden');
            console.log(`Showing gallery: ${galleryId}`); // Log the displayed gallery
            
            // Load content
            
        }
    }

    // Event listeners for navigation
    document.getElementById('art-nav').addEventListener('click', () => {
        displayArtImages(artImages, 'art-container'); // Load images first
        showGallery('art-gallery', () => {}); // Then show the gallery
    });

    document.getElementById('dance-nav').addEventListener('click', () => {
        displayVideos(danceVideos, 'dance-container'); // Load videos first
        showGallery('dance-gallery', () => {}); // Then show the gallery
    });

    document.getElementById('piano-nav').addEventListener('click', () => {
        displayVideos(pianoVideos, 'piano-container'); // Load videos first
        showGallery('piano-gallery', () => {}); // Then show the gallery
    });
    document.getElementById('home').addEventListener('click', () => {
       
        showGallery('home-content', () => {}); // Then show the gallery
    });
    
    document.getElementById('beginner-nav').addEventListener('click', () => {
        // Clear previous content
        document.getElementById('beginner-art-container').innerHTML = '';
        document.getElementById('beginner-dance-container').innerHTML = '';
        document.getElementById('beginner-piano-container').innerHTML = '';

        // Load beginner content
        displayArtImages(beginnerArtImages, 'beginner-art-container');
        displayVideos(beginnerDanceVideos, 'beginner-dance-container');
        displayVideos(beginnerPianoVideos, 'beginner-piano-container');
        
        showGallery('beginner-gallery'); // Show the beginner gallery
    });
   
    showGallery('home-content')
});
