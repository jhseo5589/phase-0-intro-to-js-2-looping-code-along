const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Arki"];

function writeCards(names) {
    let fullList = []
    for (let i = 0; i < names.length; i++) {
        fullList.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        
    }
    return fullList;
}
writeCards(names);



function countDown() {
    for (let countDown = 0; countDown < 10; countDown++) {
    }
        console.log(countDown);
    }
