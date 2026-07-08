<script setup>
const socials = [
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'Dribbble', href: '#' },
  { label: 'Instagram', href: '#' }
]
</script>

<template>
  <section class="contact" id="kontak">
    <div class="wrap">
      <p class="eyebrow"> 04 / kontak</p>
      <h2 class="contact-title">
        Punya ide proyek?<br />
        <span class="accent-underline">Mari ngobrol.</span>
      </h2>
      <a class="email-link" href="mailto:mhuda9394@gmail.com">mhuda9394@gmail.com ↗</a>

      <div class="social-row">
        <a v-for="s in socials" :key="s.label" :href="s.href">{{ s.label }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 150px 0 100px;
  text-align: center;
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-transform: lowercase;
}

.eyebrow .line {
  width: 36px;
  height: 1px;
  background: var(--accent);
}

.contact-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(36px, 7vw, 84px);
  letter-spacing: -0.03em;
  margin: 20px 0 34px;
  line-height: 1.02;
}

.accent-underline {
  position: relative;
  color: var(--ink);
}

.accent-underline::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 6px;
  height: 14px;
  background: var(--lime);
  z-index: -1;
}

.email-link {
  font-family: var(--font-mono);
  font-size: clamp(16px, 2.4vw, 20px);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 6px;
}

.email-link:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.social-row {
  display: flex;
  justify-content: center;
  gap: 28px;
  margin-top: 56px;
  flex-wrap: wrap;
}

.social-row a {
  font-size: 14px;
  color: var(--ink-soft);
  position: relative;
  padding: 2px 0;
}

.social-row a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1px;
  width: 0;
  background: var(--ink);
  transition: width 0.2s ease;
}

.social-row a:hover {
  color: var(--ink);
}

.social-row a:hover::after {
  width: 100%;
}
</style>
