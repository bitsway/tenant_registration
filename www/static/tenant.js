function regBtn(){
	url="#authorisation_page";					
	$.mobile.navigate(url);
}

function authSubmit(){
	var authVal = $('#auth_code').val();
	$('#authError').text('');
	if(authVal==''){
		$('#authError').text("Please type the authantication code").css("color", "red");
	}
	else if(authVal!='123'){
		$('#authError').text("Code does not match").css("color", "red");
	}
	else{
		$('input').remove('#auth_code');
		$('input').remove('#mypin');
		$('label').remove('#lid');
		$('button').remove('#authSubmitV');
		$('#l_info').show();
	}
}

function landInfoNext(){
	url="#regPage";					
	$.mobile.navigate(url);
}

function regNext(){
	url="#reg_image_page";					
	$.mobile.navigate(url);
}

function regFinalSubmission(){
	//$('button').remove('#finalSumit');
	alert('Submit Successfully');
	url="#home_page";					
	$.mobile.navigate(url);
	//$('#success_message').show();
}

function goHome(){
	url="#home_page";
	$.mobile.navigate(url);
}

function authorizeLandlord(){
	url="#authorise_landlord";					
	$.mobile.navigate(url);
}