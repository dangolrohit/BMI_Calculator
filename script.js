function calculateBMI() {
    var height = Number(document.getElementById("height").value);
    var weight = Number(document.getElementById("weight").value);
    if (height<=0 || weight<=0){
        alert("Invalid Weight or Height.")
        return;
    }
    else {var display = weight / (height * height);}
    document.getElementById("display").value = display.toFixed(2) + " Kg/m*m.";
  }