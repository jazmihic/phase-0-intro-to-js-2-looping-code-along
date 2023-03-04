for (let age = 30; age<40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy beqr", "drones", "doll"];
function wrapGifts(gifts){
    for (let i = 0; i< gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}
wrapGifts(gifts);

function writeCards(names, event) {
    let messages = [];
    for(let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}

function countDown(positiveNumber) {
    while(positiveNumber >= 0){
        console.log(positiveNumber);
        positiveNumber--;
    }
}