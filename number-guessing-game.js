/*
Generate a random number between 1 and 100. Using the browser 
functions prompt and alert, ask the user to guess the number. You should 
give them 4 tries to guess the number. If they guess wrong, tell them if 
it's higher or lower. If they guess right, congratulate them. Otherwise, 
give them a message
*/
var prompt = require('prompt');

function guessNumber() {
    
    var randomNum = Math.floor(Math.random() * 100 + 1);
    var counter = 4;
    isCorrect();
    
    function isCorrect() {
        if(counter > 0) {
            prompt.get('number', function(error, response) {
                //console.log(response['enter number']);    //for multiple words, but should not do this
                //console.log(response.number);
                if (error) {
                    console.log("You have an error!");
                } 
                else if (randomNum > response.number) {
                    console.log("The number is bigger!");
                    console.log("You have " + (counter - 1) + " tries left");
                    counter--;
                    isCorrect();
                }
                else if (randomNum < response.number) {
                    console.log("The number is smaller!");
                    console.log("You have " + (counter - 1) + " tries left");
                    counter--;
                    isCorrect();
                }
                else {
                    console.log("Correct!");
                }
                
            });

        }
    }
    
}

guessNumber();