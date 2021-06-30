let userName = document.getElementById("name");
let pass = document.getElementById("password");
let email = document.getElementById("email");
let checkBox = document.getElementById("box");


let error = document.getElementById("errorId");
let errorPass = document.getElementById("errorPassword");
let errorPass1 = document.getElementById("errorPassword1");
let errorMail = document.getElementById("errorMail");
let errorMail1 = document.getElementById("errorMail1");
let boxError = document.getElementById("boxerror");




function formValidation() {
    var kontrol = true;
    var x=document.form1.email.value;
    var atposition=x.indexOf("@"); 
    if (userName.value == "") {
        error.style.display="block";
        kontrol = false;

    }

    if (pass.value == "") {
        errorPass.style.display="block";
        kontrol = false;


    }
    
     if (pass.value.length < 8 && pass.value.length > 0) {
        errorPass1.style.display="block";
        kontrol = false;
        

    }

    if (email.value == "") {
        errorMail.style.display="block";
        kontrol = false;


    }

    if (atposition<1 && email.value != "") {
        errorMail1.style.display="block";
        kontrol = false;

        

    }

    if (checkBox.checked == false) {
        boxError.style.display="block";
        kontrol = false;

        

    }

    return kontrol;

    
}