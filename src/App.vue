<template>
  <div class="app-wrapper">
    <!-- 1. Llamamos al Navbar -->
    <MainNavbar />

    <!-- 2. Espacio para el contenido principal (Luego usaremos RouterView) -->
    <main class="main-content">
      <div class="container py-5 text-center">
        <h2>Bienvenido a Historias de Café</h2>
        <p>Tu contenido de Vanilla JS irá migrando aquí poco a poco.</p>
      </div>
    </main>

    <!-- 3. Llamamos al Footer -->
    <Footer />
  </div>
</template>

<script setup>
// IMPORTANTE: Aquí registramos los archivos que creamos antes
import MainNavbar from './components/MainNavbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* 
   ESTILOS GLOBALES 
   Aquí ponemos lo que antes tenías en el 'body' de tu CSS 
*/
:root {
  --color-primary: #532721;
  --color-primary-active: #3d1c18;
  --color-secondary: #B08D57;
  --color-secondary-muted: rgba(176, 141, 87, 0.6);
  --color-accent: #5F6335;
  --color-background: #E4DBBF;
  --color-text-default: #1A1A1A;
  --color-border-default: #B08D57;
  --color-highlight: rgba(176, 141, 87, 0.1);
}

body {
  background: var(--color-background);
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', system-ui, sans-serif;
  /* El padding-top es para que el contenido no quede debajo del navbar fixed */
  padding-top: 110px; 
}

.main-content {
  min-height: 80vh; /* Para que el footer siempre esté abajo */
}
</style>
