emailjs.init("Y-1-dWk19X2JRMfAK");

document.getElementById('mi-formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    emailjs.sendForm('service_k6swg04', 'template_j10bey5', this)
        .then(() => {
            alert('¡Mensaje enviado con éxito!');
            this.reset(); 
        }, (error) => {
            alert('Hubo un error al enviar el mensaje... intentá de nuevo.');
            console.log('Error de EmailJS:', error);
        });
});