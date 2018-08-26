function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var list = [];
  var i = 0;
  for ( let i=0; i <= musiciansArray.length - 1; i++ ) {
    list.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`);
  }
  return list;
}

function johnLennonFacts(array) {
  let i = array.length - 1;
  while (i >= 0) {
    array[i] = `${array[i]}!!!`
    i--;
  }
  return array;
}