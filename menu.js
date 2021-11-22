// function for saving JSON file to local 
// Ex. download(json_app, 'appetizers.json', 'text/plain')
function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
   } 
  
  // making menu objects 
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
  
  // const menu = document.querySelector('#menu');
  // const appetizer_menu = document.createElement('div');
  // appetizer_menu.setAttribute('class', 'appetizers menu');
  // menu.appendChild(appetizer_menu); 
  
  
  
  // Attempt at importing menu data from external file
  
  import { food } from "./menu_data";
  
  const app_btn = document.querySelector('.appetizers');
  function insert(){
      
      const menu = document.querySelector('#menu');
      const menu_card = document.createElement('div');
      menu_card.classList.add('menu_card');
  
      const card_category = document.createElement('h1');
      card_category.textContent = 'Appetizers';
      menu_card.appendChild(card_category);
  
      const food_item = document.createElement('div');
      food_item.classList.add('food_item');
  
      const food_top = document.createElement('div');
      food_top.classList.add('food_item_top');
      const food_name = document.createElement('h3');
      food_name.textContent = 'food[0].name';
  
      const price = document.createElement('div');
      price.textContent = 'food[0].price';
  
      const food_description = document.createElement('p');
      food_description.textContent = 'food[0].description';
  
      food_top.appendChild(food_name);
      food_top.appendChild(price);
      food_item.appendChild(food_top);
      food_item.appendChild(food_description);
      menu_card.appendChild(food_item);
      menu.appendChild(menu_card); 
  }
  app_btn.addEventListener('click', insert);