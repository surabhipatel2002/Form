function nextbutton(){
    document.getElementById("check-box").style.display = "block";
    document.getElementById("radio-box").style.display = "none";
    document.getElementById("login-box").style.display = "none";
    document.getElementById("dataslide1").style.backgroundColor = "white";
    document.getElementById("dataslide2").style.backgroundColor = "black";
    document.getElementById("dataslide3").style.backgroundColor = "white";
}

function previous(){
    document.getElementById("radio-box").style.display = "block";
    document.getElementById("check-box").style.display = "none";
    document.getElementById("login-box").style.display = "none";
    document.getElementById("dataslide2").style.backgroundColor = "white";
    document.getElementById("dataslide1").style.backgroundColor = "black";
    document.getElementById("dataslide3").style.backgroundColor = "white";
}

function submit(){
    document.getElementById("login-box").style.display = "block";
    document.getElementById("radio-box").style.display = "none";
    document.getElementById("check-box").style.display = "none";
    document.getElementById("dataslide2").style.backgroundColor = "white";
    document.getElementById("dataslide1").style.backgroundColor = "white";
    document.getElementById("dataslide3").style.backgroundColor = "black";
}

function prevrevoures(){
    document.getElementById("radio-box").style.display = "none";
    document.getElementById("check-box").style.display = "block";
    document.getElementById("login-box").style.display = "none";
    document.getElementById("dataslide3").style.backgroundColor = "white";
    document.getElementById("dataslide2").style.backgroundColor = "black";
    document.getElementById("dataslide1").style.backgroundColor = "white";

}