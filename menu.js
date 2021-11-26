function loadFile(filePath, done) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () { return done(this.responseText) }
    xhr.open("GET", filePath, true);
    xhr.send();
}

const soup_salad_data = [];
const app_data = [];
const entree_data = [];
const alacarte_data = [];
const chef_data = [];
const lunch_combo_data = [];
const drink_dessert_data = [];
const sides_data = [];

const menu_files = []

let menu_index = 1;
show_menu(menu_index);
to_menu(1);
function to_menu(n){
    show_menu(menu_index = n);
}

function show_menu(n){
    const menu_btns = document.getElementsByClassName('categories');
    let menu_count = 0;

    switch(n){
        case 1:
            menu_files.length = 0
            menu_files.push("./menu_data/appetizers.json");

            menu_files.forEach((file, i) => {
                
                loadFile(file, (responseText) => {

                    app_data[i] = JSON.parse(responseText);
                    menu_count += 1;
            
                    if (menu_count == menu_files.length){
                        display_appetizers();
                    } 
                })
            });
            
        case 2:
            menu_files.length = 0
            menu_files.push("./menu_data/salad.json", "./menu_data/soup.json");
            menu_files.forEach((file, i) => {

                loadFile(file, (responseText) => {

                    soup_salad_data[i] = JSON.parse(responseText);
                    menu_count += 1;
            
                    if (menu_count == menu_files.length){
                        display_ss();
                    } 
                    
                })
            });

        case 3:
            menu_files.length = 0
            menu_files.push( "./menu_data/noodles.json","./menu_data/rice.json", "./menu_data/curry.json");

            menu_files.forEach((file, i) => {

                loadFile(file, (responseText) => {

                    entree_data[i] = JSON.parse(responseText);
                    menu_count += 1;
            
                    if (menu_count == menu_files.length){
                        display_entree();
                    } 
                    
                })
            });

        case 4:
            menu_files.length = 0
            menu_files.push( "./menu_data/alacarte.json");

            menu_files.forEach((file, i) => {

                loadFile(file, (responseText) => {

                    alacarte_data[i] = JSON.parse(responseText);
                    menu_count += 1;
            
                    if (menu_count == menu_files.length){
                        display_alacarte();
                    } 
                    
                })
            });

        case 5:
            menu_files.length = 0
            menu_files.push( "./menu_data/chefspecials.json");

            menu_files.forEach((file, i) => {

                loadFile(file, (responseText) => {

                    chef_data[i] = JSON.parse(responseText);
                    menu_count += 1;
            
                    if (menu_count == menu_files.length){
                        display_chef();
                    } 
                    
                })
            });


        case 6:
            menu_files.length = 0
            menu_files.push("./menu_data/lunch.json", "./menu_data/combo.json");

            menu_files.forEach((file, i) => {

                loadFile(file, (responseText) => {

                    lunch_combo_data[i] = JSON.parse(responseText);
                    menu_count += 1;
            
                    if (menu_count == menu_files.length){
                        display_specials();
                    } 
                    
                })
            });
        case 7:
            menu_files.length = 0
            menu_files.push("./menu_data/beverages.json", "./menu_data/dessert.json");

            menu_files.forEach((file, i) => {

                loadFile(file, (responseText) => {

                    drink_dessert_data[i] = JSON.parse(responseText);
                    menu_count += 1;
            
                    if (menu_count == menu_files.length){
                        display_dd();
                    } 
                    
                })
            });

        case 8:
            menu_files.length = 0
            menu_files.push("./menu_data/side.json");

            menu_files.forEach((file, i) => {

                loadFile(file, (responseText) => {

                    sides_data[i] = JSON.parse(responseText);
                    menu_count += 1;
            
                    if (menu_count == menu_files.length){
                        display_sides();
                    } 
                    
                })
            });
        
    }
}





