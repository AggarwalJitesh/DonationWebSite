
// function OpenSignUp() {
//     document.getElementById('SignInPopUp').style.display = 'block';
//     document.getElementById('whole').style.filter = 'blur(4px)';
// }

// function CloseSignUp() {
//     document.getElementById('SignInPopUp').style.display = 'none';
//     document.getElementById('whole').style.filter = 'blur(0px)';
// }


function OpenSignUp() {
    document.getElementById('sec1').style.display = 'block';
    document.getElementById('whole').style.filter = 'blur(4px)';
}

function CloseSignUp() {
    document.getElementById('sec1').style.display = 'none';
    document.getElementById('whole').style.filter = 'blur(0px)';
}

function OpenLogIn() {
    document.getElementById('logInPopUp').style.display = 'block';
    document.getElementById('whole').style.filter = 'blur(4px)';
}

function CloseLogIn() {
    document.getElementById('logInPopUp').style.display = 'none';
    document.getElementById('whole').style.filter = 'blur(0px)';
}

function OpenFloating() {
    document.getElementById('Floatingchoice').style.display = 'block';
    document.getElementById('whole').style.filter = 'blur(4px)'; 
}

function CloseFloating() {
    document.getElementById('Floatingchoice').style.display = 'none';
    document.getElementById('whole').style.filter = 'blur(0px)'; 
}

function profession(m){
    pro=document.getElementsByClassName('imgclass')[m].getAttribute("value");
    console.log(pro)
    console.log(str)
    if(str=="signup" && pro=="employee" || str=="signup" && pro=="donor")
    {
        CloseFloating();
        OpenSignUp();
    }
    else if(str=="login" && pro=="employee" || str=="login" && pro=="donor")
    {
        CloseFloating();
        OpenLogIn();
    }

}

function Choice(n){
    OpenFloating() 
    str=document.getElementsByClassName('startbutton')[n].value;

}

