let menu = {};
menu_file = './alt_data/menu.json';

fetch(menu_file)
.then(res => res.json())
.then(data_files => {
    data_files.forEach(data => {
      menu[data['name']] = data;
    })
  
})
.catch(err => {throw err})


function display(categories){
  clear();

  let menu_row = document.createElement('div');

  menu_row.classList.add('menu_row');

  categories.forEach(category => {
    menu_items = 0
    data = menu[category];
    data['columns'].forEach(column => {
      display_column(menu_row, data['items'].slice(menu_items, menu_items += column), data['name']);
    })
  })
  
}



function display_column(menu_row, items, name){
  const menu = document.querySelector('.menu_box');

  const menu_card = document.createElement('div');
  menu_card.classList.add('menu_card');

  const card_category = document.createElement('h1');
  card_category.textContent = name;
  menu_card.appendChild(card_category);

  for (let i = 0; i < items.length; i++) {
    const food_item = document.createElement('div');
    food_item.classList.add('food_item');

    const food_top = document.createElement('div');
    food_top.classList.add('food_top');
    const food_name = document.createElement('h3');
    food_name.textContent = items[i].name;

    const price = document.createElement('div');
    // covers beverage for having two sizes
    if (items[i].price == ""){
        price.textContent = items[i].small + " | " + items[i].large;
    }
    else {price.textContent = items[i].price;}

    const food_description = document.createElement('p');
    food_description.textContent = items[i].description;

    food_top.appendChild(food_name);
    food_top.appendChild(price);

    food_item.appendChild(food_top);
    food_item.appendChild(food_description);

    menu_card.appendChild(food_item);
    menu_row.appendChild(menu_card);

  }

  menu.appendChild(menu_row);
}

function clear(){
  const menu_box = document.querySelector(".menu_box");

  while (menu_box.firstChild){
    menu_box.removeChild(menu_box.lastChild);
  }
}

// Need timer so display has time to process before being loaded
setTimeout(() => {
  display(["Appetizers"]);
}, 300);
