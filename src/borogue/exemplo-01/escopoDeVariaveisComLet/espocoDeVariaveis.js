let movie = 'Lord of the Rings';

function starWarsFan() {
  let movie = 'Star Wars';
  return movie;
}

function marvelFan () {
  movie = 'The Avengers';
  return movie;
}

function blizzardFan () {
  let isFan = true;
  let phrase = 'WarCraft';
  console.log(`Before if: ${phrase}`);
  if(isFan){
   let phrase = 'Initial Text';
   phrase = 'For the Horde!';
   console.log(`Inside if: ${phrase}`);
  }
  phrase = 'For The Alliance!';
  console.log(`After if: ${phrase}`);
}
console.log(movie);
console.log(starWarsFan());
console.log(marvelFan());
console.log(movie);
console.log();
