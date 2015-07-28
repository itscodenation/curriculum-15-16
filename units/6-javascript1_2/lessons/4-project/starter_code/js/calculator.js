$(document).ready(function()
{
	var state = null;
	var first_operand = null;
	var second_operand = null;
	var operator = null;
	var rand_first_operand_flag = false;
	var rand_second_operand_flag = false;

	function clear()
	{
		$('#question').empty();
		$('#answer').empty();
		state = 0;
		first_operand = null;
		second_operand = null;
		operator = null;
		rand_first_operand_flag = false;
		rand_second_operand_flag = false;
	}

	clear();

	function isNumeric(n) 
	{
  		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	function isOneOperandOperator(n) 
	{
  		return n == "SQRT" || n == "log";
	}

	function isTwoOperandOperator(n) 
	{
  		return n == "/" || n == "x" || n == "-" || n == "+" || n == "^";
	}

	// Simple FSM
	$('.calc-btn').click(function() 
	{
		var input = $(this).text();

		if (input == "CLEAR")
			clear();
		
		if (state == 0)
		{
			if (input == "RAND" && first_operand == null)
			{
				rand_first_operand_flag = true;
				var random_number = generateRandomNumber();
				first_operand = random_number;
				$('#question').append(random_number);
			}

			else if (isNumeric(input) && rand_first_operand_flag == false)
			{
				first_operand = first_operand == null ? input: parseInt(first_operand.toString() + input);
				$('#question').append(input);
			}

			else if (isTwoOperandOperator(input) && first_operand != null)
			{
				operator = input;
				$('#question').append(" " + input);
				state = 1;
			}

			else if (isOneOperandOperator(input) && first_operand != null)
			{
				operator = input;

				if (operator == "SQRT")
				{
					answer = square_root(first_operand);
					$('#question').prepend("sqrt(");
					$('#question').append(")");
				}

				else if (operator == "log")
				{
					answer = logBase10(first_operand);
					$('#question').prepend("log(");
					$('#question').append(")");					
				}

				$('#question').append(" =");
				$('#answer').append(answer).hide().fadeIn(1000);				
			}
		}

		else if (state == 1)
		{
			if (input == "RAND" && second_operand == null)
			{
				rand_second_operand_flag = true;
				var random_number = generateRandomNumber();
				second_operand = random_number;
				$('#question').append(" " + random_number);
			}

			else if (isNumeric(input)  && rand_second_operand_flag == false)
			{
				$('#question').append(second_operand == null ? " " + input : input);
				second_operand = second_operand == null ? input: parseInt(second_operand.toString() + input);
			}	

			else if (input == "=" && second_operand != null)
			{
				if (operator == '/')
					answer = divide(parseInt(first_operand), parseInt(second_operand));
				else if (operator == "x")
					answer = multiply(parseInt(first_operand), parseInt(second_operand));	
				else if (operator == "-")
					answer = subtract(parseInt(first_operand), parseInt(second_operand));	
				else if (operator == "+")
					answer = add(parseInt(first_operand), parseInt(second_operand));	
				else if (operator == "^")
					answer = power(parseInt(first_operand), parseInt(second_operand));	

				$('#question').append(" =");
				$('#answer').append(answer).hide().fadeIn(1000);
				state = 2;
			}		
		}

	});
});