function display_appetizers(){

    const app_btn = document.querySelector('.appetizers');
    const menu = document.querySelector('#menu');

    const menu_row = document.createElement('div');
    menu_row.classList.add('menu_row');

    function insert_appetizers(){
        // creates menu card with title
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu_card');
    
        const card_category = document.createElement('h1');
        card_category.textContent = app_data[0].name;
        menu_card.appendChild(card_category);
    

        for (let i=0; i < app_data[0].items.length / 2; i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = app_data[0].items[i].name;
        
            const price = document.createElement('div');
            price.textContent = app_data[0].items[i].price;
        
            const food_description = document.createElement('p');
            food_description.textContent = app_data[0].items[i].description;
        
            food_top.appendChild(food_name);
            food_top.appendChild(price);
            food_item.appendChild(food_top);
            food_item.appendChild(food_description);
            menu_card.appendChild(food_item);
        }

        menu_row.appendChild(menu_card);
        menu.appendChild(menu_row); 
    }

    function insert_app2(){
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu_card');

    
        const card_category = document.createElement('h1');
        card_category.textContent = app_data[0].name;
        menu_card.appendChild(card_category);
    
        
        // change i for different midpoint
        for (let i=7; i < app_data[0].items.length; i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = app_data[0].items[i].name;
        
            const price = document.createElement('div');
            price.textContent = app_data[0].items[i].price;
        
            const food_description = document.createElement('p');
            food_description.textContent = app_data[0].items[i].description;
        
            food_top.appendChild(food_name);
            food_top.appendChild(price);

            food_item.appendChild(food_top);
            food_item.appendChild(food_description);
            
            menu_card.appendChild(food_item);
        }

        menu_row.appendChild(menu_card);
        menu.appendChild(menu_row); 

    }
    
    app_btn.addEventListener('click', insert_appetizers);
    app_btn.addEventListener('click', insert_app2);
}


function display_ss(){
    const soup_salad_btn = document.querySelector('.soup_salad');
    const menu = document.querySelector('#menu');

    const menu_row = document.createElement('div');
    menu_row.classList.add('menu_row');

    function insert_soup(){
        // creates menu card with title
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu_card');
    
        const card_category = document.createElement('h1');
        card_category.textContent = soup_salad_data[0].name;
        menu_card.appendChild(card_category);
    

        for (let i=0; i < soup_salad_data[0].items.length; i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = soup_salad_data[0].items[i].name;
        
            const price = document.createElement('div');
            price.textContent = soup_salad_data[0].items[i].price;
        
            const food_description = document.createElement('p');
            food_description.textContent = soup_salad_data[0].items[i].description;
        
            food_top.appendChild(food_name);
            food_top.appendChild(price);

            food_item.appendChild(food_top);
            food_item.appendChild(food_description);

            menu_card.appendChild(food_item);
        }

        menu_row.appendChild(menu_card);
        menu.appendChild(menu_row); 
    }

    // For salad
    function insert_salad(){
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu_card');

    
        const card_category = document.createElement('h1');
        card_category.textContent = soup_salad_data[1].name;
        menu_card.appendChild(card_category);
    

        for (let i=0; i < soup_salad_data[1].items.length; i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = soup_salad_data[1].items[i].name;
        
            const price = document.createElement('div');
            price.textContent = soup_salad_data[1].items[i].price;
        
            const food_description = document.createElement('p');
            food_description.textContent = soup_salad_data[1].items[i].description;
        
            food_top.appendChild(food_name);
            food_top.appendChild(price);

            food_item.appendChild(food_top);
            food_item.appendChild(food_description);
            
            menu_card.appendChild(food_item);
        }

        menu_row.appendChild(menu_card);
        menu.appendChild(menu_row); 

    }
    
    soup_salad_btn.addEventListener('click', insert_soup);
    soup_salad_btn.addEventListener('click', insert_salad);
}

