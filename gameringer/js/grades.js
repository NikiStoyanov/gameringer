let counter = 5;


document.getElementById("tab").innerHTML = Array(10).fill('\xa0').join('');
document.getElementById("tab1").innerHTML = Array(10).fill('\xa0').join('');

function geeks() {
    document.getElementById(
        "boxAnswers").style.visibility = "visible";

    let firstelement = document.getElementById("first").checked;
    let secondelement = document.getElementById("second").checked;
    let thirdelement = document.getElementById("third").checked;
    let forthelement = document.getElementById("forth").checked;
    let fifthelement = document.getElementById("fifth").checked;



    if (!firstelement) {
        document.getElementById(
            "code").style.visibility = "visible";
        counter--;
    }
    if (!secondelement) {
        document.getElementById(
            "brackets").style.visibility = "visible";
        counter--;
    }
    if (!thirdelement) {
        document.getElementById(
            "variable").style.visibility = "visible";
        counter--;
    }
    if (!forthelement) {
        document.getElementById(
            "orientation").style.visibility = "visible";
        counter--;
    }
    if (!fifthelement) {
        document.getElementById(
            "images").style.visibility = "visible";
        counter--;
    }

    if (counter == 5) {
        document.getElementById(
            "excellent").style.visibility = "visible";
        document.getElementById("gradeNum").innerHTML = "5";
        document.getElementById(
            "prize").style.visibility = "hidden";
    }
    if (counter == 4) {
        document.getElementById(
            "verygood").style.visibility = "visible";
        document.getElementById("gradeNum").innerHTML = "4";
    }
    if (counter == 3) {
        document.getElementById(
            "good").style.visibility = "visible";
        document.getElementById("gradeNum").innerHTML = "3";
    }
    if (counter == 2) {
        document.getElementById(
            "average").style.visibility = "visible";
        document.getElementById("gradeNum").innerHTML = "2";
    }
    if (counter == 1) {
        document.getElementById(
            "poor").style.visibility = "visible";
        document.getElementById("gradeNum").innerHTML = "1";
    }
    if (counter == 0) {
        document.getElementById("gradeNum").innerHTML = "0";
    }
}