const userInput = document.getElementById("userInput");

var expressi = '';

function press(num){
	expressi += num;
	userInput.value = expressi;
}

function equal(){
	userInput.value = eval(expressi);
	expressi = '';
}

function erase(){
	expressi = '';
	userInput.value = expressi;
}