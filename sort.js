const games = [
  {
    name: "April",
    game: "Don't Starve",
    rating: 4,
  },
  {
    name: "Mark",
    game: "Elder Scrolls",
    rating: 9001,
  },
  {
    name: "Louise",
    game: "Animal Crossing",
    rating: 1,
  },
  {
    name: "Alicia",
    game: "Frogger",
    rating: 11,
  },
  {
    name: "Jamie",
    game: "Undertale",
    rating: 3,
  },
];



let sorted= [];
for(let i =0; i< games.length; i++){
    let added = false;

    for(let j =0; j< sorted.length && !added; j++){
        if(games[i].rating < sorted[j].rating){
            sorted.splice(j, 0, games[i]);
            added = true;
        }
    }
    if(!added){
        sorted.push(games[i]);
    }
}
games.sort((gameA,gameB)=>{
    if(gameA.rating > gameB.rating){
        return -1
    } else {
        return 1;
    }


})

//console.log(games);



const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
