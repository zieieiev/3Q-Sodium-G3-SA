
let wordSelection = [ "ABUSE", "ADOPT", "AGILE", "ARGOT", "AUGER", "BAKED", "BILGE", "BIRCH", "BLIMP", "BLOKE","BORAX", "BRAVE", "BROWS", "CHEAP", "CHOKE","CIDAR", "COMBI", "COVEN", "CRANE", "DOWRY",
					  "FEAST", "FETCH", "FJORD", "FLASK", "FUNGI", "GLOVE", "GNASH", "GOLEM", "GRIME", "HACKS", "HIKED", "HOARY", "HORNS", "JUICE", "JUJUE", "LAPSE", "LIVER", "LOWER", "MAIZE", "MANIC",
					  "MOVIE", "MUSED", "NICER", "PIXEL", "PROVE", "PURGE", "QORMA", "RIVEN", "SERUM", "VERBS" ];

function getRandWord(array){
		let index = Math.floor(Math.random()*array.length);
		return array[index];
}

var score = 0;
var health = 5;
let row = 0;
let finishGame = false;
let loseGame = false;

let exactWord = getRandWord(wordSelection);

function checkWord(){
	if (loseGame == true){
		alert('You have already lost! Please restart.');
	} else if (finishGame == true){
		alert('You have already guessed the word! Please restart.');
	} else {
	
		let w = prompt("Enter a word: ").toUpperCase();
		
		if (w===null || w.length != 5 || !isNaN(w)){
			return;
		}
		
		if (w[0]==exactWord[0]){
			document.getElementById('r-' + row + '-0').style.backgroundColor = 'green';
			score++;
		} else if (w[0]!=exactWord[0] && exactWord.indexOf(w[0])!== -1){
			document.getElementById('r-' + row + '-0').style.backgroundColor = 'yellow';
		} else {
			document.getElementById('r-' + row + '-0').style.backgroundColor = 'grey';
		}
		
		document.getElementById('r-' + row + '-0').innerHTML = w[0];
		
		if (w[1]==exactWord[1]){
			document.getElementById('r-' + row + '-1').style.backgroundColor = 'green';
			score++;
		} else if (w[1]!=exactWord[1] && exactWord.indexOf(w[1])!== -1){
			document.getElementById('r-' + row + '-1').style.backgroundColor = 'yellow';
		} else {
			document.getElementById('r-' + row + '-1').style.backgroundColor = 'grey';
		}
		
		document.getElementById('r-' + row + '-1').innerHTML = w[1];
		
		if (w[2]==exactWord[2]){
			document.getElementById('r-' + row + '-2').style.backgroundColor = 'green';
			score++;
		} else if (w[2]!=exactWord[2] && exactWord.indexOf(w[2])!== -1){
			document.getElementById('r-' + row + '-2').style.backgroundColor = 'yellow';
		} else {
			document.getElementById('r-' + row + '-2').style.backgroundColor = 'grey';
		}
		
		document.getElementById('r-' + row + '-2').innerHTML = w[2];
		
		if (w[3]==exactWord[3]){
			document.getElementById('r-' + row + '-3').style.backgroundColor = 'green';
			score++;
		} else if (w[3]!=exactWord[3] && exactWord.indexOf(w[3])!== -1){
			document.getElementById('r-' + row + '-3').style.backgroundColor = 'yellow';
		} else {
			document.getElementById('r-' + row + '-3').style.backgroundColor = 'grey';
		}
		
		document.getElementById('r-' + row + '-3').innerHTML = w[3];
		
		if (w[4]==exactWord[4]){
			document.getElementById('r-' + row + '-4').style.backgroundColor = 'green';
			score++;
		} else if (w[4]!=exactWord[4] && exactWord.indexOf(w[4])!== -1){
			document.getElementById('r-' + row + '-4').style.backgroundColor = 'yellow';
		} else {
			document.getElementById('r-' + row + '-4').style.backgroundColor = 'grey';
		}
		
		document.getElementById('r-' + row + '-4').innerHTML = w[4];
		
		row++;
		health--;
		
		gameState();
		
		document.getElementById('currentScore').innerHTML = 'Your score for the current word ' + w + ' is ' + score + '.';
		
		if (score != 5){
			score = 0;
		}
	}
}

function gameState(){
	
	if (health == 0){
		if (score == 5){
			alert('Congrats! You have guessed the word correctly! :D The word was: ' + exactWord);
			finishGame = true;
		} else {
			alert('You have lost! The word was: ' + exactWord);
			loseGame = true;
		}
	}
	
	document.getElementById('attempts').innerHTML = 'You have ' + health + ' lives left.';
	
}
