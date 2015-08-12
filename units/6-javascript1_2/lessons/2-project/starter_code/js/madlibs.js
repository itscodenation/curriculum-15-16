$(document).ready(function()
{
	// Reference: http://www.madglibs.com/showglib.php?glibid=34
	var copy = "On his 11th birthday, young NAME-1 Potter discovers the NOUN-1 he never knew he had, the NOUN-1 of a/an OCCUPATION-1. \
				In his first MEASUREMENT-1 at Hogwarts School of Witchcraft and NOUN-2, he meets his two ADJECTIVE-1 friends \
				Ron Weasley, an expert at Wizard GAME-1, and Hermione Granger, a girl with ADJECTIVE-2 parents. Harry learns \
				the game of Quiditch and Wizard on his way to facing a Dark PLURAL-NOUN-1 teacher who is bent on VERB-ING-1 him.";

	$("#post-process-box").hide();
	$('#boy-name-1').focus();

	$('#run-btn').click(function()
	{
		$('form').hide();

		var newCopy = runMadlibs(copy, $('#boy-name-1').val(), $('#noun-1').val(), $('#occupation-1').val(), $('#measurement-1').val(), 
								$('#noun-2').val(), $('#adjective-1').val(), $('#game-1').val(), $('#adjective-2').val(), $('#plural-noun-1').val(), 
							    $('#verb-ing-1').val());
		
		$('#post-process').text(newCopy);
		$('#post-process-box').fadeIn(1000).show();
		return false;	
	});

	$('#back-btn').click(function()
	{
		$('#post-process-box').hide();
		$('form').fadeIn(1000).show();


		return false;	
	});

});
