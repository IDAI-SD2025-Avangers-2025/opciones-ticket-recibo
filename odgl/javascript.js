
var formulario = document.getElementById("calculoMinutos");

        function calcular() {

            var total = 0;
            var minutos = (formulario.minCel.value);
            total = minutos * 1; 

            var cliente = formulario.cliente.value;

            if (formulario.tel.checked) {
                total = total + 100;
            }

            if (formulario.internet.checked) {
                total = total + 200;
            }

            if (formulario.tv.checked) {
                total = total + 300;
            }

            if (formulario.select.value){
                total = total + 50;
            }

            if (formulario["campo-servicios-nube"].checked) {
                total = total + 150;
            }

            if (formulario["campo-servicios-web"].checked) {
                total = total + 250;
            }

            if (formulario.select.value == "residencial") {
                total = total + 230;
            }

            if (formulario.select.value == "PYMES") {
                total = total + 400;
            }

            if (formulario.select.value == "EMPRESAS") {
                total = total + 700;
            }

            formulario.calculo.value = total;
            alert("Cliente: " + cliente + "\nTotal a pagar: $" + total);
        }
