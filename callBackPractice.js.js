//Using for loop
const add = function(x,y){
    return x+y;
}
const sub = function(x,y){
     return x-y;
}
const mul  = function(x,y){
     return x*y;
}
const divide = function(x,y){
     return x/y;
}
const arrFunc = [add,sub,mul,divide];
function guess(x,y){
    var result = [];
    for(let i=0;i<arrFunc.length;i++){
     result[i] = arrFunc[i] (x,y);
     console.log(`result is ${result[i]}`);
    }
    function biggest(){
     let min = Math.min(...result);
     let max = Math.max(...result);
      console.log(min);
      console.log(max);
    }
    biggest();
}

function generate(){
    let x  = Math.floor(Math.random()*10)+1;
    let y  = Math.floor(Math.random()*10)+1;
    guess(x,y);
}
generate();

//Using for of loop
const add = function(x,y){
    return x+y;
}
const sub = function(x,y){
     return x-y;
}
const mul  = function(x,y){
     return x*y;
}
const divide = function(x,y){
     return x/y;
}
const arrFunc = [add,sub,mul,divide];
function guess(x,y){
    var result = [];
    for(let func of arrFunc){
     result.push(func(x,y));
     console.log(`result is ${result}`);
    }
    function biggest(){
     let min = Math.min(...result);
     let max = Math.max(...result);
      console.log(min);
      console.log(max);
    }
    biggest();
}

function generate(){
    let x  = Math.floor(Math.random()*10)+1;
    let y  = Math.floor(Math.random()*10)+1;
    guess(x,y);
}
generate();

//practise Callback

const calculate = (x,y,operation,callback) =>{
    let result;
    switch(operation){
        case "add":
            results = x+y;
            callback(result);
            break;
    
    case "sub":
            results = x-y;
            callback(result);
            break;
    case "default":console.log("Invalid Operation");        

    }
}

const display = (results) =>{
    console.log(`Result is ${results}`);
}



//Practise 3
// array1 = [a, b, c, d, e]
// array2 = [b, d, f]

// Output:
// array1 = [a, c, e]
// array2 = [b, d, f]
const array1 = [a, b, c, d, e];
const array2 = [b, d, f];

array1 = array1.filter((key) =>{
    if(array2.includes(key)){
       return array1.splice(array1.indexOf(key),1)
    }else{
       return array1;
    }
});
