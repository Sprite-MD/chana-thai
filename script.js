// Initialize here and run showSlide() to give your lightbox a default state.

let slideIndex = 1;
showSlide(slideIndex);

// You are providing the functionality for your clickable content, which is 
// your previews, dots, controls and the close button.

function openLightbox() {
  document.getElementById('Lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';
};

// Note that you are assigning new values here to our slidIndex.

function changeSlide(n) {
  showSlide(slideIndex += n);
};

function toSlide(n) {
  showSlide(slideIndex = n);
};

// This is your logic for the light box. It will decide which slide to show 
// and which dot is active.

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');
  let modalPreviews = document.getElementsByClassName('modal-preview');

  if (n > slides.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  
  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active';
};


// function for saving JSON file to local 
// Ex. download(json_app, 'appetizers.json', 'text/plain')
function download(content, fileName, contentType) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
 } 

// making menu objects then converting it to external json file
class Menu {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

const appetizers = [];
const salads = [];
const soups = [];
const fried_rice = [];
const curries = [];
const ala_carte = [];
const specials = [];
const drinks_desserts = [];

// appetizers.push( new Menu('Fried Wonton','Deep fried wonton stuffed with ground chicken served with sweet & sour sauce.', 8.50));
// appetizers.push( new Menu('Egg Rolls','Deep fried roll stuffed mixed vegetable, served with sweet & sour sauce.', 8.50));
// appetizers.push( new Menu('Fried Tofu','Deep fried tofu served with sweet and sour sauce, topped with ground peanut.', 8.50));
// appetizers.push( new Menu('Cheese Wonton','Deep fried pastry filled with a blend of cheese, served with sweet & sour sauce.', 10.50));
// appetizers.push( new Menu('Butterfly Shrimp','Deep fried wonton stuffed with ground chicken served with sweet & sour sauce', 8.50));
// appetizers.push( new Menu('Fried Wonton','Deep fried shrimp served with sweet & sour sauce.', 11.50));
// appetizers.push( new Menu('Vegetable Tempura','Deep fried mixed vegetables, served with sweet & sour sauce.', 10.50));
// appetizers.push( new Menu('Sexy Shrimp','Fried shrimp on a stick with seasoning served with sweet & sour sauce.', 11.50));
// appetizers.push( new Menu('Shrimp Roll','Shrimp rolls wrapped in wonton skin, deep-fried and served with green salad and sweet and sour sauce.', 11.50));
// appetizers.push( new Menu('Steamed or Fried Dumplings','Chicken dumpling, sered with green salad, sweet & sour dip or sweet black dip.', 9.50));
// appetizers.push( new Menu('Satay Chicken','Sliced chicken on skewers, marinated in a mixture of Thai spices and coconut milk grilled, served with cucumber salad and peanut sauce.', 10.50));
// appetizers.push( new Menu('Shrimp Cake','Deep fried mixed shrimp paste served with ground shrimp and water chestnut, with sweet & sour sauce.', 11.50));
// appetizers.push( new Menu('Golden Wings','Deep-fried stuffed chicken wing with ground chicken and water chestnut, served wih sweet and sour sauce, topped with ground peanut and cucumber.', 11.50));
// appetizers.push( new Menu('Combination Appetizer','Two butterfly shrimps, two egg rolls, five fried wontons. Served with sweet & sour sauce.', 11.50));

// const json_app = JSON.stringify(appetizers);

const menu = document.querySelector('#menu');
const appetizer_menu = document.createElement('div');
appetizer_menu.setAttribute('class', 'appetizers menu');
menu.appendChild(appetizer_menu); 



