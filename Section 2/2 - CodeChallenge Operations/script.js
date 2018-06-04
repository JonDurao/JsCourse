var agePlayer1 = 43;
var agePlayer2 = 56;

var heightPlayer1 = 195;
var heightPlayer2 = 187;

var P1 = heightPlayer1 + (agePlayer1 * 5);
var P2 = heightPlayer2 + (agePlayer2 * 5);

if (P1 > P2){
    console.log("P1 WINS!!");
} else if (P2 > P1) {
    console.log("P2 WINS!!");
} else {
    console.log("DRAW");
}