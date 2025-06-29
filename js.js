
function allClear(x){
    document.getElementById("screen").value = x;
}

// BUTTON PRESSED FUNCTION
function button(btnPressed){
    let currentScreenValue = document.getElementById("screen").value;

    if (btnPressed == 0 && currentScreenValue == 0){
        document.getElementById("screen").value = 0;
    }
    else if (btnPressed !== 0 && currentScreenValue == 0){
        document.getElementById("screen").value = btnPressed;
    }
    else{
        document.getElementById("screen").value = currentScreenValue + btnPressed;
    }
}

let holdValue = 0;
let operaror = 0;
function Op(opPressed){
    let currentScreenValue = document.getElementById("screen").value;

    holdValue = parseInt(currentScreenValue);
    operaror = opPressed;

    document.getElementById("screen").value = 0;
}

function equalOp(equal){
    let hold2 = parseInt(document.getElementById("screen").value);
    let uns = 0;
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

    if(uns == NaN || uns == undefined){
        uns = 0;
    }

    document.getElementById("screen").value = uns;
    hold2 = 0;
    holdValue=0;
}