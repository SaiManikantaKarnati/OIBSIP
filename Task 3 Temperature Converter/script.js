var celsius = document.querySelector("#celsius input");
var fahrenheit = document.querySelector("#fahrenheit input");
var kelvin = document.querySelector("#kelvin input");

celsius.oninput = function() {
  var f = (parseFloat(celsius.value) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(f.toFixed(2));

  var k = (parseFloat(celsius.value) + 273.15);
  kelvin.value = parseFloat(k.toFixed(2));
}

fahrenheit.oninput = function () {
  var c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  celsius.value = parseFloat(c.toFixed(2));

  var k = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273.15;
  kelvin.value = parseFloat(k.toFixed(2));
}

kelvin.oninput = function () {
  var f = (parseFloat(kelvin.value) - 273.15) * 9 / 5 + 32;
  fahrenheit.value = parseFloat(f.toFixed(2));

  var c = (parseFloat(kelvin.value) - 273.15);
  celsius.value = parseFloat(c.toFixed(2));
}