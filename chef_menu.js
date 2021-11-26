// we need a function to load files
// done is a "callback" function
// so you call it once you're finished and pass whatever you want
// in this case, we're passing the `responseText` of the XML request
function loadFile(filePath, done) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () { return done(this.responseText) }
    xhr.open("GET", filePath, true);
    xhr.send();
}

let chef_count = 0
// paths to all of your files
const chef_files = [ "./menu_data/chefspecials.json"];
// where you want to store the data
const chef_data = [];



// loop through each file
chef_files.forEach((file, i) => {
    // and call loadFile
    // note how a function is passed as the second parameter
    // that's the callback function
    loadFile(file, (responseText) => {
        // we set jsonData[i] to the parse data since the requests
        // will not necessarily come in order
        // so we can't use JSONdata.push(JSON.parse(responseText));
        // if the order doesn't matter, you can use push
        chef_data[i] = JSON.parse(responseText);
        // or you could choose not to store it in an array.
        // whatever you decide to do with it, it is available as
        // responseText within this scope (unparsed!)
        chef_count += 1;

        if (chef_count == chef_files.length){
            display_chef();
        } 
        
    })
});

// All actions must be done in this function
function display_chef(){

    const app_btn = document.querySelector('.chef_special');
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
    app_btn.addEventListener('click', insert_chef);
    app_btn.addEventListener('click', insert_chef2);
    app_btn.addEventListener('click', insert_chef3);
}