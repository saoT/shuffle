var array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] // x=10
// length = 10

function shuffle () {
  var temporaire; // temporaire sur stackoverflow example == x
  // i commence à 10
  var indexDecrementation; // i
  var indexRandom; // j
  for ( indexDecrementation = array.length; indexDecrementation; indexDecrementation-- ) {
    // premiere valeur de i = 10
    indexRandom = Math.floor(Math.random() * indexDecrementation); // 7
    temporaire = array[indexDecrementation-1]; // temporaire = array[9] = 10
    array[indexDecrementation-1] = array[indexRandom]; // array[9] = array[7] (-> 8)
    array[indexRandom] = temporaire; // array[7] = temporaire (-> 10) 
  }
}

shuffle();

console.log(array);