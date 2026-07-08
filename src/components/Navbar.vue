<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const links = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#karya', label: 'Karya' },
  { href: '#pengalaman', label: 'Pengalaman' },
  { href: '#kontak', label: 'Kontak' }
]

function close() {
  menuOpen.value = false
}
</script>

<template>
  <header>
    <nav class="wrap">
      <a href="#home" class="logo"><span class="logo-dot"></span> Miftahul Huda </a>

      <ul class="nav-links">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href">{{ link.label }}</a>
        </li>
      </ul>

      <a href="#kontak" class="nav-cta">
        <span class="status-dot"></span> Terbuka untuk proyek
      </a>

      <button class="burger" @click="menuOpen = !menuOpen" aria-label="Buka menu">
        {{ menuOpen ? '✕' : '☰' }}
      </button>
    </nav>

    <div class="mobile-menu" v-if="menuOpen" @click="close">
      <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

nav.wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}

.logo {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

.nav-links {
  display: flex;
  gap: 36px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  font-size: 14px;
  color: var(--ink-soft);
  position: relative;
  padding: 4px 0;
  transition: color 0.2s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1.5px;
  width: 0;
  background: var(--accent);
  transition: width 0.25s ease;
}

.nav-links a:hover {
  color: var(--ink);
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-cta {
  font-family: var(--font-mono);
  font-size: 12px;
  padding: 10px 18px;
  border: 1px solid var(--ink);
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s ease, color 0.2s ease;
}

.nav-cta:hover {
  background: var(--ink);
  color: #fff;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #2fbf71;
  box-shadow: 0 0 0 3px rgba(47, 191, 113, 0.2);
}

.burger {
  display: none;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
}

@media (max-width: 820px) {
  .nav-links,
  .nav-cta {
    display: none;
  }
  .burger {
    display: block;
  }
}

.mobile-menu {
  position: fixed;
  inset: 76px 0 0 0;
  background: #fff;
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 24px;
  border-top: 1px solid var(--border);
}

.mobile-menu a {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 500;
}
</style>
