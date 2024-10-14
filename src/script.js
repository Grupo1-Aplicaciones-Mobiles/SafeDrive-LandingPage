document.addEventListener('DOMContentLoaded', function() {
    console.log("Página cargada correctamente");

    // Selecciona la sección hero y añade la clase de animación
    const heroSection = document.querySelector('.hero-section');
    heroSection.classList.add('slide-down');

    const overlay = document.querySelector('.overlay');
    // Esperar 1 segundo antes de comenzar la transición de desvanecimiento
    setTimeout(() => {
        overlay.style.opacity = '0'; // Cambia la opacidad a 0
    }, 1000);

    // Eliminar el overlay del DOM después de la animación
    overlay.addEventListener('transitionend', () => {
        overlay.remove(); // Elimina la superposición
    });


});

// Elemento para cambiar el idioma
const languageToggle = document.getElementById('language-toggle');

// Traducciones en inglés
const translations = {
  es: {
    inicio: "Inicio",
    nosotros: "Nosotros",
    servicios: "Servicios",
    beneficios: "Beneficios",
    contacto: "Contacto",
    heroTitle: "La seguridad de tu vehículo en la palma de tu mano",
    heroSubtitle: "Controla y protege tu vehículo al instante",
    startButton: "Comencemos",
    aboutTitle: "Sobre",
    aboutHighlight: "Nosotros",
    aboutText: "¡Tu auto ya tiene un nuevo mejor amigo! Somos una app peruana que te ayuda a cuidar de tu carro como si fuera de la familia. Olvídate de los sustos y disfruta de la carretera con nuestros tips y herramientas.",
    aboutTextHighlight: "¡Porque tu auto también merece lo mejor!",
    servicesTitle: "Nuestros",
    servicesHighlight: "Servicios",
    serviceOne: "Ubicación en tiempo real",
    serviceTextOne: "Con nuestra aplicación, podrás ver la ubicación exacta de tu vehículo en todo momento. Ya no te preocupes por dónde lo dejaste o si está seguro.",
    serviceTwo: "Notificaciones en tiempo real",
    serviceTextTwo: "¡No esperes a que algo malo suceda! Nuestra aplicación te envía alertas automáticas al instante cuando detecta actividad sospechosa, para que puedas actuar a tiempo.",
    serviceThree: "Distancia precisa",
    serviceTextThree: "¿Te preguntas cuán lejos estás de tu vehículo? Nuestro rastreador te proporciona la distancia exacta para que siempre estés informado.",
    serviceFour: "Alertas de acciones sospechosas",
    serviceTextFour: "Activa la protección avanzada. Recibe notificaciones instantáneas si tu vehículo experimenta movimientos sospechosos o es objeto de posibles amenazas.",
    benefitTitle: "Beneficios",
    benefitOne: "Protección continua",
    benefitTextOne: "Tu vehículo estará monitoreado 24/7, estés donde estés.",
    benefitTwo: "Seguridad personalizada",
    benefitTextTwo: "Define alertas personalizadas para detectar movimientos sospechosos y recibe notificaciones en función de tus preferencias.",
    benefitThree: "Sencillo de usar",
    benefitTextThree: "Con una interfaz intuitiva y fácil de navegar, podrás controlar el estado de tu vehículo con solo un par de clics.",
    contactTitle: "¿Tienes preguntas?",
    contactLink: "Contáctanos",
    footerTitle: "Explora",
    terms: "Términos de servicio",
    general: "Términos y condiciones generales de venta",
    data: "Protección de datos",
    cookies: "Cookies",
    legal: "Avisos legales"
  },
  en: {
    inicio: "Home",
    nosotros: "About Us",
    servicios: "Services",
    beneficios: "Benefits",
    contacto: "Contact",
    heroTitle: "Vehicle safety in the palm of your hand",
    heroSubtitle: "Control and protect your vehicle instantly",
    startButton: "Get Started",
    aboutTitle: "About",
    aboutHighlight: "Us",
    aboutText: "Your car now has a new best friend! We are a Peruvian app that helps you take care of your car as if it were family. Forget about scares and enjoy the road with our tips and tools.",
    aboutTextHighlight: "Because your car deserves the best!",
    servicesTitle: "Our",
    servicesHighlight: "Services",
    serviceOne: "Real-time location",
    serviceTextOne: "With our application, you will be able to see the exact location of your vehicle at all times. No more worrying about where you left it or if it is safe.",
    serviceTwo: "Real-time notifications",
    serviceTextTwo: "Don't wait for something bad to happen! Our app sends you automatic alerts instantly when it detects suspicious activity, so you can act in time.",
    serviceThree: "Accurate distance",
    serviceTextThree: "Wondering how far you are from your vehicle? Our tracker gives you the exact distance so that you are always informed.",
    serviceFour: "Suspicious actions alerts",
    serviceTextFour: "Activate advanced protection. Receive instant notifications if your vehicle experiences suspicious movements or is subject to potential threats.",
    benefitTitle: "Benefits",
    benefitOne: "Continuous protection",
    benefitTextOne: "Your vehicle will be monitored 24/7, wherever you are.",
    benefitTwo: "Customized security",
    benefitTextTwo: "Set customized alerts to detect suspicious movements and receive notifications based on your preferences.",
    benefitThree: "Easy to use",
    benefitTextThree: "With an intuitive and easy-to-navigate interface, you can monitor the status of your vehicle with just a few clicks.",
    contactTitle: "Have questions?",
    contactLink: "Contact us",
    footerTitle: "Explore",
    terms: "Terms of service",
    general: "General terms and conditions of sale",
    data: "Data protection",
    cookies: "Cookies",
    legal: "Legal notices"
  }
};

