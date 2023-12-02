function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
  
    const now = new Date();
    const eventDate = new Date("2023-12-30"); // Cambia esta fecha al evento deseado
    const currentTime = now.getTime();
    const eventTime = eventDate.getTime();
  
    let remainingTime = eventTime - currentTime;
  
    // Calculando días, horas, minutos y segundos
    let seconds = Math.floor(remainingTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
  
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
  
    // Mostrar los valores
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
  
    // Actualizar cada segundo
    setTimeout(updateCountdown, 1000);
  }
  
  // Iniciar el contador
  updateCountdown();

  document.addEventListener('DOMContentLoaded', (event) => {
    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (!entrada.isIntersecting) {
                return;
            }
            entrada.target.classList.add('visible');
            observador.unobserve(entrada.target);
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    // Observar todos los elementos con la clase 'oculto'
    document.querySelectorAll('.oculto').forEach((elemento) => {
        observador.observe(elemento);
    });
});

  