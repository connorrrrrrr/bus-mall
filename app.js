'use strict';

//Declaring global variables...
var products = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg']

var imageContainer = document.getElementById('image-container')
var leftImageElement = document.getElementById('left-product')
var centerImageElement = document.getElementById('center-product')
var rightImageElement = document.getElementById('right-product')
var roundsOfVoting = 25;

var ctx = document.getElementById('myChart').getContext('2d');

var votesByProduct = [];
var timesProductsAreShown = [];
//Creating a function that takes images, the name of the image, the times shown, and times clicked. Then it pushes this data into allImages and imageMap.
function ProductImage(name) {
  this.name = name.substring(0, name.length - 4);
  this.timesShown = 0;
  this.timesClicked = 0;
  this.image = `images/${name}`;

  ProductImage.allImages.push(this);

  ProductImage.imageMap[this.name] = this;
}

ProductImage.allImages = [];
ProductImage.imageMap = {};

for (var i = 0; i < products.length; i++) {
  new ProductImage(products[i]);
}
//Generator that puts 3 random images out of the ones listed onto the screen.
function generateRandomImages() {
  var leftIndex = Math.floor(Math.random() * ProductImage.allImages.length);
  var rightIndex = Math.floor(Math.random() * ProductImage.allImages.length);
  var centerIndex = Math.floor(Math.random() * ProductImage.allImages.length);
//This makes sure we don't get duplicates.
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

  while (
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



function handleImageClick(event) {

  roundsOfVoting--;

  for (var i = 0; i < ProductImage.allImages.length; i++) {
    if (event.target.name === ProductImage.allImages[i].name) {
      ProductImage.allImages[i].timesClicked++;
    }
  }
  renderImages();
  if (!roundsOfVoting) {
    imageContainer.removeEventListener('click', handleImageClick);
    renderResults();
    
  }
}

renderImages();
imageContainer.addEventListener('click', handleImageClick);

function renderResults() {
  var imageInfo = document.getElementById('image-info')
  for (var i = 0; i < ProductImage.allImages.length; i++) {
    var rowElement = document.createElement('tr');
    var nameElement = document.createElement('td');
    nameElement.textContent = ProductImage.allImages[i].name + ProductImage.allImages[i].timesClicked + ProductImage.allImages[i].timesShown;
    rowElement.appendChild(nameElement);
    imageInfo.appendChild(rowElement);
  }
}


for (var i = 0; i < ProductImage.allImages.length; i++) {
  votesByProduct.push(ProductImage.allImages[i].timesClicked);
  timesProductsAreShown.push(ProductImage.allImages[i].timesShown);
}

products.saveToLocalStorage();

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: products,
    datasets: [{
      label: 'times clicked',
      //data: [15, 50, 3, 5, 2, 3],
      data: timesProductsAreShown,
      backgroundColor: ['rgba(255, 99, 132, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)'
    ],
      borderWidth: 1
    },
    {
      label: 'times shown',
      data: [30, 100, 3, 5, 2, 3],
      backgroundColor: ['rgba(255, 99, 132, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)'],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
