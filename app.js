'use strict';


var products = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg']

var imageContainer = document.getElementById('image-container')
var leftImageElement = document.getElementById('left-product')
var centerImageElement = document.getElementById('center-product')
var rightImageElement = document.getElementById('right-product')
var roundsOfVoting = 25;

function ProductImage(name) {
  this.name = name.substring(0, name.length - 4);
  this.timesShown = 0;
  this.timesClicked = 0;
  this.image = 'images/${name}';

  ProductImage.allImages.push(this);

  ProductImage.imageMap[this.name] = this;
}

ProductImage.allImages = [];
ProductImage.imageMap = {};

for (var i = 0; i < products.length; i++) {
  new ProductImage(products[i]);
}

function generateRandomImages() {
  var leftIndex = Math.floor(Math.random() * ProductImage.allImages.length);
  var rightIndex = Math.floor(Math.random() * ProductImage.allImages.length);
  var centerIndex = Math.floor(Math.random() * ProductImage.allImages.length);

  while (leftIndex === rightIndex || leftIndex === centerIndex) {
    if (leftIndex === rightIndex) {
      rightIndex = Math.floor(Math.random() * ProductImage.allImages.length);
    }
    if (leftIndex === centerIndex) {
      centerIndex = Math.floor(Math.random() * ProductImage.allImages.length);
    }
  }
  var leftProductImage = ProductImage.allImages[leftIndex];
  var centerProductImage = ProductImage.allImages[centerIndex];
  var rightProductImage = ProductImage.allImages[rightIndex];

  return [leftProductImage, centerProductImage, rightProductImage]
}

function renderImages() {
  var currentlyRenderedImages = [leftImageElement.src, centerImageElement.src, rightImageElement.src];

  var newImages = generateRandomImages();

  while(
    currentlyRenderedImages[0] === newImages[0].name ||
    currentlyRenderedImages[1] === newImages[0].name ||
    currentlyRenderedImages[2] === newImages[0].name ||
    currentlyRenderedImages[0] === newImages[1].name ||
    currentlyRenderedImages[1] === newImages[1].name ||
    currentlyRenderedImages[2] === newImages[1].name ||
    currentlyRenderedImages[0] === newImages[2].name ||
    currentlyRenderedImages[1] === newImages[2].name ||
    currentlyRenderedImages[2] === newImages[2].name ||
    currentlyRenderedImages[0] === newImages[0].name ||
    currentlyRenderedImages[1] === newImages[0].name ||
    currentlyRenderedImages[2] === newImages[0].name ||
    currentlyRenderedImages[0] === newImages[1].name ||
    currentlyRenderedImages[1] === newImages[1].name ||
    currentlyRenderedImages[2] === newImages[1].name ||
    currentlyRenderedImages[0] === newImages[2].name ||
    currentlyRenderedImages[1] === newImages[2].name ||
    currentlyRenderedImages[2] === newImages[2].name ||
    currentlyRenderedImages[0] === newImages[0].name ||
    currentlyRenderedImages[1] === newImages[0].name 
  ) {
    newImages = generateRandomImages();
  }
  leftImageElement.src = newImages[0].image;
  leftImageElement.name = newImages[0].name;
newImages[0].timesShown++;

  centerImageElement.src = newImages[1].image;
  centerImageElement.name = newImages[1].name;
newImages[1].timesShown++;

  rightImageElement.src = newImages[2].image;
  rightImageElement.name = newImages[2].name;
newImages[2].timesShown++;
}
//   for (var i = 0; i < newImages.length; i++)  {
//     for ()
//     if (newImages[i].name === currentlyRenderedImages
//   }
// }

function handleImageClick(event) {

  roundsOfVoting--;

  for (var i = 0; i< ProductImage.allImages.length; i++)  {
    if (event.target.name === ProductImage.allImages[i].name) {
      ProductImage.allImages[i].timesClicked++;
    }
  }
renderImages();
if (!roundsOfVoting)  {
  imageContainer.removeEventListener('click', handleImageClick);
  renderResults();
}
}

renderImages();
imageContainer.addEventListener('click', handleImageClick);

function renderResults()  {
  var imageInfo = document.getElementById('image-info')
  for (var i = 0; i < ProductImage.allImages.length; i++){
    var rowElement = document.createElement('tr');
    var nameElement = document.createElement('td');
    nameElement.textContent = ProductImage.allImages[i].name + ProductImage.allImages[i].timesClicked + ProductImage.allImages[i].timesShown;
    rowElement.appendChild(nameElement);
    imageInfo.appendChild(rowElement);
  }
}













// function ProductImage(image)  {
//   this.timesClicked = 0;
//   this.timesShown = 0;
//   this.image = image;
//   this.product = product;

//   ProductImage.allImages.push(this);
// }

// ProductImage.allImages = [];

// new ProductImage('images/bag.jpg');
// new ProductImage('images/banana.jpg');
// new ProductImage('images/bathroom.jpg');
// new ProductImage('images/boots.jpg');
// new ProductImage('images/breakfast.jpg');
// new ProductImage('images/bubblegum.jpg');
// new ProductImage('images/chair.jpg');
// new ProductImage('images/cthulhu.jpg');
// new ProductImage('images/dog-duck.jpg');
// new ProductImage('images/dragon.jpg');
// new ProductImage('images/pen.jpg');
// new ProductImage('images/pet-sweep');
// new ProductImage('images/scissors.jpg');
// new ProductImage('images/shark.jpg');
// new ProductImage('images/sweep.jpg');
// new ProductImage('images/tauntaun.jpg');
// new ProductImage('images/unicorn.jpg');
// new ProductImage('images/usb.gif');
// new ProductImage('images/water-can.jpg')
// new ProductImage('images/wine-glass.jpg')


// var productContainer = document.getElementById('product-images');
// var leftProduct = document.getElementById('left-product');
// var centerProduct = document.getElementById('center-product');
// var rightProduct = document.getElementById('right-product');


// function generateRandomProducts() {
//   var leftIndex = Math.floor(Math.random() * ProductImage.allImages.length);
//   var
// }