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
    authors: ['William Golding','Xavier Time'],
    rating: 3.67,
    genres: ['fiction']
  }
]
//Example 1 
// const nums = [1,2,3,4,5];
// let max = nums[0];
// function maxNum(){
//    for(let element of nums){
//     if(max<element){
//         max = element;
//     }
//    }

//    return max; 
// }
// console.log("Max number is "+nums.filter(maxNum));

// console.log(maxNum());

//Example 2:
// const findAuthor = books.filter((fkey)=>{
//   return fkey.authors.map((key) =>key.toLowerCase().includes("Terry"));
// })
// console.log(findAuthor);

// let queryAuthor = 'Neil gaiman'; // works
// // let queryAuthor = 'jeff smith'; // works
// // let queryAuthor = 'jeFF sMiTH'; // works
// const authorBooks = books.filter(function(book) {
//     return book.authors.map((author) =>(author.toLowerCase())).includes(queryAuthor.toLowerCase());
// });
// console.log(authorBooks);

//Example 3:
// const atleastTwoAuthors = books.filter((book)=>{
//     return book.authors.length === 2;
// })
// console.log(atleastTwoAuthors);

//Example 4
// const atleastTwoAuthors = books.filter((book)=>{
//     let titles = book.title;
//     if(book.authors.length === 2){
//         return titles;
//     }
// })
// console.log(atleastTwoAuthors);