function display_entree(){
    
    const entree_btn = document.querySelector('.entrees');
    const menu = document.querySelector('#menu');

    const menu_row = document.createElement('div');
    menu_row.classList.add('menu_row');

    function insert_noodles(){
        // creates menu card with title
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu_card');
    
        const card_category = document.createElement('h1');
        card_category.textContent = entree_data[0].name;
        menu_card.appendChild(card_category);
    

        for (let i=0; i < entree_data[0].items.length; i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = entree_data[0].items[i].name;
        
            const price = document.createElement('div');
            price.textContent = entree_data[0].items[i].price;
        
            const food_description = document.createElement('p');
            food_description.textContent = entree_data[0].items[i].description;
        
            food_top.appendChild(food_name);
            food_top.appendChild(price);

            food_item.appendChild(food_top);
            food_item.appendChild(food_description);

            menu_card.appendChild(food_item);
        }

        menu_row.appendChild(menu_card);
        menu.appendChild(menu_row); 
    }

    function insert_rice(){
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu_card');

    
        const card_category = document.createElement('h1');
        card_category.textContent = entree_data[1].name;
        menu_card.appendChild(card_category);
    

        for (let i=0; i < entree_data[1].items.length; i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = entree_data[1].items[i].name;
        
            const price = document.createElement('div');
            price.textContent = entree_data[1].items[i].price;
        
            const food_description = document.createElement('p');
            food_description.textContent = entree_data[1].items[i].description;
        
            food_top.appendChild(food_name);
            food_top.appendChild(price);

            food_item.appendChild(food_top);
            food_item.appendChild(food_description);
            
            menu_card.appendChild(food_item);
        }

        menu_row.appendChild(menu_card);
        menu.appendChild(menu_row); 

    }

    function insert_curry(){
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu_card');

    
        const card_category = document.createElement('h1');
        card_category.textContent = entree_data[2].name;
        menu_card.appendChild(card_category);
    

        for (let i=0; i < entree_data[2].items.length; i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = entree_data[2].items[i].name;
        
            const price = document.createElement('div');
            price.textContent = entree_data[2].items[i].price;
        
            const food_description = document.createElement('p');
            food_description.textContent = entree_data[2].items[i].description;
        
            food_top.appendChild(food_name);
            food_top.appendChild(price);
            food_item.appendChild(food_top);
            food_item.appendChild(food_description);
            menu_card.appendChild(food_item);
        }

        menu_row.appendChild(menu_card);
        menu.appendChild(menu_row); 

    }
    
    entree_btn.addEventListener('click', insert_noodles);
    entree_btn.addEventListener('click', insert_rice);
    entree_btn.addEventListener('click', insert_curry);
}


function display_alacarte(){

    const app_btn = document.querySelector('.alacarte');
    const menu = document.querySelector('#menu');

    const menu_row = document.createElement('div');
    menu_row.classList.add('menu_row');

    function insert_alacarte(){
        // creates menu card with title
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu_card');
    
        const card_category = document.createElement('h1');
        card_category.textContent = alacarte_data[0].name;
        menu_card.appendChild(card_category);
    

        for (let i=0; i < alacarte_data[0].items.length / 2; i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = alacarte_data[0].items[i].name;
        
            const price = document.createElement('div');
            price.textContent = alacarte_data[0].items[i].price;
        
            const food_description = document.createElement('p');
            food_description.textContent = alacarte_data[0].items[i].description;
        
            food_top.appendChild(food_name);
            food_top.appendChild(price);
            food_item.appendChild(food_top);
            food_item.appendChild(food_description);
            menu_card.appendChild(food_item);
        }

        menu_row.appendChild(menu_card);
        menu.appendChild(menu_row); 
    }

    function insert_alacarte2(){
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu_card');

    
        const card_category = document.createElement('h1');
        card_category.textContent = alacarte_data[0].name;
        menu_card.appendChild(card_category);
    
        // change i for different midpoint
        for (let i=5; i < alacarte_data[0].items.length; i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = alacarte_data[0].items[i].name;
        
            const price = document.createElement('div');
            price.textContent = alacarte_data[0].items[i].price;
        
            const food_description = document.createElement('p');
            food_description.textContent = alacarte_data[0].items[i].description;
        
            food_top.appendChild(food_name);
            food_top.appendChild(price);
            food_item.appendChild(food_top);
            food_item.appendChild(food_description);
            menu_card.appendChild(food_item);
        }

        menu_row.appendChild(menu_card);
        menu.appendChild(menu_row); 

    }
    
    app_btn.addEventListener('click', insert_alacarte);
    app_btn.addEventListener('click', insert_alacarte2);
}

