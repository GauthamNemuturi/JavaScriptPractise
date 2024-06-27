const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

// Example:1
// const nu = [1,2,3,4,5];
// let mi = num[0];
// function minNum(){
//    for(let element of nu){
//     if(mi>element){
//         mi = element;
//     }
//    }

//    return mi; 
// }
// console.log("Min number is "+nu.reduce(minNum));


// const votes = ['y','y','y','n','y','n','y','n','n','n','y'];

// const results = votes.reduce((tally,cv)=>{
//     if(tally[cv]){
//        tally[cv]++;
//     }else{
//         tally[cv] = 1;
//     }
//     return tally;
// },{});
// console.log(results);

//Frequency counter pattern
const a1 = [1,2,3];
const a2 = [1,4,9];

const checkSqaured = (a1,a2) =>{
    if(!a1 || !a2) return false;
    if(a1.length !== a2.length) return false;
    const counter = {};
    for(let v1 of a1){
        counter[v1*v1] = (counter[v1] || 0)+1;
    }
    
    for(let v2 of a2){
        if(!counter[v2]) return false;
        console.log(counter);
        counter[v2]-=1;
    }
    return true;
}
console.log(checkSqaured(a1,a2));

//
const user = {
    firstName:"Gautham",
    lasttName:"N",
    age:23,
    country:"India",
}

const fullName = ({firstName,lasttName}) =>{
    return `${firstName} ${lastname}`;
}

fullName(userName);