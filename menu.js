// function for downloading file to keep it external
// Such as creating a json file  
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
  

// Attempt at importing menu data from external file
  
import { appetizers } from "./menu_data.js";

const app_btn = document.querySelector('.appetizers');

function insert(){
      
    // creates menu card with title
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
    food_name.textContent = appetizers[0].name;

    const price = document.createElement('div');
    price.textContent = appetizers[0].price;

    const food_description = document.createElement('p');
    food_description.textContent = appetizers[0].description;

    food_top.appendChild(food_name);
    food_top.appendChild(price);
    food_item.appendChild(food_top);
    food_item.appendChild(food_description);
    menu_card.appendChild(food_item);
    menu.appendChild(menu_card); 
}

app_btn.addEventListener('click', insert);



// Used to read json files
function readTextFile(file, callback) {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

// all menu functions must be done inside function
readTextFile("./menu/alacarte.json", (text) => {
    let data = JSON.parse(text);
    console.log(data.items[0].number);
});