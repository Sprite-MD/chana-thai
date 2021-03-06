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

let entree_count = 0
// paths to all of your files
const entree_data = [ "./menu_data/noodles.json","./menu_data/rice.json", "./menu_data/curry.json"];
// where you want to store the data
const app_data = [];



// loop through each file
entree_data.forEach((file, i) => {
    // and call loadFile
    // note how a function is passed as the second parameter
    // that's the callback function
    loadFile(file, (responseText) => {
        // we set jsonData[i] to the parse data since the requests
        // will not necessarily come in order
        // so we can't use JSONdata.push(JSON.parse(responseText));
        // if the order doesn't matter, you can use push
        app_data[i] = JSON.parse(responseText);
        // or you could choose not to store it in an array.
        // whatever you decide to do with it, it is available as
        // responseText within this scope (unparsed!)
        entree_count += 1;

        if (entree_count == entree_data.length){
            display_entree();
        } 
        
    })
});

// All actions must be done in this function
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
        card_category.textContent = app_data[0].name;
        menu_card.appendChild(card_category);
    

        for (let i=0; i < app_data[0].items.length; i++){
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

    function insert_rice(){
        const menu_card = document.createElement('div');
        menu_card.classList.add('menu_card');

    
        const card_category = document.createElement('h1');
        card_category.textContent = app_data[1].name;
        menu_card.appendChild(card_category);
    

        for (let i=0; i < app_data[1].items.length; i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = app_data[1].items[i].name;
        
            const price = document.createElement('div');
            price.textContent = app_data[1].items[i].price;
        
            const food_description = document.createElement('p');
            food_description.textContent = app_data[1].items[i].description;
        
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
        card_category.textContent = app_data[2].name;
        menu_card.appendChild(card_category);
    

        for (let i=0; i < app_data[2].items.length; i++){
            const food_item = document.createElement('div');
            food_item.classList.add('food_item');
        
            const food_top = document.createElement('div');
            food_top.classList.add('food_item_top');
            const food_name = document.createElement('h3');
            food_name.textContent = app_data[2].items[i].name;
        
            const price = document.createElement('div');
            price.textContent = app_data[2].items[i].price;
        
            const food_description = document.createElement('p');
            food_description.textContent = app_data[2].items[i].description;
        
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