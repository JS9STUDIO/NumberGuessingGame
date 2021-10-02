let button = document.getElementById("button");
let result = document.getElementById("result");
let list = document.getElementById("list");
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log('random', randomNumber);
let attempt = 1;
let maxAttempt = 5;
let history = "";


button.addEventListener('click', function(){
    let inputNum = document.getElementById("inputNum").value;
    if (attempt < maxAttempt) 
    {
	    	if( inputNum == randomNumber) {
	        alert("You Win!");
		    location.reload();
		    } 
		    else if(inputNum < randomNumber) {
		        attempt++;
		        history = inputNum;
		        $("ol").append("<li>" + history + " - " + "Guess Higher </li>");
		        document.getElementById("inputNum").value = "";
		    } 
		    else if(inputNum > randomNumber) {
		        attempt++;
		        history = inputNum;
		        $("ol").append("<li>" + history + " - " + "Guess Lower </li>");
		        document.getElementById("inputNum").value = "";
	    }
    } else {
    	history = inputNum;
		$("ol").append("<li>" + history + " - " + "Guess Lower </li>");
    	alert("Game Over!");
    	location.reload();
    }
    
})