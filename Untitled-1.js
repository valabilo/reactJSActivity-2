
let x = 5

if(x == 5){
    display = 'it is five';
} else {
    display = 'not five';
}



let display = x == 5 ? 'it is five' : 'not five'; 

items = [ {
    id: 1,
    checked: true,
    items: "This is the first item Apple"
  },
  {
    id: 2,
    checked: false,
    items: "This is the first item Orange"
  },
  {
    id: 3,
    checked: false,
    items: "This is the first item Mango"
  },
  {
    id: 4,
    checked: false,
    items: "This is the first item Papaya"
  },];

let id = 1;    //emparative
for(item of items){
       if(item == id){
        item.checked = !item.checked;
        return item;
       } 
}

items.map( (item)=>{} );  //declrative
