const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg'
]

/* Declaring the alternative text for each image file */
const imageDescriptions = [
    'Eye',
    'Pattern',
    'Flower',
    'Egyptian',
    'Butterfly'
]
/* Looping through images */
for (let i=0; i < imageFilenames.length; i++) {
    const image = imageFilenames[i];
    const description = imageDescriptions[i];

    /* insert an <img> element inside the thumb-bar <div> that embeds that image in the page along with its alternative text. */
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + image);
    newImage.setAttribute('alt', description);
    thumbBar.appendChild(newImage);
    
    /* Add click event listener to each image */
    newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src', 'images/' + image);
        displayedImage.setAttribute('alt', description);
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    const currentClass = btn.getAttribute('class');
    if (currentClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
