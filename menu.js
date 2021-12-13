let menu = {};
menu_file = './alt_data/menu.json';
const menu_categories = [["Appetizers"], ["Salad", "Soup"],["Noodles", "Fried Rice", "Curry"], ["A La Carte"], ["Chefs Specials"], ["Lunch Specials", "Combo Specials"], ["Beverages", "Dessert"], ["Side Order"]];

fetch(menu_file)
.then(res => res.json())
.then(data_files => {
    data_files.forEach(data => {
      menu[data['name']] = data;
    })
    display(0);
})
.catch(err => {throw err})

let current_category = 0
function display(index){
  clear();

  let menu_row = document.createElement('div');

  const menu_box = document.querySelector('.menu_box');
  const menu_lists = document.querySelector('.menu_list');

  menu_row.classList.add('menu_row');

  menu_categories[index].forEach(category => {
    menu_items = 0
    data = menu[category];
    
    data['columns'].forEach(column => {
      display_column(menu_row, data['items'].slice(menu_items, menu_items += column), data);
    })

    // Meat choices and add-ons at top of menu
    
    const menu_description = document.querySelector('.additionals');
    const meat_choice = document.createElement('p');
    meat_choice.textContent = data['description'];
    const additionals = document.createElement('p');
    additionals.textContent = data['additional'];

    menu_description.appendChild(meat_choice);
    menu_description.appendChild(additionals)

    menu_box.insertBefore(menu_description, menu_lists)
  
    
  })
  
  current_category = index;
}



function display_column(menu_row, items, data){
  const menu_lists = document.querySelector('.menu_list');

  const menu_card = document.createElement('div');
  menu_card.classList.add('menu_card');

  const card_category = document.createElement('h1');
  card_category.textContent = data['name'];
  menu_card.appendChild(card_category);

  // loops through food items to put them into the cards
  for (let i = 0; i < items.length; i++) {
    const food_item = document.createElement('div');
    food_item.classList.add('food_item');

    const food_top = document.createElement('div');
    food_top.classList.add('food_top');
    const food_name = document.createElement('h3');
    food_name.textContent = items[i].name;

   
    const soup_prices = document.createElement('div');
    const price = document.createElement('div');
    // Soup meat prices
    if (data['name'] == 'Soup'){
      items[i].additional.forEach( item => {
        price.innerHTML += item + "</br>";
        soup_prices.appendChild(price);
      })
    }
    // Beverage prices
    else if (items[i].price == ""){
        price.textContent = items[i].small + " | " + items[i].large;
    }
    else {price.textContent = items[i].price;}

    const food_description = document.createElement('p');
    food_description.textContent = items[i].description;

    food_top.appendChild(food_name);
    food_top.appendChild(price);
    food_top.appendChild(soup_prices)

    food_item.appendChild(food_top);
    food_item.appendChild(food_description);

    menu_card.appendChild(food_item);
    menu_row.appendChild(menu_card);

  }

  menu_lists.appendChild(menu_row);
}

function clear(){
  const menu_box = document.querySelector(".menu_list");
  const menu_description = document.querySelector(".additionals")

  while (menu_box.firstChild){
    menu_box.removeChild(menu_box.lastChild);
  }

  while (menu_description.firstChild){
    menu_description.removeChild(menu_description.lastChild);
  }  
}


function change_menu(direction){
  current_category += direction;
  current_category = (current_category + menu_categories.length) % menu_categories.length;
  display(current_category);
}