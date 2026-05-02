<template>
  <!-- HEADER CON CARRUSEL -->
  <header class="container mt-5">
    <div id="carouselExampleCaptions" class="carousel slide carousel-fade custom-carousel" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
      </div>

      <div class="carousel-inner rounded-4 shadow-lg">
        <div class="carousel-item active">
          <img src="/assets/img/despulpado.png" class="d-block w-100" alt="Despulpado">
          <div class="carousel-caption">
            <h5 class="fw-bold">Justicia Económica</h5>
            <p>Trabajamos para maximizar los ingresos directos de los productores, garantizando precios honestos.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/assets/img/manos&cafe.png" class="d-block w-100" alt="Manos y Café">
          <div class="carousel-caption">
            <h5 class="fw-bold">Sostenibilidad Cultural</h5>
            <p>Nos apasiona preservar la herencia cafetera, honrando el trabajo manual y artesanal.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/assets/img/herencia&cultivo.png" class="d-block w-100" alt="Herencia">
          <div class="carousel-caption">
            <h5 class="fw-bold">Trazabilidad y Transparencia</h5>
            <p>Ofrecemos una conexión real desde la familia, la finca hasta la taza.</p>
          </div>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </header>

  <!-- CONTENIDO PRINCIPAL -->
  <main class="container my-5">
    <div class="row text-center mb-5">
      <div class="col-md-6 px-4 py-4">
        <h3 class="titulo-cafe">Nuestra Razón de Ser</h3>
        <p class="text-muted">Dignificamos la labor de las familias caficultoras eliminando intermediarios.</p>
      </div>
      <div class="col-md-6 px-4 py-4">
        <h3 class="titulo-cafe">Trazabilidad del Cultivo a la Taza</h3>
        <p class="text-muted">Garantizamos transparencia total en cada grano desde la cosecha hasta el tostado.</p>
      </div>
    </div>

    <div class="row mb-5 justify-content-center">
      <div class="col-md-10 impacto-box text-center">
        <h2 class="titulo-cafe">Nuestro Impacto</h2>
        <p class="lead">Construimos un ecosistema de equidad y reconocimiento para el campo colombiano.</p>
      </div>
    </div>

    <h3 class="text-center mb-5 equipo-title">Nuestro equipo</h3>
    
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 justify-content-center">
      <div v-for="(persona, index) in equipo" :key="index" class="col">
        <div class="card h-100 border-0 card-hover">
          <!-- CONTENEDOR DE IMAGEN TIPO RETRATO -->
          <div class="img-wrapper mt-3">
             <img :src="persona.foto" class="card-img-profile" :alt="persona.nombre">
          </div>
          
          <div class="card-body d-flex flex-column text-center pt-3">
            <h5 class="card-title fw-bold m-0">{{ persona.nombre }}</h5>
            <small class="text-secondary mb-3">{{ persona.rol }}</small>
            <p class="card-text small text-muted flex-grow-1">{{ persona.descripcion }}</p>
            
            <div class="d-flex justify-content-center gap-3 mt-3 pt-3 border-top">
              <a :href="persona.linkedin" target="_blank" class="social-icon" title="LinkedIn">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a :href="persona.github" target="_blank" class="social-icon" title="GitHub">
                <i class="fa-brands fa-github"></i>
              </a>
              <a :href="persona.portfolio" target="_blank" class="social-icon" title="Portafolio">
                <i class="fa-solid fa-briefcase"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const equipo = ref([
  {
    nombre: "Maira Alejandra Pinilla",
    rol: "Full Stack & Scrum Master",
    descripcion: "Apasionada por crear experiencias digitales únicas combinando diseño y tecnología.",
    foto: "/assets/img/PerfilAle.png",
    linkedin: "https://www.linkedin.com/in/maira-alejandra-pinilla-pinilla-ingenieria-de-sistemas-desarrolladora/",
    github: "https://github.com/Malejandrapin",
    portfolio: "https://malejandrapin.github.io/Alejandra-Pinilla-Portafolio/"
  },
  {
    nombre: "Andrés Díaz Figueroa",
    rol: "Java Full Stack Junior",
    descripcion: "Apasionado por la tecnología, el desarrollo de software y la arquitectura cloud.",
    foto: "/assets/img/fotoAndres-removebg-preview.png",
    linkedin: "https://www.linkedin.com/in/andres-diaz-figueroa-tecnology-innovation-developer-cloud/",
    github: "https://github.com/andresdiazf",
    portfolio: "https://myportfolio-andres-diaz-figueroa.vercel.app/"
  },
  {
    nombre: "Marcia Baquero Ruiz",
    rol: "Junior Java Full Stack",
    descripcion: "Apasionada por el Frontend, Clean Code y aplicaciones escalables.",
    foto: "/assets/img/fotoMarcia.png",
    linkedin: "https://www.linkedin.com/in/marcia-baquero-dev-full-stack",
    github: "https://github.com/Maka322",
    portfolio: "#"
  },
  {
    nombre: "Didier Cuan Najas",
    rol: "Full Stack Developer",
    descripcion: "Analista y desarrollador apasionado por tecnología backend y frontend.",
    foto: "/assets/img/fotoDidier .png",
    linkedin: "https://www.linkedin.com/in/didier-alexis-cuan-najas-developer-full-stack/",
    github: "https://github.com/didierNajas",
    portfolio: "https://didiernajas.github.io/Basic-portafolio/"
  },
  {
    nombre: "Zully Tamayo Martinez",
    rol: "Ingeniera Informática y Desarrolladora",
    descripcion: "Apasionada por construir soluciones eficientes y lógica de backend robusta.",
    foto: "/assets/img/fotoZully.png",
    linkedin: "https://www.linkedin.com/in/zully-tamayo-martinez-softwaredeveloper",
    github: "https://github.com/zullytamayom",
    portfolio: "https://phenomenal-eclair-9360d4.netlify.app/"
  }
]);
</script>

<style scoped>
.titulo-cafe { color: #6f4e37; font-weight: 600; }

/* --- CARD PROFESIONAL --- */
.card-hover {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    border-radius: 25px;
    padding: 10px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 1px solid rgba(176, 141, 87, 0.15);
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.card-hover:hover { 
    transform: translateY(-12px); 
    box-shadow: 0 20px 30px rgba(111, 78, 55, 0.15);
    background: #ffffff;
}

/* --- CONTENEDOR DE IMAGEN (EL "MARCO") --- */
.img-wrapper {
    width: 140px; /* Tamaño fijo circular para uniformidad */
    height: 140px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #fff;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    background: linear-gradient(135deg, #d4a373 0%, #6f4e37 100%);
}

.card-img-profile { 
    width: 100%;
    height: 100%;
    object-fit: cover; 
    /* PRIORIDAD: Enfocar la parte superior para no cortar cabezas */
    object-position: center 15%; 
    transition: transform 0.6s ease;
}

.card-hover:hover .card-img-profile {
    transform: scale(1.15);
}

/* --- ICONOS DE REDES SOCIALES --- */
.social-icon {
    width: 38px;
    height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid rgba(212, 163, 115, 0.5);
    border-radius: 50%;
    color: #6f4e37 !important; 
    font-size: 1.1rem;
    transition: all 0.3s ease;
    text-decoration: none;
}

.social-icon i { color: inherit; }

.social-icon:hover {
    background-color: #6f4e37;
    border-color: #6f4e37;
    color: white !important;
    transform: scale(1.2);
}

/* Fondo de página sutil */
:deep(body)::before {
    content: ""; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: url('/assets/img/background1.jpg') center/cover;
    opacity: 0.1; z-index: -1;
}
</style>