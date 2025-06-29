
function allClear(x){
    document.getElementById("screen").value = x;
}

// BUTTON PRESSED FUNCTION
function button(btnPressed){
    let currentScreenValue = document.getElementById("screen").value;

    if (btnPressed == "0" && currentScreenValue == "0"){
        document.getElementById("screen").value = "0";
    }
    else if (btnPressed !== "0" && currentScreenValue == "0"){
        document.getElementById("screen").value = btnPressed;
    }
    else{
        document.getElementById("screen").value = currentScreenValue + btnPressed;
    }
}

let holdValue;
let operaror;
function Op(opPressed){
    let currentScreenValue = document.getElementById("screen").value;

    holdValue = parseInt(currentScreenValue);
    operaror = opPressed;

    document.getElementById("screen").value = 0;
}

function equalOp(equal){
    let hold2 = parseInt(document.getElementById("screen").value);
    let uns;
    if(holdValue !== 0 || holdValue !== "0"){
        if(operaror == "*"){
            uns = holdValue * hold2;
        }
        else if(operaror == "/"){
            uns = holdValue / hold2;
        }
        else if(operaror == "-"){
            uns = holdValue - hold2;
        }
        else if(operaror == "+"){
            uns = holdValue + hold2;
        }
    document.getElementById("screen").value = uns;
    }
    else{
        document.getElementById("screen").value = 0;
    }

}