$(document).ready(function(){
	$("#form").on("submit",function(e){

		e.preventDefault();

			var name = $("#name").val();
			var email = $("#email").val();
			var mob = $("#mob").val();
			var address = $("#address").val();

			function empty(){
				$("#name").val("");
				$("#email").val("");
				$("#mob").val("");
				$("#address").val("");
			}
	
			var nameRegex = /^[a-zA-Z ]+(([a-zA-Z ])?[a-zA-Z])$/;
	    	var emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9]+(\.[a-z]{2,4})$/;
	    	var mobRegex = /^[0-9]+$/;

			$(".error").remove();

			if(name.length < 1){	
				$("#name").after('<span class="error">This field is required</span>');	
				return false;
			}

			if(!name.match(nameRegex)){
				$("#name").after('<span class="error">Enter valid name</span>');
				return false;
			}

			if(email.length < 1) {
      			$('#email').after('<span class="error">This field is required</span>');
      			return false;
    		}

    		if(!email.match(emailRegex)){
      			$('#email').after('<span class="error">Please enter valid email</span>');
      			return false;
	
    		}

			if(mob.length<1){
				$("#mob").after('<span class="error">This field is required</span>');
				return false;
			}

			if(!mob.match(mobRegex)){
				$("#mob").after('<span class="error">Enter only numbers</span>');
				return false;
			}

			if(mob.length != 10){
				$("#mob").after('<span class="error">Enter valid mobile number</span>');
				return false;
			}

			if(address.length<1){
				$("#address").after('<span class="error">This field is required</span>');
				return false;
			}

			if(address.match(/(\w+)/g).length < 5){
				$("#address").after('<span class="error">Address should be 5 words</span>');
					return false;
				}
		
			$("#success").html("Form submitted successfully");
			empty();
		});



	});