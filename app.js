'use strict';

function ProductImage(image)  {
  this.timesClicked = 0;
  this.timesShown = 0;
  this.image = image;
  this.product = product;

  ProductImage.allImages.push(this);
}

ProductImage.allImages = [];

new ProductImage('images/bag.jpg');
new ProductImage('images/banana.jpg');
new ProductImage('images/bathroom.jpg');
new ProductImage('images/boots.jpg');
new ProductImage('images/breakfast.jpg');
new ProductImage('images/bubblegum.jpg');
new ProductImage('images/chair.jpg');
new ProductImage('images/cthulhu.jpg');
new ProductImage('images/dog-duck.jpg');
new ProductImage('images/dragon.jpg');
new ProductImage('images/pen.jpg');
new ProductImage('images/pet-sweep');
new ProductImage('images/scissors.jpg');
new ProductImage('images/shark.jpg');
new ProductImage('images/sweep.jpg');
new ProductImage('images/tauntaun.jpg');
new ProductImage('images/unicorn.jpg');
new ProductImage('images/usb.gif');
new ProductImage('images/water-can.jpg')
new ProductImage('images/wine-glass.jpg')


var productContainer = document.getElementById('product-images');
var leftProduct = document.getElementById('left-product');
var centerProduct = document.getElementById('center-product');
var rightProduct = document.getElementById('right-product');


function generateRandomProducts() {
  var leftIndex = Math.floor(Math.random() * ProductImage.allImages.length);
  var
}
