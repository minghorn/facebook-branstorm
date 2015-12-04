var file = "Once upon a time in a land far far away called (CITY) there was a (NOUN) who had a (ADJ) (NOUN) . One day a (ADJ) (NOUN) (PAST_TENSE_VERB) and (PAST_TENSE_VERB) the (ADJ) (NOUN) . Without the (ADJ) (TOOL) it would be impossible to (VERB) the (NOUN) . Can you build a (NOUN) to (VERB) the (NOUN) and help the (NOUN_1) ?";
var userInput = [];
var replaceWords = [];
var words = [];

function splitFile() {
	words = file.split(' ');

	console.log(words);
	for(var i = 0; i < words.length; i++){
		if(words[i].charAt(0) === "("){
			replaceWords.push(words[i].substring(1, words[i].length-1));
		}
	}
	console.log(replaceWords);
};


function makeForm(){
	$("#make").css("display", "none");
	var fillInput = "";
	console.log(replaceWords);
	for(var i = 0; i < replaceWords.length; i++){
		fillInput += replaceWords[i] + "<br> <input type = 'text' id = 'textBox" + i + "'> <br>";
	}
	fillInput += "";
	document.getElementById("form").innerHTML = fillInput;
	$("#submit").css("display", "block");
	console.log(fillInput);
}

function getInput(){
	var result = "";
	for (var i = 0; i < replaceWords.length; i++) {
		var nameOf = "textBox" + i;
		userInput[i] = $("#" + nameOf).val();
	};
	console.log(userInput);
	var count = 0;
	for(var i = 0; i < words.length; i++){
		if(words[i].charAt(0) === "("){
			words[i] = userInput[count];
			count++;
		}
		result += words[i] + " ";
	}
	$("#form").css("display", "none");
	$("#submit").css("display", "none");
	$("#haha").css("display", "block");
	$("#madLib").text(result);

}

$(document).ready(function(){
	splitFile();
});