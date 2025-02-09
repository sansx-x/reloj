(function() {
    var actualizarHora = function() {
        // Obtendremos los datos del tiempo
        var fecha = new Date();
        var horas = fecha.getHours();
        var ampm;
        var minutos = fecha.getMinutes();
        var segundos = fecha.getSeconds();
        var diaSemana = fecha.getDay();
        var dia = fecha.getDate();
        var mes = fecha.getMonth();
        var anno = fecha.getFullYear();

        // Obtenemos algunos de los elementos del HTML
        var pHoras = document.getElementById('horas');
        var pAMPM = document.getElementById('ampm');
        var pMinutos = document.getElementById('minutos');
        var pSegundos = document.getElementById('segundos');
        var pDiaSemana = document.getElementById('diaSemana');
        var pDia = document.getElementById('diaMes');
        var pMes = document.getElementById('mes');
        var pAnno = document.getElementById('anno');

        // Definimos los días de la semana y los meses
        var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        // Convertimos el formato de 24 horas a 12 horas
        if (horas >= 12) {
            horas = horas - 12;
            ampm = 'PM';
        } else {
            ampm = 'AM';
        }
        if (horas == 0) {
            horas = 12;
        }

        // Añadimos un cero a los minutos y segundos si son menores de 10
        if (minutos < 10) {
            minutos = '0' + minutos;
        }
        if (segundos < 10) {
            segundos = '0' + segundos;
        }

        // Actualizamos los elementos del HTML con los nuevos valores
        pHoras.textContent = horas;
        pAMPM.textContent = ampm;
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
        pDiaSemana.textContent = semana[diaSemana];
        pDia.textContent = dia;
        pMes.textContent = meses[mes];
        pAnno.textContent = anno;
    };

    // Actualizamos la hora cada segundo
    actualizarHora();
    setInterval(actualizarHora, 1000);
})();
