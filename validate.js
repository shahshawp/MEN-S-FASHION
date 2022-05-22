function init()
{
    var enquiryForm = document.getElementById("myForm");
    enquiryForm.onsubmit = mainvalidate;
    setProductSelected($_GET()["product"]);
	// onblur event
	 document.getElementById("first_name").addEventListener("blur", validate_fname);
    document.getElementById("last_name").addEventListener("blur",validate_lname); 
    document.getElementById("email").addEventListener("blur", validate_email);
    document.getElementById("street_address").addEventListener("blur", validate_street);
	document.getElementById("city").addEventListener("blur", validate_city);
	document.getElementById("state").addEventListener("blur", validate_state);
	document.getElementById("post_code").addEventListener("blur", validate_postcode);
	 document.getElementById("phone_number").addEventListener("blur", validate_subject);
	document.getElementById("product").addEventListener("blur", validate_product);

}
function setProductSelected(value) {
    document.getElementById("product").value = value;
}

function $_GET() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function highlight() {
    var first_name = document.getElementById('first_name').value;
    if (first_name == "") {
        document.getElementById('first_name').style.borderColor = "red";
        return false;
    }
    else {
        document.getElementById('first_name').style.borderColor = "green";
    }
}

window.onload = init;
function mainvalidate(){
    var errMsg = "";
    var result = true;

    var firstname = document.getElementById("first_name").value;
    var lastname = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone_number").value;
    var street = document.getElementById("street_address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var postcode = document.getElementById("post_code").value;
    var subject = document.getElementById("subject").value;
    var product = document.getElementById("product").value;
    var comment = document.getElementById("comment").value;

       
//First Name 
    if (firstname == "" || firstname == "null") {
        errMsg = errMsg + "Please Enter Your First Name\n";
        result = false
    } else if (!firstname.match(/^[a-zA-Z\s]+$/)) {
        errMsg = errMsg + "Your First Name must only contain alpha characters\n";
        result = false;
    } else if (firstname.length > 25) {
        errMsg = errMsg + "First Name must be less than 25 characters\n";
        result = false;
    }
//Last Name
    if (lastname == "" || lastname == "null") {
        errMsg = errMsg + "Please Enter Your Last Name\n";
        result = false
    } else if (!lastname.match(/^[a-zA-Z\s]+$/)) {
        errMsg = errMsg + "Your Last Name must only contain alpha characters\n";
        result = false;
    } else if (lastname.length > 25) {
        errMsg = errMsg + "Last Name must be less than 25 characters\n";
        result = false;
    }
    
//Email
   if (email == "" || email == "null") {
        errMsg = errMsg + "Please Enter Your Email\n";
        result = false
    } else if(!email.match(/\S+@\S+\.\S+/)) {
        errMsg = errMsg + "Please enter a Valid Email Address\n";
        result = false;
    } //http://emailregex.com/ for the email pattern
//Phone Number
     if (phoneNumber == "" || phoneNumber == "null") {
        errMsg = errMsg + "Please Enter Your Contact Number\n";
        result = false
    } else if (!phoneNumber.match(/^[0-9]+$/)) {
        errMsg = errMsg + "Please enter a Valid Contact Number\n";
        result = false;
    } else if (phoneNumber.length > 10) {
        errMsg = errMsg + "Your Contact Number must be less than 11 digits\n";
        result = false;
    }
//address
    if (street == "" || street == "null") {
        errMsg = errMsg + "Please Enter Your Address\n";
        result = false;
    } else if (street.length > 40) {
        errMsg = errMsg + "Your street must be less then 40 characters";
        result = false;
    }
//City 
    if (city == "" || city == "null") {
        errMsg = errMsg + "Please Enter Your City\n";
        result = false;
    } else if (city.length > 20) {
        errMsg = errMsg + "Your City/Town must be less then 20 characters\n";
        result = false;
    }
//State
     if (state == "" || state == "null") {
        errMsg = errMsg + "Please Choose Your State\n";
        result = false;
    } 
//Postcode
    if (postcode == "" || postcode == "null") {
        errMsg = errMsg + "Please Enter Your Postcode\n";
        result = false
    } else if (!postcode.match(/^[0-9]+$/)) {
        errMsg = errMsg + "Please enter a Valid Postcode\n";
        result = false;
    } else if (postcode.length > 4) {
        errMsg = errMsg + "Your Postcode must be less than 4 digits\n";
        result = false;
    }
    //Subject
    if (subject == "" || subject == "null") {
        errMsg = errMsg + "Please Enter Subject\n";
        result = false
    } else if (!subject.match(/^[a-zA-Z\s]+$/)) {
        errMsg = errMsg + "Subject must only contain alpha characters\n";
        result = false;
    } else if (subject.length > 25) {
        errMsg = errMsg + "subject must be less than 25 characters\n";
        result = false;
    }
    //product
    if (product == "" || product == "null") {
        errMsg = errMsg + "Please Choose Your product\n";
        result = false;
    } 
     //comment
     if (comment == "" || comment == "null") {
        errMsg = errMsg + "Please Enter comment\n";
        result = false
    } else if (!comment.match(/^[a-zA-Z\s]+$/)) {
        errMsg = errMsg + "comment must only contain alpha characters\n";
        result = false;
    } else if (comment.length > 25) {
        errMsg = errMsg + "comment must be less than 25 characters\n";
        result = false;
    }
    
function validate_fname() {
	// retrieve first name value and assign to variable first_name
    var first_name = document.forms["myForm"]["first_name"].value; 
    if (first_name == "") {
        document.getElementById("first_name_msg").innerHTML = "First name must be filled out";
		document.getElementById("first_name").focus();
        //Red if its 
        document.getElementById('first_name').style.borderColor = "red";
		document.getElementById("first_name_msg").style.color = "red";

    }
	// length of first name cant more than equal 25
	else if (first_name.length > 25) {
        document.getElementById("first_name_msg").innerHTML = "First name must be less than 25 chars";
		document.getElementById("first_name").focus(); 
		document.getElementById("first_name_msg").style.color = "red";

    }
	/* ^ - line start; $ - line end; */
	else if (!/^[a-zA-Z ]*$/g.test(document.myForm.first_name.value)) {
         document.getElementById("first_name_msg").innerHTML = "First Name must be letters";
		 document.getElementById("first_name").focus(); 
		 document.getElementById("first_name_msg").style.color = "red";

	}
	else{
		document.getElementById("first_name_msg").innerHTML = "";
        //Green if its correct 
        document.getElementById('first_name').style.borderColor = "green";
	}

}

function validate_lname(){
	var last_name = document.forms["myForm"]["last_name"].value; 
    if (last_name == "") {
        document.getElementById("last_name_msg").innerHTML = "Last name must be filled out";
		document.getElementById("last_name").focus();
        //Red if its 
        document.getElementById('last_name').style.borderColor = "red";
		document.getElementById("last_name_msg").style.color = "red";
        return false;
    }
	else if (last_name.length > 25) {
        document.getElementById("last_name_msg").innerHTML = "Last name must be less than 25 chars";
		document.getElementById("last_name").focus();  
		document.getElementById("last_name_msg").style.color = "red";
        return false;
    }
	/* ^ - line start; $ - line end; */
	else if (!/^[a-zA-Z ]*$/g.test(document.myForm.last_name.value)) {
         document.getElementById("last_name_msg").innerHTML = "Last Name must be letters";
		 document.getElementById("last_name").focus(); 
		 document.getElementById("last_name_msg").style.color = "red";
		 return false;
	}
	else{
		document.getElementById("last_name_msg").innerHTML = "";
        //Green if its correct - 
        document.getElementById('last_name').style.borderColor = "green";
	}
	
	return false;
}

function validate_email(){
	
	var email = document.forms["myForm"]["email"].value; 
    if (email == "") {
        document.getElementById("email_msg").innerHTML = "Email must be filled out";
		document.getElementById("email").focus();
        //Red if its 
        document.getElementById('email').style.borderColor = "red";
		document.getElementById("email_msg").style.color = "red";
        return false;
    }
	/* ^ - line start; $ - line end; */
	else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.myForm.email.value)) {
         document.getElementById("email_msg").innerHTML = "Not a valid email address(example:xxxx@xxxx.com)";
		 document.getElementById("email").focus(); 
		 document.getElementById("email_msg").style.color = "red";
		 return false;
	}
	else{
		document.getElementById("email_msg").innerHTML = "";
        //Green if its correct 
        document.getElementById('email').style.borderColor = "green";
	}
	return false;
}

