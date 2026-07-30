function convertTemperature() {

    let value = document.getElementById("temperatureValue").value.trim();
    let unit = document.getElementById("inputUnit").value;

    let msg = document.getElementById("messageBox");

    let c = document.getElementById("showCelsius");
    let f = document.getElementById("showFahrenheit");
    let k = document.getElementById("showKelvin");

    msg.innerHTML = "";

    if (value === "") {
        msg.innerHTML = "Please enter a temperature.";
        clearOutput();
        return;
    }

    if (isNaN(value)) {
        msg.innerHTML = "Enter numbers only.";
        clearOutput();
        return;
    }

    value = parseFloat(value);

    let cel, fah, kel;

    if (unit === "celsius") {

        if (value < -273.15) {
            msg.innerHTML = "Temperature is below absolute zero.";
            clearOutput();
            return;
        }

        cel = value;
        fah = (cel * 9 / 5) + 32;
        kel = cel + 273.15;

    }

    else if (unit === "fahrenheit") {

        if (value < -459.67) {
            msg.innerHTML = "Temperature is below absolute zero.";
            clearOutput();
            return;
        }

        fah = value;
        cel = (fah - 32) * 5 / 9;
        kel = cel + 273.15;

    }

    else {

        if (value < 0) {
            msg.innerHTML = "Temperature is below absolute zero.";
            clearOutput();
            return;
        }

        kel = value;
        cel = kel - 273.15;
        fah = (cel * 9 / 5) + 32;

    }

    c.innerHTML = cel.toFixed(2) + " °C";
    f.innerHTML = fah.toFixed(2) + " °F";
    k.innerHTML = kel.toFixed(2) + " K";

}

function clearValues() {

    document.getElementById("temperatureValue").value = "";
    document.getElementById("inputUnit").selectedIndex = 0;

    document.getElementById("messageBox").innerHTML = "";

    clearOutput();

}

function clearOutput() {

    document.getElementById("showCelsius").innerHTML = "--";
    document.getElementById("showFahrenheit").innerHTML = "--";
    document.getElementById("showKelvin").innerHTML = "--";

}