function display_chef(){

    const chef_btn = document.querySelector('.chef_special');
    const menu = document.querySelector('#menu');

    const menu_row = document.createElement('div');
    menu_row.classList.add('menu_row');

    function insert_chef(){
        // creates menu card with title
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu_card');
    
        const card_category = document.createElement('h1');
        card_category.textContent = chef_data[0].name;
        menu_card.appendChild(card_category);
    

        for (let i=0; i < chef_data[0].items.length / 3 - 1; i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = chef_data[0].items[i].name;
        
            const price = document.createElement('div');
            price.textContent = chef_data[0].items[i].price;
        
            const food_description = document.createElement('p');
            food_description.textContent = chef_data[0].items[i].description;
        
            food_top.appendChild(food_name);
            food_top.appendChild(price);

            food_item.appendChild(food_top);
            food_item.appendChild(food_description);

            menu_card.appendChild(food_item);
        }

        menu_row.appendChild(menu_card);
        menu.appendChild(menu_row); 
    }

    function insert_chef2(){
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu_card');

    
        const card_category = document.createElement('h1');
        card_category.textContent = chef_data[0].name;
        menu_card.appendChild(card_category);
    
        // change i for different midpoint
        for (let i=5; i < (chef_data[0].items.length / 3) + (chef_data[0].items.length/ 3); i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = chef_data[0].items[i].name;
        
            const price = document.createElement('div');
            price.textContent = chef_data[0].items[i].price;
        
            const food_description = document.createElement('p');
            food_description.textContent = chef_data[0].items[i].description;
        
            food_top.appendChild(food_name);
            food_top.appendChild(price);

            food_item.appendChild(food_top);
            food_item.appendChild(food_description);
            
            menu_card.appendChild(food_item);
        }

        menu_row.appendChild(menu_card);
        menu.appendChild(menu_row); 

    }
    
    function insert_chef3(){
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu_card');

    
        const card_category = document.createElement('h1');
        card_category.textContent = chef_data[0].name;
        menu_card.appendChild(card_category);
    
        // change i for different midpoint
        for (let i=11; i < chef_data[0].items.length; i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = chef_data[0].items[i].name;
        
            const price = document.createElement('div');
            price.textContent = chef_data[0].items[i].price;
        
            const food_description = document.createElement('p');
            food_description.textContent = chef_data[0].items[i].description;
        
            food_top.appendChild(food_name);
            food_top.appendChild(price);
            food_item.appendChild(food_top);
            food_item.appendChild(food_description);
            menu_card.appendChild(food_item);
        }

        menu_row.appendChild(menu_card);
        menu.appendChild(menu_row); 

    }
    chef_btn.addEventListener('click', insert_chef);
    chef_btn.addEventListener('click', insert_chef2);
    chef_btn.addEventListener('click', insert_chef3);
}

function display_specials(){
    const specials_btn = document.querySelector('.lunch_combo');
    const menu = document.querySelector('#menu');

    const menu_row = document.createElement('div');
    menu_row.classList.add('menu_row');

    function insert_lunch(){
        // creates menu card with title
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu_card');
    
        const card_category = document.createElement('h1');
        card_category.textContent = lunch_combo_data[0].name + "  $" + lunch_combo_data[0].items[0].price;
        menu_card.appendChild(card_category);
    

        for (let i=0; i < lunch_combo_data[0].items.length; i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = lunch_combo_data[0].items[i].name;
        
            // const price = document.createElement('div');
            // price.textContent = lunch_combo_data[0].items[i].price;
        
            const food_description = document.createElement('p');
            food_description.textContent = lunch_combo_data[0].items[i].description;
        
            food_top.appendChild(food_name);
            // food_top.appendChild(price);

            food_item.appendChild(food_top);
            food_item.appendChild(food_description);
            
            menu_card.appendChild(food_item);
        }

        menu_row.appendChild(menu_card);
        menu.appendChild(menu_row); 
    }

    function insert_combo(){
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu_card');

    
        const card_category = document.createElement('h1');
        card_category.textContent = lunch_combo_data[1].name + "  $" + lunch_combo_data[1].items[0].price;
        menu_card.appendChild(card_category);
    

        for (let i=0; i < lunch_combo_data[1].items.length; i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = lunch_combo_data[1].items[i].name;
        
            // const price = document.createElement('div');
            // price.textContent = lunch_combo_data[1].items[i].price;
        
            const food_description = document.createElement('p');
            food_description.textContent = lunch_combo_data[1].items[i].description;
        
            food_top.appendChild(food_name);
            // food_top.appendChild(price);

            food_item.appendChild(food_top);
            food_item.appendChild(food_description);

            menu_card.appendChild(food_item);
        }

        menu_row.appendChild(menu_card);
        menu.appendChild(menu_row); 

    }
    
    specials_btn.addEventListener('click', insert_lunch);
    specials_btn.addEventListener('click', insert_combo);
}

