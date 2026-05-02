<template>
  <div class="app-wrapper">
    <!-- 1. Llamamos al Navbar -->
    <MainNavbar />

    
    <AboutView /> 

    <!-- 3. Llamamos al Footer -->
    <Footer />
  </div>
</template>

<script setup>
// IMPORTANTE: Aquí registramos los archivos que creamos antes
import MainNavbar from './components/MainNavbar.vue'
import Footer from './components/Footer.vue'
import AboutView from './views/AboutView.vue'
</script>

<style>


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
