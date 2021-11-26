let url = './menu_data/appetizers.json';

fetch(url)
.then(res => res.json())
.then(out => {
    //All codes goes here


  console.log(out.items[0].name)
})
.catch(err => {throw err});