function validate_street(){
	
	var street_address = document.forms["myForm"]["street_address"].value; 
    if (street_address == "") {
        document.getElementById("street_address_msg").innerHTML = "Street address must be filled out";
		document.getElementById("street_address").focus();
        //Red if its 
        document.getElementById('street_address').style.borderColor = "red";
		document.getElementById("street_address_msg").style.color = "red";
        return false;
    }
	else if (street_address.length > 40) {
        document.getElementById("street_address_msg").innerHTML = "Street address must be less than 40 chars";
		document.getElementById("street_address").focus(); 
		document.getElementById("street_address_msg").style.color = "red";
        return false;
    }
	/* ^ - line start; $ - line end; */
	else if (!/^[a-zA-Z1-9,. ]*$/g.test(document.myForm.street_address.value)) {
         document.getElementById("street_address_msg").innerHTML = "Not a valid street address";
		 document.getElementById("street_address").focus(); 
		 document.getElementById("street_address_msg").style.color = "red";
		 return false;
	}
	else{
		document.getElementById("street_address_msg").innerHTML = "";
        //Green if its correct 
        document.getElementById('street_address').style.borderColor = "green";
	}
	return false;
}

function validate_city(){
	
	var city = document.forms["myForm"]["city"].value; 
    if (city == "") {
        document.getElementById("city_msg").innerHTML = "City must be filled out";
		document.getElementById("city").focus();
        //Red if its wrong
        document.getElementById('city').style.borderColor = "red";
		document.getElementById("city_msg").style.color = "red";
        return false;
    }
	else if (city.length > 20) {
        document.getElementById("city_msg").innerHTML = "City must be less than 20 chars";
		document.getElementById("city").focus(); 
		document.getElementById("city_msg").style.color = "red";
        return false;
    }
	/* ^ - line start; $ - line end; */
	else if (!/^[a-zA-Z1-9,. ]*$/g.test(document.myForm.city.value)) {
         document.getElementById("city_msg").innerHTML = "Not a valid City";
		 document.getElementById("city").focus(); 
		 document.getElementById("city_msg").style.color = "red";
		 return false;
	}
	else{
		document.getElementById("city_msg").innerHTML = "";
        //Green if its correct
        document.getElementById('city').style.borderColor = "green";
	}
	return false;
}

