var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
},
];

var cardsInPlay = [];

var resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetBoard);


function resetBoard() {
	location.reload();
	};


function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	t++;
} else {
	alert("sorry try again");
}
};


function flipCard() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src',cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2){
checkForMatch();
}
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
};


function createBoard() {
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		document.getElementById('game-board').appendChild(cardElement);
		cardElement.addEventListener('click', flipCard);
	}
};

createBoard();
