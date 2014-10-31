
var guess_history = [], number_to_be_guessed = 0, user_guess, remaining_guesses = 7;
var HotColdText="";


function generateRandomNumber() {
	number_to_be_guessed = Math.floor((Math.random() * 100) + 1);
	//document.getElementById("show_button").innerHTML=number_to_be_guessed;
}

window.AnalyzeEnteredGuess=function(){
	if (number_to_be_guessed === 0) {
		generateRandomNumber();
	};
	user_guess = document.getElementById("input-box").value;
	if ((user_guess >= 1) && (user_guess <= 101)) {
		if (user_guess == number_to_be_guessed) {
			document.getElementById("list-of-guesses").innerHTML=
					document.getElementById("list-of-guesses").innerHTML+ "<br>"+user_guess;
			document.getElementById("remaining-guesses").innerHTML="Congratulations you won! You're right the number is: "+user_guess+"Play Again!";
		$("body").css("background-color","yellow");
		}
		else
		{
			var i=0;
			for (i=0; i<guess_history.length; i++) {
				if (user_guess === guess_history[i]) {
					document.getElementById("remaining-guesses").innerHTML="Your guess is a repeat. Enter some other number.";
				    break;
				};	
			};
			if (user_guess === guess_history[i]) {
				//do nothing
			}
			else
			{
			if (remaining_guesses === 1) {
				document.getElementById("remaining-guesses").innerHTML="Game Over! You Run out of Guesses! Start Again!";
				document.getElementById("input-box").value = "";
				$("body").css("background-color","red");
				document.getElementById("list-of-guesses").innerHTML=
					document.getElementById("list-of-guesses").innerHTML+ "<br>"+user_guess;
			}
			else
			{
				
				if (user_guess > number_to_be_guessed) {
					HotColdText = "Guess Lower. ";
				}
				else
				{
					HotColdText = "Guess Higher. ";
				};
				if (Math.abs(user_guess - number_to_be_guessed) < 25) {
					HotColdText = "You are hot! " + HotColdText;
				}
				else
				{
					HotColdText = "You are cold! " + HotColdText;
				};

				remaining_guesses = remaining_guesses -1;
				if (remaining_guesses === 6) {
					document.getElementById("list-of-guesses").innerHTML="This is your guessing history: <br>"+user_guess+" - "+HotColdText;
				}
				else
				{
					document.getElementById("list-of-guesses").innerHTML=
					document.getElementById("list-of-guesses").innerHTML+ "<br>"+user_guess+" - "+HotColdText;
				};
				guess_history.push(user_guess);
				document.getElementById("remaining-guesses").innerHTML=HotColdText+"You have "+remaining_guesses+" Guesses Remaining";
			};
		};
	};
	}
	else
	{
		if (user_guess === "") {
			document.getElementById("remaining-guesses").innerHTML="Please enter your guess. You have "+remaining_guesses+" Guesses Remaining";
		}
		else
		{
			document.getElementById("remaining-guesses").innerHTML="Please enter number between 1-100";
		}		
	}
	
}


window.ShowNumberFunction=function(){
	document.getElementById("remaining-guesses").innerHTML="The number was: "+number_to_be_guessed+". You didn't guess it!"
}

window.RestartGameFunction= function() {
    generateRandomNumber();
    $("body").css("background-color","green");
    document.getElementById("input-box").value = "";
    remaining_guesses= 7;
	document.getElementById("remaining-guesses").innerHTML=remaining_guesses+" Guesses Remaining";
	guess_history = [];
	document.getElementById("list-of-guesses").innerHTML="";
}