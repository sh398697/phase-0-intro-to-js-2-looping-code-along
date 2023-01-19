// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
    const cardMessages = [];
    for (let i = 0; i < names.length; i++) {
        cardMessages[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cardMessages;
  }

  function countDown(i) {
    let counter = i;
    
    while (counter >= 0) {
        console.log(counter);
        counter--;
    }
  }
