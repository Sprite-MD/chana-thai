// // Used to read json files
// function readTextFile(file, callback) {
//     let rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }


// // all menu functions must be done inside function
// // Appetizers 
// readTextFile("./menu/appetizers.json", (text) => {
//     let appetizers = JSON.parse(text);

//     const app_btn = document.querySelector('.appetizers');

//     const menu_row = document.createElement('div');
//     menu_row.classList.add('menu_row');

//     function insert_appetizers(){
//         const menu = document.querySelector('#menu');
//         // creates menu card with title
        
//         const menu_card = document.createElement('div');
//         menu_card.classList.add('menu_card');
    
//         const card_category = document.createElement('h1');
//         card_category.textContent = 'Appetizers';
//         menu_card.appendChild(card_category);
    

//         for (let i=0; i < appetizers.items.length; i++){
//             const food_item = document.createElement('div');
//             food_item.classList.add('food_item');
        
//             const food_top = document.createElement('div');
//             food_top.classList.add('food_item_top');
//             const food_name = document.createElement('h3');
//             food_name.textContent = appetizers.items[i].name;
        
//             const price = document.createElement('div');
//             price.textContent = appetizers.items[i].price;
        
//             const food_description = document.createElement('p');
//             food_description.textContent = appetizers.items[i].description;
        
//             food_top.appendChild(food_name);
//             food_top.appendChild(price);
//             food_item.appendChild(food_top);
//             food_item.appendChild(food_description);
//             menu_card.appendChild(food_item);
//         }


//         menu_row.appendChild(menu_card);
//         menu.appendChild(menu_row); 
//     }
    
//     app_btn.addEventListener('click', insert_appetizers);
// });

