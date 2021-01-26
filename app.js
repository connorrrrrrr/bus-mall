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
new ProductImage('images/cthulhu.jpg')
new ProductImage('images/dog-duck.jpg')
