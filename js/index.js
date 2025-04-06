const procesos = {
    1: {
        numero: '1',
        imagen: 'recursos/evaluacion.jpg',
        titulo: 'Entendiendo el problema',
        descripcion: 'Descripcion_1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero. Ullam possimus reiciendis similique vero, eveniet dignissimos delectus dicta cumque!',
        listaIzquierda: ['Item 1.1', 'Item 1.2'],
        listaDerecha: ['Item 1.3', 'Item 1.4']
    },
    2: {
        numero:'2',
        imagen: 'recursos/diagnostico.jpg',
        titulo: 'Explicando el problema',
        descripcion: 'Descripcion_2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero. Ullam possimus reiciendis similique vero, eveniet dignissimos delectus dicta cumque!',
        listaIzquierda: ['Item 2.1', 'Item 2.2'],
        listaDerecha: ['Item 2.3', 'Item 2.4']
    },
    3: {
        numero:'3',
        imagen: 'recursos/intervencion.jpg',
        titulo: 'Manos a la obra',
        descripcion: 'Descripcion_3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero. Ullam possimus reiciendis similique vero, eveniet dignissimos delectus dicta cumque!',
        listaIzquierda: ['Item 3.1', 'Item 3.2'],
        listaDerecha: ['Item 3.3', 'Item 3.4']
    }
};

function cambiarContenido(paso) {
    const data = procesos[paso];
    const contenedor = document.querySelector('.contenedor_proceso');

    // Paso 1: fade out
    contenedor.classList.remove('fade-in');
    contenedor.classList.add('fade-out');

    // Paso 2: Esperar que termine la animación antes de cambiar el contenido
    setTimeout(() => {
      // Cambiar contenido
        document.getElementById('numero-proceso').textContent = data.numero;
        document.getElementById('img-proceso').src = data.imagen;
        document.getElementById('titulo-proceso').textContent = data.titulo;
        document.getElementById('descripcion-proceso').textContent = data.descripcion;
    
        document.getElementById('lista-izquierda').innerHTML = data.listaIzquierda.map(item => `<li>${item}</li>`).join('');
        document.getElementById('lista-derecha').innerHTML = data.listaDerecha.map(item => `<li>${item}</li>`).join('');
    
        // Paso 3: fade in
        contenedor.classList.remove('fade-out');
        contenedor.classList.add('fade-in');
        }, 500); // ⏱ este delay debe coincidir con el tiempo de fade-out
}


const botones = document.querySelectorAll('.proceso_mandos .boton-circulo')
;

botones.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        // Quitar la clase de todos
        botones.forEach(b => b.classList.remove('activo'));
        
        // Agregarla solo al actual
        boton.classList.add('activo');

        // Llamar a la función de contenido
        cambiarContenido(index + 1);
    });
});

document.getElementById('btn-1').addEventListener('click', () => cambiarContenido(1));
document.getElementById('btn-2').addEventListener('click', () => cambiarContenido(2));
document.getElementById('btn-3').addEventListener('click', () => cambiarContenido(3));


