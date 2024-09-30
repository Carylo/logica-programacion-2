document.getElementById('botonConversor').addEventListener('click', function() {
    let celsius = document.getElementById('gradosCelsius').value;
    let gradosCelsius = Number(celsius);

    let fahrenheit = (gradosCelsius * 9/5) + 32;
    let kelvin = gradosCelsius + 273.15;

    if (isNaN(gradosCelsius)) {
        alert("ERROR. Debe ingresar solo numeros.");
        return; 
    }

    document.getElementById('resultado').innerHTML = `
        <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>
        <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
    `;
});

document.getElementById('botonBorrar').addEventListener('click', function() {
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('gradosCelsius').value = ''; 
});