let currentLanguage = 'es';

// Función para cambiar el idioma
languageToggle.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
  translatePage();
  languageToggle.textContent = currentLanguage === 'es' ? 'English' : 'Español';
});

// Función para aplicar las traducciones
function translatePage() {
  document.querySelector('[href="#inicio"]').textContent = translations[currentLanguage].inicio;
  document.querySelector('[href="#nosotros"]').textContent = translations[currentLanguage].nosotros;
  document.querySelector('[href="#servicios"]').textContent = translations[currentLanguage].servicios;
  document.querySelector('[href="#beneficios"]').textContent = translations[currentLanguage].beneficios;
  document.querySelector('[href="#contacto"]').textContent = translations[currentLanguage].contacto;
  document.querySelector('.neon-text').textContent = translations[currentLanguage].heroTitle;
  document.querySelector('.subtext').textContent = translations[currentLanguage].heroSubtitle;
  document.querySelector('.btn').textContent = translations[currentLanguage].startButton;
  document.querySelector('.sobre-white').textContent = translations[currentLanguage].aboutTitle;
  document.querySelector('.sobre-blue').textContent = translations[currentLanguage].aboutHighlight;
  document.querySelector('.about-text').textContent = translations[currentLanguage].aboutText;
  document.querySelector('.about-highlight').textContent = translations[currentLanguage].aboutTextHighlight;
  document.querySelector('.services-black').textContent = translations[currentLanguage].servicesTitle;
  document.querySelector('.services-blue').textContent = translations[currentLanguage].servicesHighlight;
  document.querySelector('.ti1').textContent = translations[currentLanguage].serviceOne;
  document.querySelector('.te1').textContent = translations[currentLanguage].serviceTextOne;
  document.querySelector('.ti2').textContent = translations[currentLanguage].serviceTwo;
  document.querySelector('.te2').textContent = translations[currentLanguage].serviceTextTwo;
  document.querySelector('.ti3').textContent = translations[currentLanguage].serviceThree;
  document.querySelector('.te3').textContent = translations[currentLanguage].serviceTextThree;
  document.querySelector('.ti4').textContent = translations[currentLanguage].serviceFour;
  document.querySelector('.te4').textContent = translations[currentLanguage].serviceTextFour;
  document.querySelector('.benefits-title').textContent = translations[currentLanguage].benefitTitle;
  document.querySelector('.b1').textContent = translations[currentLanguage].benefitOne;
  document.querySelector('.bt1').textContent = translations[currentLanguage].benefitTextOne;
  document.querySelector('.b2').textContent = translations[currentLanguage].benefitTwo;
  document.querySelector('.bt2').textContent = translations[currentLanguage].benefitTextTwo;
  document.querySelector('.b3').textContent = translations[currentLanguage].benefitThree;
  document.querySelector('.bt3').textContent = translations[currentLanguage].benefitTextThree;
  document.querySelector('.contact-title').textContent = translations[currentLanguage].contactTitle;
  document.querySelector('.contact-link').textContent = translations[currentLanguage].contactLink;
  document.querySelector('.footer-title').textContent = translations[currentLanguage].footerTitle;
  document.querySelector('[href="#terms"]').textContent = translations[currentLanguage].terms;
  document.querySelector('[href="#general"]').textContent = translations[currentLanguage].general;
  document.querySelector('[href="#data"]').textContent = translations[currentLanguage].data;
  document.querySelector('[href="#cookies"]').textContent = translations[currentLanguage].cookies;
  document.querySelector('[href="#legal"]').textContent = translations[currentLanguage].legal;
}

  function toggleInfo(id) {
    var item = document.getElementById('info' + id).previousElementSibling;

    // Si ya está activa, la cerramos
    if (item.classList.contains('active')) {
        item.classList.remove('active');
    } else {
        // Cerramos cualquier otra tira activa
        var activeItems = document.querySelectorAll('.benefit-item.active');
        activeItems.forEach(function (activeItem) {
            activeItem.classList.remove('active');
        });

        // Activamos la tira seleccionada
        item.classList.add('active');
    }
}



