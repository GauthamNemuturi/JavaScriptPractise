const todos =[];
let counter = 0;

function addTodo(item){
   let len = todos.push(item);
   console.log("Successfully added into the TodoList");
   console.log(`Todo contains ${len} items`)
}

function removeLastTodo(){
    if (todos.length === 0) ("Todo list is empty")
    let item = todos.pop();
    console.log(`Last item removed is ${item}`);
}

function displayTodo(){
         return todos.map((key) => (key));
}


function removeItem(item){
    let pos = todos.indexOf(item.toLowerCase());
    item = todos.splice(pos,1);
    console.log(`${item} removed succesfully`);
    console.log(`Todo contains:${todos.length}items: ${todos}`);
}

function createSubTodo(item,items){
     let pos = todos.indexOf(item);
     todos.splice();

    
 }


