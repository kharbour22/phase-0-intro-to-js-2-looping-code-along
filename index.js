for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

const names = ["Charlie", "Samip", "Ali"];

function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
      console.log(`Thank you, ${names[i]}, for the wonderful birthday gift!`);
    }
  
    return names;
  }

writeCards(names);

let countdown = 10;
while (countdown > 0) {
    console.log(countdown--);
}