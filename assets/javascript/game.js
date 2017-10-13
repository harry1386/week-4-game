window.onload = function (){

var	target = 50;
var counter = 0;



	$("#rnp2").text(target);


	$("#img1").on("click", function(){
		counter += 1;
		$("#ynp2").text(counter);
	});

	$("#img2").on("click", function(){
		counter += increment;

		$("#ynp2").text(counter);

		if (counter === target) {
			
			$('#sp2').text(Number($('#sp2').text())+1);

		} else if (counter >= target){

			$('#lp2').text(Number($('#lp2').text())+1);
		}
	});

	$("#img3").on("click", function(){
		counter += 15;
		$("#ynp2").text(counter);

	});

	$("#img4").on("click", function(){
		counter += 25;
		$("#ynp2").text(counter);

	});




}