window.onload = function(){

var target = Math.floor((Math.random() * 100) + 1);
	$("#rnp2").text(target);

var counter = 0;

var numberOptions = [10,5,3,1];

for (var i = 0; i < numberOptions.length; i++) {
	var hypospray = $("<img>");
	hypospray.addClass("hypo");
	hypospray.attr("src", "assets/images/hypospray_1.jpg");
	hypospray.attr("data-hypovalue", numberOptions[i]);
	$(".images").append(hypospray);
	}

$(".hypo").on("click", function() {

	var hypoValue = ($(this).attr("data-hypovalue"));
	hypoValue = parseInt(hypoValue);

	counter += hypoValue;

	$("#ynp2").text(counter);

	if (counter === target) {
			
			$('#sp2').text(Number($('#sp2').text())+1);
			$('#ynp2').text("0");
			counter = 0;
			hypoValue = 0;
			//$('#rnp2').text(Math.floor((Math.random() * 100) +1));

		} else if (counter >= target){

			$('#lp2').text(Number($('#lp2').text())+1);
			$('#ynp2').text("0");
			counter = 0;
			hypoValue = 0;
			//$('#rnp2').text(Math.floor((Math.random() * 100) +1));
			
		}

	/*if (counter = 0) {
		$('#rnp2').text(Math.floor((Math.random() * 100) +1));
	}if else (counter >= target) {
		$('#rnp2').text(Math.floor((Math.random() * 100) +1));
	}*/

	});




}