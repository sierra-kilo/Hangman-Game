var wordList = ['doritos', 'twinkies', 'skittles', 'snickers'];
var puzzleDiv = document.getElementById('puzzle');

var string = '';
var wordChosen = false;
document.onkeyup = function () {
    if(false == wordChosen) {
        wordChosen = true;
        for (var i = 0; i < wordList[0].length; i++) {
            string += " _";
            puzzleDiv.innerHTML = string;
        }
    }
}
