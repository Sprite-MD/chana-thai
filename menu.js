let menu = {};
const menu_file = './alt_data/menu.json';
const menu_categories = [
  ['Appetizers'],
  ['Salad', 'Soup'],
  ['Noodles', 'Fried Rice', 'Curry'],
  ['A La Carte'],
  ['Chefs Specials'],
  ['Lunch Specials', 'Combo Specials'],
  ['Beverages', 'Dessert'],
  ['Side Order']
];

fetch(menu_file)
  .then(res => res.json())
  .then(data_files => {
    data_files.forEach(data => {
      menu[data['name']] = data;
    });
    display(0);
  })
  .catch(err => { throw err; });

let current_category = 0;

function display(index) {
  clear();

  // Update active button
  document.querySelectorAll('.categories').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });

  const menu_box = document.querySelector('.menu_box');
  const menu_lists = document.querySelector('.menu_list');
  const menu_row = document.createElement('div');
  menu_row.classList.add('menu_row');

  menu_categories[index].forEach(category => {
    let menu_items = 0;
    const data = menu[category];

    // Create one card per category with a single heading
    const menu_card = document.createElement('div');
    menu_card.classList.add('menu_card');

    const card_category = document.createElement('h1');
    card_category.textContent = data['name'];
    menu_card.appendChild(card_category);

    // Adds lunch special hours
    if (data['name'] === 'Lunch Specials') {
      const time = document.createElement('h3');
      time.textContent = data['time'];
      menu_card.appendChild(time);
    }

    // Wrap columns side-by-side
    const col_wrapper = document.createElement('div');
    col_wrapper.classList.add('menu_columns');
    data['columns'].forEach(column => {
      col_wrapper.appendChild(display_column(data['items'].slice(menu_items, menu_items += column), data));
    });
    menu_card.appendChild(col_wrapper);

    menu_row.appendChild(menu_card);

    // Meat choices and add-ons at top of menu
    const menu_description = document.querySelector('.additionals');
    const meat_choice = document.createElement('p');
    meat_choice.textContent = data['description'];
    const additionals = document.createElement('p');
    additionals.textContent = data['additional'];

    menu_description.appendChild(meat_choice);
    menu_description.appendChild(additionals);

    menu_box.insertBefore(menu_description, menu_lists);
  });

  menu_lists.appendChild(menu_row);
  current_category = index;
}

function display_column(items, data) {
  const col = document.createElement('div');
  col.classList.add('menu_col');

  for (let i = 0; i < items.length; i++) {
    const food_item = document.createElement('div');
    food_item.classList.add('food_item');

    const food_top = document.createElement('div');
    food_top.classList.add('food_top');
    const food_name = document.createElement('h3');
    // If the item has a number, show it
    if (items[i].number) {
      food_name.textContent = items[i].number + '. ' + items[i].name;
    } else {
      food_name.textContent = items[i].name;
    }

    const soup_prices = document.createElement('div');
    const prices = document.createElement('div');
    prices.classList.add('food_prices');
    const food_price = document.createElement('p');

    // Soup meat prices
    if (data['name'] === 'Soup') {
      items[i].additional.forEach(item => {
        food_price.innerHTML += item + '</br>';
        soup_prices.appendChild(food_price);
        prices.appendChild(soup_prices);
      });
    }
    // Beverage prices
    else if (items[i].price === '') {
      food_price.textContent = '$' + items[i].small + ' | $' + items[i].large;
      prices.appendChild(food_price);
    } else {
      food_price.textContent = '$' + items[i].price.toFixed(2);
      prices.appendChild(food_price);
    }

    food_top.appendChild(food_name);
    food_top.appendChild(prices);

    food_item.appendChild(food_top);

    if (items[i].description) {
      const food_description = document.createElement('p');
      food_description.textContent = items[i].description;
      food_item.appendChild(food_description);
    } else {
      food_item.classList.add('no-desc');
    }

    col.appendChild(food_item);
  }

  return col;
}

function clear() {
  const menu_list = document.querySelector('.menu_list');
  const menu_description = document.querySelector('.additionals');

  while (menu_list.firstChild) {
    menu_list.removeChild(menu_list.lastChild);
  }

  while (menu_description.firstChild) {
    menu_description.removeChild(menu_description.lastChild);
  }
}

function change_menu(direction) {
  current_category = (current_category + direction + menu_categories.length) % menu_categories.length;
  display(current_category);
}

// Event listeners for category buttons
document.querySelectorAll('.categories').forEach((btn, i) => {
  btn.addEventListener('click', () => display(i));
});

// Event listeners for prev/next arrows
document.getElementById('menuPrev').addEventListener('click', () => change_menu(-1));
document.getElementById('menuNext').addEventListener('click', () => change_menu(1));
