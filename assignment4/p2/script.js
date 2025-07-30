const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg",];
/* Declaring the alternative text for each image file */
const altText = [
    "A greyish blue eye", 
    "A rock with a wave-like pattern",
    "Purple and white flowers",
    "Ancient Egyptian art on a wall",
    "Moth on a leaf in daylight"
];

/* Looping through images */
for (let i = 0; i < images.length; i++) {

    // Make a new image and apply set src and alt
    const newImage = document.createElement("img");
    newImage.setAttribute("src", "./images/" + images[i]);
    newImage.setAttribute("alt", altText[i]);

    // Add the image to the thumbBar
    thumbBar.appendChild(newImage);

    // Add EventListener
    newImage.addEventListener("click", function(){
        displayedImage.src = newImage.src;
        displayedImage.alt = newImage.alt
    });

}


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function(){
    if (btn.getAttribute("class") == "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0,0,0,0.5)";
    }
    else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0,0,0,0.0)";
    }
});