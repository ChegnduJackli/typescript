//TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它。
function add(x: number, y: number): number {
    return x + y;
}

console.log(add(10, 20));


let myAdd: (x: number, y: number) => number =
    function (x: number, y: number): number { return x + y; };

console.log(myAdd(11, 22));

function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  // works correctly now
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");


let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
//         return function() {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
// debugger;
//             return {suit: this.suits[pickedSuit], card: pickedCard % 13}; //返回的函数里的this被设置成了window而不是deck对象
//         }
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
          
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 }; // 箭头函数能保存函数创建时的 this值，而不是调用时的值：
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck2: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker2 = deck2.createCardPicker();
let pickedCard2 = cardPicker2();

console.log("card2: " + pickedCard2.card + " of " + pickedCard2.suit);

//函数重载
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
debugger;
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card3: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard4 = pickCard(15);
console.log("card33: " + pickedCard4.card + " of " + pickedCard4.suit);