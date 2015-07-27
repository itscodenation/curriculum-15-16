// This function returns the selection of the computer
            var userPoint = 0;
            var aiPoint = 0;
            
            function getAISelection() {
                //TODO: randomly choose between 'rock', 'paper', or 'scissors'
                var choices = ['rock', 'paper', 'scissor'];
                var randomPick = Math.floor(Math.random() * 3);
                return choices[randomPick];
            }
            
            // This function picks the winner
            function pickWinner( userValue, aiValue ) {
                //TODO: pick the correct winner
                console.log("user = " + userValue);
                console.log("ai = " + aiValue);
                if ( 
                    userValue == "scissor"  && aiValue == "paper"   || 
                    userValue == "paper"    && aiValue == "rock"    || 
                    userValue == "rock" && aiValue == "scissor" ) {
                    userPoint++;
                    setPoint();
                    return 'user';                
                } else if ( aiValue == "scissor" && userValue == "paper" || 
                            aiValue == "paper"   && userValue == "rock"  || 
                            aiValue == "rock"    && userValue == "scissor") {
                    aiPoint++;
                    setPoint();
                    return 'ai';                
                } else {
                    return 'draw';
                }
            }

            
            function setPoint() {
                $('#userPoint').text(userPoint);
                $('#aiPoint').text(aiPoint);
            }
            
            
            
            function evaluate( evt ){
                var userValue = evt.target.getAttribute('id');
                var aiValue = getAISelection();

                var winner = pickWinner(userValue, aiValue );

                if ( 'user' === winner ) {
                    $('#message').delay(50).text('You have won!, Click a box to play again');
                } else if ( winner === 'draw' ) {
                    $('#message').delay(50).text('Draw! Click a box to play again');
                } else {
                    $('#message').delay(50).text('You have lost!, Click a box to play again');
                }
            }

            $(document).ready(function(){
                setPoint();
                function bop(elm){
                    $(elm).fadeOut('fast').delay(1).fadeIn('fast');
                }

                $('.token').click( function(e) {
                    bop(this);
                    evaluate(e);
                });
            });