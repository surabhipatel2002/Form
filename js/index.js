function nextbutton() {
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var Middle = document.getElementById("Middle").value;
    if (first == "" || last == "" || Middle == "") {
        onkeyupFunction();
    } else {
        document.getElementById("check-box").style.display = "block";
        document.getElementById("radio-box").style.display = "none";
        document.getElementById("login-box").style.display = "none";
        document.getElementById("dataslide1").style.backgroundColor = "white";
        document.getElementById("dataslide2").style.backgroundColor = "black";
        document.getElementById("dataslide3").style.backgroundColor = "white";
    }
}

function previous() {
    document.getElementById("radio-box").style.display = "block";
    document.getElementById("check-box").style.display = "none";
    document.getElementById("login-box").style.display = "none";
    document.getElementById("dataslide2").style.backgroundColor = "white";
    document.getElementById("dataslide1").style.backgroundColor = "black";
    document.getElementById("dataslide3").style.backgroundColor = "white";

}

function submit() {
    var phone = document.getElementById("phone").value;
    var workphone = document.getElementById("workphone").value;
    if (phone == "" || workphone == "") {
        onkeycheckbox();
    }else {
        document.getElementById("login-box").style.display = "block";
        document.getElementById("radio-box").style.display = "none";
        document.getElementById("check-box").style.display = "none";
        document.getElementById("dataslide2").style.backgroundColor = "white";
        document.getElementById("dataslide1").style.backgroundColor = "white";
        document.getElementById("dataslide3").style.backgroundColor = "black";
    }
}

function prevrevoures() {
    document.getElementById("radio-box").style.display = "none";
    document.getElementById("check-box").style.display = "block";
    document.getElementById("login-box").style.display = "none";
    document.getElementById("dataslide3").style.backgroundColor = "white";
    document.getElementById("dataslide2").style.backgroundColor = "black";
    document.getElementById("dataslide1").style.backgroundColor = "white";
}

function finalSubmit() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var Conform = document.getElementById("Conform").value;
    if (username == "" || password == "" || Conform == "") {
        onkeyloginbox();
    }else {
        alert("This form has been successfully submitted.")
    }
}

function dataslide0() {
    console.log(dataslide1)
    previous();
}

function dataslide1() {
    console.log(dataslide2)
    nextbutton();
}

function dataslide2() {
    submit();
}

function onkeyupFunction() {
    var first = document.getElementById("first");
    var last = document.getElementById("last");
    var Middle = document.getElementById("Middle");

    if (first.value == "") {
        document.getElementById("first_name").innerHTML = "This field is required";
        first.classList.add("red_border");
    } else {
        document.getElementById("first_name").innerHTML = "";
        first.classList.remove("red_border");
    }
    if (last.value == "") {
        document.getElementById("last_name").innerHTML = "This field is required";
        last.classList.add("red_border");
    }else {
        document.getElementById("last_name").innerHTML = "";
        last.classList.remove("red_border");
    }
    if (Middle.value == "") {
        document.getElementById("your_email").innerHTML = "This field is required";
        Middle.classList.add("red_border");
    }else {
        document.getElementById("your_email").innerHTML = "";
        Middle.classList.remove("red_border");
    }
}

function onkeycheckbox() {
    var phone = document.getElementById("phone");
    var workphone = document.getElementById("workphone");
    if (phone.value == "") {
        document.getElementById("your_phone").innerHTML = "This field is required";
        phone.classList.add("red_border");
    }else {
        document.getElementById("your_phone").innerHTML = "";
        phone.classList.remove("red_border");
    }
    if (workphone.value == "") {
        document.getElementById("your_workphone").innerHTML = "This field is required";
        workphone.classList.add("red_border");
    }else {
        document.getElementById("your_workphone").innerHTML = "";
        workphone.classList.remove("red_border");
    }
}

function onkeyloginbox(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var Conform = document.getElementById("Conform");
    var message = document.getElementById("message");
    if (username.value == "") {
        document.getElementById("your_username").innerHTML = "This field is required";
        username.classList.add("red_border");
    }else {
        document.getElementById("your_username").innerHTML = "";
        username.classList.remove("red_border");
    }
    if (password.value == "") {
        document.getElementById("your_password").innerHTML = "This field is required";
        password.classList.add("red_border");
    }else {
        document.getElementById("your_password").innerHTML = "";
        password.classList.remove("red_border");
    }
    if (Conform.value == "") {
        document.getElementById("your_Conform").innerHTML = "This field is required";
        Conform.classList.add("red_border");
    }else {
        document.getElementById("your_Conform").innerHTML = "";
        Conform.classList.remove("red_border");
    }
}