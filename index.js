document.querySelector(".bobby").onclick = temperature;
var Re=document.querySelector(".Reset");
function temperature() {
    var kel = document.getElementById("kel").value;
    var cel = document.getElementById("Celi").value;
    var far = document.getElementById("far").value;

    if (cel != "") {
        var Fahrenheit = (cel * 1.8) + 32;
        var Kelvin = parseFloat(cel) + 273.15;
        document.getElementById('far').value = parseFloat(Fahrenheit).toFixed(1);
        document.getElementById('kel').value = parseFloat(Kelvin).toFixed(0);

    } else if (far != "") {
        var Celcius = (far - 32) * (5 / 9);
        var KelvinValue = (far - 32) / 1.8 + 273.15;
        document.getElementById('Celi').value = parseFloat(Celcius).toFixed(1);
        document.getElementById('kel').value = parseFloat(KelvinValue).toFixed(1);
    } else if (kel != "") {
        var CelciusValue = kel - 273;
        var FahrenheitValue = 1.8 * (kel - 273) + 32;
        document.getElementById('far').value = parseFloat(FahrenheitValue).toFixed(1);
        document.getElementById('Celi').value = parseFloat(CelciusValue).toFixed(1);
    }
}
Re.addEventListener("click",function() {
    document.getElementById("kel").value=" ";
    document.getElementById("Celi").value=" ";
    document.getElementById("far").value=" ";
})
