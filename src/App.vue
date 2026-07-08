<script setup>
import CustomCursor from './components/CustomCursor.vue'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <CustomCursor />
  <Navbar />

  <main>
    <Home />
    <About />
    <Projects />
    <Experience />
    <Contact />
  </main>

  <Footer />
</template>
