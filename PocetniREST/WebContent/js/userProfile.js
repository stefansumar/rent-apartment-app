function myProfile(){

    $.get({
        url: 'rest/user/getCurrentUser',
		contnentType: 'application/json',
        success: function (user) {
        	console.log(user);
        	$('#searchTextField').hide();
        	$('#searchButton').hide();
        	$('#profile').html("");
        	$('#profile').append("<img src=\"images/avatar.png\" class=\"avatar\"></img>");
        	$('#profile').append("<h2 class=\"text-center\"> " + "My info" + "</h2>");
        	$('#profile').append("<h4 class=\"text-center\"> " + "Firstname:" + " " + user.firstName + "</h4>");
        	$('#profile').append("<h4 class=\"text-center\"> " + "Last name:" + " " + user.lastName + "</h4>");
        	$('#profile').append("<h4 class=\"text-center\"> " + "Username:" + " " + user.username + "</h4>");
        	$('#profile').append("<h4 class=\"text-center\"> " + "Gender:" + " " + user.gender + "</h4>");
        	$('#profile').append("<h4 class=\"text-center\"> " + "Role:" + " " + user.role + "</h4>");
        	$('#profile').append("<input type=\"submit\" class=\"fadeIn fourth\" value=\"Edit My Info\" onclick=\"showSignUpForm()\">");
        	
        }
    });
    
}