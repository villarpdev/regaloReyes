var textoObtenido;

        function cargarTextoDesdeArchivo() {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'sorpresa.txt', true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var textoSorpresa = document.getElementById('texto-sorpresa');
                    textoObtenido = xhr.responseText;
                    textoObtenido = "1Ya tenemos tu regalo!!"
                    textoSorpresa.textContent = textoObtenido.substring(1);
                }
            };
            xhr.send();
        }

        function mostrarSorpresa() {
            var contenedorFondo = document.getElementById('contenedor-fondo');
            var imagenRegalo = document.getElementById('imagen-regalo');
            var textoSorpresa = document.getElementById('texto-sorpresa');

            // Cargar el texto desde el archivo antes de la animación
            cargarTextoDesdeArchivo();

            // Añadir la clase de animación de shake al regalo
            imagenRegalo.classList.add('regalo-shake');

            // Esperar a que termine la animación de shake antes de iniciar la animación de ampliación
            setTimeout(function () {
                // Añadir la clase de animación de ampliación al regalo
                imagenRegalo.classList.add('regalo-ampliado');

                // Ocultar la imagen y mostrar el texto después de la animación de ampliación
                setTimeout(function () {
                    imagenRegalo.style.display = 'none';
                    textoSorpresa.style.display = 'block';
                    if(textoObtenido.charAt(0) == "1"){
                        contenedorFondo.style.background = 'linear-gradient(125deg, #b0e316 0, #90de18 16.67%, #65d414 33.33%, #0dc50d 50%, #00b510 66.67%, #00aa1f 83.33%, #00a230 100%)';
                    }else{
                        contenedorFondo.style.background = 'linear-gradient(135deg, #ff7812 0, #ff6513 16.67%, #ff4e12 33.33%, #f82d10 50%, #ee0010 66.67%, #e50014 83.33%, #de001a 100%)';
                    }
                    // Cambiar el fondo del contenedor a otro gradiente o imagen si lo prefieres
                }, 1000); // Ajusta el tiempo según la duración de la animación de ampliación
            }, 250); // Ajusta el tiempo según la duración de la animación de shake
        }
