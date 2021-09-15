// Dropdown javascript

function dropdown(){
	var x = document.getElementById('myDropdown')
	if(x.style.display==="none"){
		x.style.display="block"
	}
	else{
		x.style.display="none"
	}
}

// Calculator javascript
function add() {
	var n1 = Number(document.getElementById('num1').value);
	var n2 = Number(document.getElementById('num2').value);

	document.getElementById('result').innerHTML = "Answer is: " + Number(n1 + n2);
}

function sub(){
	var n1 = Number(document.getElementById('num1').value);
	var n2 = Number(document.getElementById('num2').value);

	document.getElementById('result').innerHTML = "Answer is: " + Number(n1 - n2);
}

function mult(){
	var n1 = Number(document.getElementById('num1').value);
	var n2 = Number(document.getElementById('num2').value);

	document.getElementById('result').innerHTML = "Answer is: " + Number(n1 * n2);
}

function div(){
	var n1 = Number(document.getElementById('num1').value);
	var n2 = Number(document.getElementById('num2').value);

	document.getElementById('result').innerHTML = "Answer is: " + Number(n1 / n2);
}

function mod(){
	var n1 = Number(document.getElementById('num1').value);
	var n2 = Number(document.getElementById('num2').value);

	document.getElementById('result').innerHTML = "Answer is: " + Number(n1 % n2);
}

function reset(){
	document.getElementById('num1').value = " ";
	document.getElementById('num2').value = " ";

	document.getElementById('result').innerHTML = " ";
}

// Calculator jquery
$(document).ready(function() {
	$("#add").click(function(){
		var n1 = Number($("#num1").value);
		var n2 = Number($("#num2").value);
		$("#result1").html("")

	})

});

// Calculator Jquery
$(document).ready(function() {
            $("#add1").click(function(){
            var n1 = Number($("#number1").val());
            var n2 = Number($("#number2").val());
            $("#result1").html("Answer is " + Number(n1 + n2));

            });

            $("#sub1").click(function(){
            var n1 = Number($("#number1").val());
            var n2 = Number($("#number2").val());
            $("#result1").html("Answer is " + Number(n1 - n2));
            }); 

            $("#mult1").click(function(){
            var n1 = Number($("#number1").val());
            var n2 = Number($("#number2").val());
            $("#result1").html("Answer is " + Number(n1 * n2));
            }); 

            $("#div1").click(function(){
            var n1 = Number($("#number1").val());
            var n2 = Number($("#number2").val());
            $("#result1").html("Answer is " + Number(n1 / n2));
            }); 

            $("#reset1").click(function(){
            $("#number1").val("");
            $("#number2").val("");
            $("#result1").html("");
        });

        });



// Accordion jquery
$(document).ready(function() {

            $('ul.tabs li').click(function(){
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('active');
            $('.tab-content').removeClass('active');
    
            $(this).addClass('active');
            $("#"+tab_id).addClass('active');
            });
        });


        $(document).ready(function() {
            $(".card-header").click(function(){
                if ($(this).next(".card-body").hasClass("active")) {
                    $(this).next(".card-body").removeClass("active").slideUp();

                }
                else{
                    $(".card .card-body").removeClass("active").slideUp();
                    $(this).next(".card-body").addClass("active").slideDown();
                } 

            });

        });


 
