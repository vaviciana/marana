const servicios = {
    1: {
        imagen: 'recursos/evaluacion.jpg',
        titulo: 'Problema 1',
        descripcion: 'Descripcion_1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero. Ullam possimus reiciendis similique vero, eveniet dignissimos delectus dicta cumque!',
        lista: ['Item 1.1', 'Item 1.2','Item 1.3', 'Item 1.4'],
        Pregunta1: 'Lorem ipsum dolor sit',
        Respuesta1:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
        Pregunta2: 'Lorem ipsum dolor sit',
        Respuesta2:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
        Pregunta3: 'Lorem ipsum dolor sit',
        Respuesta3:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
        Pregunta4: 'Lorem ipsum dolor sit',
        Respuesta4:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
        Pregunta5: 'Lorem ipsum dolor sit',
        Respuesta5:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
    },
    2: {
        imagen: 'recursos/evaluacion.jpg',
        titulo: 'Problema 2',
        descripcion: 'Descripcion_2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero. Ullam possimus reiciendis similique vero, eveniet dignissimos delectus dicta cumque!',
        lista: ['Item 1.1', 'Item 1.2','Item 1.3', 'Item 1.4'],
        Pregunta1: 'Lorem ipsum dolor sit',
        Respuesta1:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
        Pregunta2: 'Lorem ipsum dolor sit',
        Respuesta2:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
        Pregunta3: 'Lorem ipsum dolor sit',
        Respuesta3:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
        Pregunta4: 'Lorem ipsum dolor sit',
        Respuesta4:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
        Pregunta5: 'Lorem ipsum dolor sit',
        Respuesta5:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
    },
    3: {
        imagen: 'recursos/evaluacion.jpg',
        titulo: 'Problema 3',
        descripcion: 'Descripcion_3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero. Ullam possimus reiciendis similique vero, eveniet dignissimos delectus dicta cumque!',
        lista: ['Item 1.1', 'Item 1.2','Item 1.3', 'Item 1.4'],
        Pregunta1: 'Lorem ipsum dolor sit',
        Respuesta1:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
        Pregunta2: 'Lorem ipsum dolor sit',
        Respuesta2:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
        Pregunta3: 'Lorem ipsum dolor sit',
        Respuesta3:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
        Pregunta4: 'Lorem ipsum dolor sit',
        Respuesta4:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
        Pregunta5: 'Lorem ipsum dolor sit',
        Respuesta5:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
    },
    4: {
        imagen: 'recursos/evaluacion.jpg',
        titulo: 'Problema 4',
        descripcion: 'Descripcion_4: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero. Ullam possimus reiciendis similique vero, eveniet dignissimos delectus dicta cumque!',
        lista: ['Item 1.1', 'Item 1.2','Item 1.3', 'Item 1.4'],
        Pregunta1: 'Lorem ipsum dolor sit',
        Respuesta1:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
        Pregunta2: 'Lorem ipsum dolor sit',
        Respuesta2:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
        Pregunta3: 'Lorem ipsum dolor sit',
        Respuesta3:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
        Pregunta4: 'Lorem ipsum dolor sit',
        Respuesta4:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
        Pregunta5: 'Lorem ipsum dolor sit',
        Respuesta5:'amet consectetur adipisicing elit. Incidunt ipsa omnis tenetur, maiores alias beatae quam dolor est harum vero.',
    }
};

function cambiarContenido(servicioADetalle) {
    const data = servicios[servicioADetalle];
    const contenedor = document.querySelector('.servicios-detalle');

    // Paso 1: fade out
    contenedor.classList.remove('fade-in');
    contenedor.classList.add('fade-out');

    // Paso 2: Esperar que termine la animación antes de cambiar el contenido
    setTimeout(() => {
      // Cambiar contenido
        document.getElementById('imagen_serviciosDetalle').src = data.imagen;
        document.getElementById('titulo_serviciosDetalle').textContent = data.titulo;
        document.getElementById('descrpicion_serviciosDetalle').textContent = data.descripcion;
    
        document.getElementById('lista_serviciosDetalle').innerHTML = data.lista.map(item => `<li>${item}</li>`).join('');
        
        document.getElementById('Pregunta1').textContent = data.Pregunta1;
        document.getElementById('Respuesta1').textContent = data.Respuesta1;

        document.getElementById('Pregunta2').textContent = data.Pregunta2;
        document.getElementById('Respuesta2').textContent = data.Respuesta2;

        document.getElementById('Pregunta3').textContent = data.Pregunta3;
        document.getElementById('Respuesta3').textContent = data.Respuesta3;

        document.getElementById('Pregunta4').textContent = data.Pregunta4;
        document.getElementById('Respuesta4').textContent = data.Respuesta4;
        
        document.getElementById('Pregunta5').textContent = data.Pregunta5;
        document.getElementById('Respuesta5').textContent = data.Respuesta5;
    
        // Paso 3: fade in
        contenedor.classList.remove('fade-out');
        contenedor.classList.add('fade-in');

        // Scroll suave hacia el contenedor
        contenedor.scrollIntoView({ behavior: 'smooth' });
    }
)};

const botones = document.querySelectorAll('.card-body .boton');


document.getElementById('btn-1').addEventListener('click', () => cambiarContenido(1));
document.getElementById('btn-2').addEventListener('click', () => cambiarContenido(2));
document.getElementById('btn-3').addEventListener('click', () => cambiarContenido(3));
document.getElementById('btn-4').addEventListener('click', () => cambiarContenido(4));


