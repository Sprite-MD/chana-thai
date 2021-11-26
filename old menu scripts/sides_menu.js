function loadFile(filePath, done) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () { return done(this.responseText) }
    xhr.open("GET", filePath, true);
    xhr.send();
}

let sides_count = 0
const sides_file = [ "./menu_data/side.json"];
const sides_data = [];


sides_file.forEach((file, i) => {
   
    loadFile(file, (responseText) => {
        
        sides_data[i] = JSON.parse(responseText);
        sides_count += 1;

        if (sides_count == sides_file.length){
            display_sides();
        } 
    })
});


// All actions must be done in this function
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