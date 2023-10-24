//Cashing the DOM
let images = document.querySelectorAll('.image');
let currentImage = 0;
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

//Functions
function showImage() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }

  images[currentImage].style.display = 'block';
}

prevBtn.addEventListener('click', function() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage();
});

nextBtn.addEventListener('click', function() {
  currentImage = (currentImage + 1) % images.length;
  showImage();
});
let cart = [...document.querySelectorAll('.but')];
cart.forEach(function(button) {
  button.addEventListener('click', function() {
    alert("added");
  });
});
showImage();
 