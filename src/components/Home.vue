<script setup>
import Marquee from './Marquee.vue'

const skills = [
  'Vue.js',
  'TypeScript',
  'Figma',
  'Design Systems',
  'CSS Animation',
  'Accessibility',
  'GSAP',
  'Tailwind CSS',
  'UI Engineering'
]
</script>

<template>
  <section class="hero" id="home">
    <div class="wrap">
      <p class="eyebrow"><span class="line"></span> frontend developer &amp; product designer — bandung, indonesia</p>
      <h1 class="hero-title">
        Miftahul<br />
        <span class="accent">Huda</span> <span class="outline">.</span>
      </h1>
      <div class="hero-sub">
        <p class="hero-desc">
          Saya merancang dan membangun antarmuka digital dengan Vue.js — dari ide di kertas
          sampai interaksi yang terasa hidup di layar.
        </p>
        <div class="hero-scroll">
          <span>scroll</span>
          <span class="arrow">↓</span>
        </div>
      </div>
    </div>
  </section>

  <Marquee :items="skills" />
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 110px;
  padding-bottom: 60px;
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
  text-transform: lowercase;
}

.eyebrow .line {
  width: 36px;
  height: 1px;
  background: var(--accent);
}

.hero-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(48px, 9vw, 124px);
  line-height: 0.92;
  letter-spacing: -0.03em;
  margin: 0;
}

.hero-title .accent {
  color: var(--accent);
}

.hero-title .outline {
  -webkit-text-stroke: 1.5px var(--ink);
  color: transparent;
}

.hero-sub {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 40px;
  gap: 40px;
  flex-wrap: wrap;
}

.hero-desc {
  max-width: 420px;
  font-size: 16px;
  line-height: 1.7;
  color: var(--ink-soft);
}

.hero-scroll {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--ink-faint);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.hero-scroll .arrow {
  animation: bob 1.8s ease-in-out infinite;
}

@keyframes bob {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}
</style>
