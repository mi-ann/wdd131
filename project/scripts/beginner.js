const beginnerArtImages = [
    'images/beginner-art1.jpg',
    'images/beginner-art2.jpg',
    // Add more beginner art image paths
];

const beginnerDanceVideos = [
    'videos/beginner-dance1.mp4',
    'videos/beginner-dance2.mp4',
    // Add more beginner dance video paths
];

const beginnerPianoVideos = [
    'videos/beginner-piano1.mp4',
    'videos/beginner-piano2.mp4',
    // Add more beginner piano video paths
];

function displayArtImages(images, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear existing images
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = 'Beginner Art Image';
        container.appendChild(imgElement);
    });
}

function displayVideos(videos, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear existing videos
    videos.forEach(video => {
        const videoElement = document.createElement('video');
        videoElement.src = video;
        videoElement.controls = true;
        container.appendChild(videoElement);
    });
}

// Load images when buttons are clicked
document.getElementById('load-art').addEventListener('click', () => {
    displayArtImages(beginnerArtImages, 'art-container');
});

document.getElementById('load-dance').addEventListener('click', () => {
    displayVideos(beginnerDanceVideos, 'dance-container');
});

document.getElementById('load-piano').addEventListener('click', () => {
    displayVideos(beginnerPianoVideos, 'piano-container');
});
