const images = document.querySelectorAll('.images img'); 
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;


function showImage(index) {
    
    images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none'; 
    });
}


prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1; 
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
});


showImage(currentIndex);
