var generatedRandomNumber = null;

$(document).ready(function()
{
	$('#check-btn').hide();
	$('#guess').hide();
	$('#correct').hide();

	$('#generate-btn').click(function()
	{
		generatedRandomNumber = generateRandomNumber();
		$('#generate-btn').hide();
		
		$('#check-btn').fadeIn(500);
		$('#guess').fadeIn(500);
	
		$('#guess').focus();

		return false;	
	});

	$('#check-btn').click(function()
	{
		var returnHash = checkGuess(parseInt($('#guess').val()), generatedRandomNumber);
		console.log(returnHash);

		if (returnHash["statusCode"] == 0 || returnHash["statusCode"] == 1 || returnHash["statusCode"] == 2)
		{
			$('#correct').text(returnHash["statusMessage"]);
			$('#correct').removeClass("alert-success alert-warning alert-danger");

			if (returnHash["statusCode"] == 0)
				$('#correct').addClass("alert-success");

			else if (returnHash["statusCode"] == 1)
				$('#correct').addClass("alert-warning");

			else if (returnHash["statusCode"] == 2)
				$('#correct').addClass("alert-danger");

			$('#correct').hide();
			$('#correct').fadeIn(500);
		}

		return false;	
	});



});
