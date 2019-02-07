var userData = "";
var dif = 100;
var leastDifference = 100;

$('.submit').on('click', function(){

	userData = {
		name: $('#name').val().trim(),
		photo: $('#imgLink').val().trim(),
		answers: [$('#q1').val(), $('#q2').val(), $('#q3').val(), $('#q4').val(), $('#q5').val(), $('#q6').val(), $('#q7').val(), $('#q8').val(), $('#q9').val(), $('#q10').val()]
	};

	var currentURL = window.location.origin;

    $.post(currentURL + "/api/survey", userData,
    function(data){

	});

	var queryURL = "http://localhost:3333/api/survey";

	$.ajax({url: queryURL, method: 'GET'})
		.done(function(response) {

			for (var f = 0; f < response.length; f++) {
				dif = 100;

					for (var i = 0; i <= 9; i++) {
						dif -= (Math.abs(parseInt(userData.answers[i]) - parseInt(response[f].answers[i])));

							if ( dif < leastDifference) {
								leastDifference = dif;

									bestMatch = {
									name: response[f].name,
									photo: response[f].photo
									};
							}
					}
		console.log(leastDifference);
		console.log(bestMatch);
			};

		$('#matchName').html(bestMatch.name);
		$('#matchPhoto').html(bestMatch.photo);

		}) //.done
}); //submit
