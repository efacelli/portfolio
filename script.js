document.addEventListener('DOMContentLoaded', function() {
    const translateButton = document.getElementById('translate-button');
    let isEnglish = false;

    const translations = {
        'es': {
            'nav-inicio': 'Inicio',
            'nav-sobre-mi': 'Sobre Mí',
            'nav-habilidades': 'Habilidades',
            'nav-proyectos': 'Proyectos',
            'nav-contacto': 'Contacto',
            'header-title': 'Desarrollador Frontend',
            'header-subtitle': '¡Hola! Soy un desarrollador frontend de Santiago del Estero, Argentina.',
            'sobre-mi-title': 'Sobre Mí',
            'sobre-mi-content': 'Tengo 20 años y soy apasionado por el desarrollo web. Me especializo en crear interfaces atractivas y funcionales y tengo <b>conocimientos avanzados sobre inglés</b>. Empecé a estudiar Programación en 2022 en Teclab, gracias a eso tengo conocimientos básicos sobre <b>Python</b> y <b>C++</b>, estudié 6 meses allí y me cambié a Coderhouse en 2023, donde tengo certificados de <b>Desarrollador web</b> (HTML5, CSS, Sass), <b>JavaScript</b> y en 2024 terminé de estudiar <b>React JS</b> en la UTN.',
            'habilidades-title': 'Mis Habilidades',
            'proyectos-title': 'Mis Proyectos',
            'proyecto-1-title': 'WhatsApp Propio',
            'proyecto-1-desc': 'Un WhatsApp funcional desarrollado con React JS.',
            'proyecto-2-title': 'E-commerce',
            'proyecto-2-desc': 'Tienda en línea desarrollada con JavaScript.',
            'btn-ver-proyecto': 'Ver Proyecto',
            'btn-ver-codigo': 'Ver Código',
            'contacto-title': 'Contacto'
        },
        'en': {
            'nav-inicio': 'Home',
            'nav-sobre-mi': 'About Me',
            'nav-habilidades': 'Skills',
            'nav-proyectos': 'Projects',
            'nav-contacto': 'Contact',
            'header-title': 'Frontend Developer',
            'header-subtitle': 'Hello! I\'m a frontend developer from Santiago del Estero, Argentina.',
            'sobre-mi-title': 'About Me',
            'sobre-mi-content': 'I\'m 20 years old and passionate about web development. I specialize in creating attractive and functional interfaces and have <b>advanced knowledge of English</b>. I started studying Programming in 2022 at Teclab, thanks to which I have basic knowledge of <b>Python</b> and <b>C++</b>. I studied there for 6 months and then switched to Coderhouse in 2023, where I have certificates in <b>Web Development</b> (HTML5, CSS, Sass), <b>JavaScript</b>, and in 2024 I finished studying <b>React JS</b> at UTN.',
            'habilidades-title': 'My Skills',
            'proyectos-title': 'My Projects',
            'proyecto-1-title': 'Custom WhatsApp',
            'proyecto-1-desc': 'A functional WhatsApp developed with React JS.',
            'proyecto-2-title': 'E-commerce',
            'proyecto-2-desc': 'Online store developed with JavaScript.',
            'btn-ver-proyecto': 'View Project',
            'btn-ver-codigo': 'View Code',
            'contacto-title': 'Contact'
        }
    };

    function updateLanguage(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key]; // Cambiado de textContent a innerHTML para manejar las etiquetas <b>
            }
        });
    }

    translateButton.addEventListener('click', function() {
        isEnglish = !isEnglish;
        updateLanguage(isEnglish ? 'en' : 'es');
    });
});

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // Animación del logo grande
    gsap.from(".logo-central", {
      duration: 1.5,
      opacity: 0,
      scale: 0.5,
      ease: "back.out(1.7)"
    });
  
    // Animación de los elementos de la sección de habilidades
    gsap.from("#habilidades ul li", {
      duration: 0.8,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: "power3.out"
    });
  
    // Animación de los proyectos
    gsap.from(".proyecto", {
      duration: 1,
      opacity: 0,
      y: 100,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#proyectos",
        start: "top 80%"
      }
    });
  
    // Animación del texto de inicio
    gsap.from(".texto-inicio", {
      duration: 1,
      opacity: 0,
      x: -100,
      ease: "power2.out"
    });
  
    // Animación de la foto de perfil
    gsap.from(".foto-perfil", {
      duration: 1,
      opacity: 0,
      x: 100,
      ease: "power2.out"
    });
  
  });

  gsap.registerPlugin(ScrollTrigger);