function display_dd(){
    const drink_dessert_btn = document.querySelector('.drink_dessert');
    const menu = document.querySelector('#menu');

    const menu_row = document.createElement('div');
    menu_row.classList.add('menu_row');

    function insert_drinks(){
        // creates menu card with title
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu_card');
    
        const card_category = document.createElement('h1');
        card_category.textContent = drink_dessert_data[0].name;
        menu_card.appendChild(card_category);
    

        for (let i=0; i < drink_dessert_data[0].items.length; i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = drink_dessert_data[0].items[i].name;
        
            const price = document.createElement('div');
            // Accounts for different prices for different sizes
            if (drink_dessert_data[0].items[i].large == undefined){
                price.textContent = drink_dessert_data[0].items[i].price;
            } else {
            price.textContent = ` ${drink_dessert_data[0].items[i].price} | ${drink_dessert_data[0].items[i].large}`;
            }

            const food_description = document.createElement('p');
            food_description.textContent = drink_dessert_data[0].items[i].description;
        
            food_top.appendChild(food_name);
            food_top.appendChild(price);

            food_item.appendChild(food_top);
            food_item.appendChild(food_description);
            
            menu_card.appendChild(food_item);
        }

        menu_row.appendChild(menu_card);
        menu.appendChild(menu_row); 
    }


    function insert_desserts(){
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu_card');

    
        const card_category = document.createElement('h1');
        card_category.textContent = drink_dessert_data[1].name;
        menu_card.appendChild(card_category);
    

        for (let i=0; i < drink_dessert_data[1].items.length; i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = drink_dessert_data[1].items[i].name;
        
            const price = document.createElement('div');
            price.textContent = drink_dessert_data[1].items[i].price;
        
            const food_description = document.createElement('p');
            food_description.textContent = drink_dessert_data[1].items[i].description;
        
            food_top.appendChild(food_name);
            food_top.appendChild(price);

            food_item.appendChild(food_top);
            food_item.appendChild(food_description);

            menu_card.appendChild(food_item);
        }

        menu_row.appendChild(menu_card);
        menu.appendChild(menu_row); 

    }
    
    drink_dessert_btn.addEventListener('click', insert_drinks);
    drink_dessert_btn.addEventListener('click', insert_desserts);
}

function display_sides(){

    const sides_btn = document.querySelector('.sides');
    const menu = document.querySelector('#menu');

    const menu_row = document.createElement('div');
    menu_row.classList.add('menu_row');

    function insert_sides(){
        // creates menu card with title
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu_card');
    
        const card_category = document.createElement('h1');
        card_category.textContent = sides_data[0].name;
        menu_card.appendChild(card_category);
    

        for (let i=0; i < sides_data[0].items.length; i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = sides_data[0].items[i].name;
        
            const price = document.createElement('div');
            price.textContent = sides_data[0].items[i].price;
        
            const food_description = document.createElement('p');
            food_description.textContent = sides_data[0].items[i].description;
        
            food_top.appendChild(food_name);
            food_top.appendChild(price);

            food_item.appendChild(food_top);
            food_item.appendChild(food_description);
            
            menu_card.appendChild(food_item);
        }

        menu_row.appendChild(menu_card);
        menu.appendChild(menu_row); 
    }

    sides_btn.addEventListener('click', insert_sides);

}