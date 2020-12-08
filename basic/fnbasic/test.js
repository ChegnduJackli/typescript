//TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它。
function add(x, y) {
    return x + y;
}
console.log(add(10, 20));
var myAdd = function (x, y) { return x + y; };
console.log(myAdd(11, 22));
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); // works correctly now
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
var result3 = buildName("Bob", "Adams");
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        //         return function() {
        //             let pickedCard = Math.floor(Math.random() * 52);
        //             let pickedSuit = Math.floor(pickedCard / 13);
        // debugger;
        //             return {suit: this.suits[pickedSuit], card: pickedCard % 13}; //返回的函数里的this被设置成了window而不是deck对象
        //         }
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 }; // 箭头函数能保存函数创建时的 this值，而不是调用时的值：
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
var deck2 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker2 = deck2.createCardPicker();
var pickedCard2 = cardPicker2();
console.log("card2: " + pickedCard2.card + " of " + pickedCard2.suit);
//函数重载
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
debugger;
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card3: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard4 = pickCard(15);
console.log("card33: " + pickedCard4.card + " of " + pickedCard4.suit);
//# sourceMappingURL=test.js.map