function validate_state(){
	
	var state = document.forms["myForm"]["state"].value; 
    if (state == "") {
        document.getElementById("state_msg").innerHTML = "State must be filled out";
		document.getElementById("state").focus();
        //Red if its wrong
        document.getElementById('state').style.borderColor = "red";
		document.getElementById("state_msg").style.color = "red";
        return false;
    }
	else{
		document.getElementById("state_msg").innerHTML = "";
        //Green if its correct
        document.getElementById('state').style.borderColor = "green";
	}
	return false;
}

function validate_postcode(){
	
	var post_code = document.forms["myForm"]["post_code"].value; 
    if (post_code == "") {
        document.getElementById("post_code_msg").innerHTML = "Postcode must be filled out";
		document.getElementById("post_code").focus(); 
        //Red if its 
        document.getElementById('post_code').style.borderColor = "red";
		document.getElementById("post_code_msg").style.color = "red";
        return false;
    }
	else if (post_code.length != 4) {
        document.getElementById("post_code_msg").innerHTML = "Postcode must be 5 chars";
		document.getElementById("post_code").focus(); 
		document.getElementById("post_code_msg").style.color = "red";
        return false;
    }
	/* ^ - line start; $ - line end; */
	else if (!/^\S[1-9]\S*$/g.test(document.myForm.post_code.value)) {
         document.getElementById("post_code_msg").innerHTML = "Not a valid Postcode";
		 document.getElementById("post_code").focus(); 
		 document.getElementById("post_code_msg").style.color = "red";
		 return false;
	}
	else{
		document.getElementById("post_code_msg").innerHTML = "";
        //Green if its correct
        document.getElementById('post_code').style.borderColor = "green";
	}
	return false;
}

function validate_subject(){
	
	var subject = document.forms["myForm"]["subject"].value; 
    if (subject == "") {
        document.getElementById("subject_msg").innerHTML = "subject must be filled out";
		document.getElementById("subject").focus();
        //Red if its wrong
        document.getElementById('subject').style.borderColor = "red";
		document.getElementById("subject_msg").style.color = "red";
        return false;
    }
	else if (subject.length > 25) {
        document.getElementById("subject_msg").innerHTML = "subject must be less than 20 chars";
		document.getElementById("subject").focus(); 
		document.getElementById("subject_msg").style.color = "red";
        return false;
    }
	/* ^ - line start; $ - line end; */
	else if (!/^[a-zA-Z1-9,. ]*$/g.test(document.myForm.subject.value)) {
         document.getElementById("subject_msg").innerHTML = "Not a valid subject";
		 document.getElementById("subject").focus(); 
		 document.getElementById("subject_msg").style.color = "red";
		 return false;
	}
	else{
		document.getElementById("subject_msg").innerHTML = "";
        //Green if its correct
        document.getElementById('subject').style.borderColor = "green";
	}
	return false;
}

function validate_product(){
	
	var product = document.forms["myForm"]["product"].value; 
    if (product == "") {
        document.getElementById("product_msg").innerHTML = "Product must be filled out";
		document.getElementById("product").focus(); 
        //Red if its 
        document.getElementById('product').style.borderColor = "red";
		document.getElementById("product_msg").style.color = "red";
        return false;
    }
	else{
		document.getElementById("product_msg").innerHTML = "";
        //Green if its correct
        document.getElementById('product').style.borderColor = "green";
	}
	return false;
}

}
