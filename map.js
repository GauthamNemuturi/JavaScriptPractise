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

//Map EX:2
// const Mapresults = books.map((key) =>{
//      if(key.rating < 4){
//        return {["title"]:key.title}
//      }else{
//         return 'Not found';
//      }
// })
// console.log("Display");
// console.log(Mapresults);

// MAP EX:3
// const Mapresults = books.map((key) =>{
//         if(key.title.includes("The")){
//         key.title = "NOOOOO!";
//         return key;
//     }else{
//         return key;
//     }
        
// })
// console.log(Mapresults);

//MAP EX:4
console.log("Example 4");
const Mapresults = books.map((genres) =>{
    genres.genres = genres.genres.map((key) =>{
        if(key.includes("fiction")){
            key = "Abracadabra";
            return key;
        }else{
            return key;
        }
        
    })
      return genres;
})
console.log(Mapresults);

//Map returns every elemnts of the array/object. If not met the condition it returns undefined.