const names = ["Guadalupe", "Ollie", "Aki"];
let eventName = "surprise";

function writeCards(names, eventName) {
    let thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
        debugger;
    }
    return thankYouCards
}

writeCards(names, eventName)

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--)
    }
}

countDown()