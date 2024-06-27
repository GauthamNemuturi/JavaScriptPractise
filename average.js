const array1 = [12,23,34,545];
function average(list){
    let sum = 0;
    for(let i = 0;i<list.length;i++){
     sum+=list[i];
    }
    return sum/list.length;
}
average(array1);