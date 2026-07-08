<script setup>
const experience = [
  {
    period: '2024 — sekarang',
    role: 'Senior Frontend Developer',
    org: 'Studio Kreanova',
    desc: 'Memimpin pengembangan sistem desain internal dan membangun antarmuka produk untuk klien lintas industri.'
  },
  {
    period: '2022 — 2024',
    role: 'Product Designer & Developer',
    org: 'Lintas Digital',
    desc: 'Merancang sekaligus membangun produk digital dari riset pengguna hingga peluncuran, bekerja langsung dengan founder.'
  },
  {
    period: '2020 — 2022',
    role: 'Freelance Web Developer',
    org: 'Klien lepas',
    desc: 'Membangun situs dan aplikasi web untuk UMKM dan startup awal menggunakan Vue.js dan WordPress headless.'
  }
]
</script>

<template>
  <section class="experience" id="pengalaman">
    <div class="wrap exp-inner">
      <div class="section-head" v-reveal>
        <div>
          <span class="section-num">03 / pengalaman</span>
          <h2 class="section-title">Perjalanan karier</h2>
        </div>
      </div>

      <div class="timeline" v-reveal>
        <div class="exp-item" v-for="e in experience" :key="e.role">
          <span class="exp-period">{{ e.period }}</span>
          <h3 class="exp-role">{{ e.role }}</h3>
          <p class="exp-org">{{ e.org }}</p>
          <p class="exp-desc">{{ e.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  padding: 60px 0 130px;
  background: var(--bg-soft);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.exp-inner {
  padding: 130px 0;
}

.section-head {
  margin-bottom: 56px;
}

.section-num {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
}

.section-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(30px, 4vw, 46px);
  letter-spacing: -0.02em;
  margin: 6px 0 0;
}

.timeline {
  position: relative;
  padding-left: 32px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  bottom: 6px;
  width: 1px;
  background: var(--border);
}

.exp-item {
  position: relative;
  padding-bottom: 48px;
}

.exp-item:last-child {
  padding-bottom: 0;
}

.exp-item::before {
  content: '';
  position: absolute;
  left: -37px;
  top: 4px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid var(--accent);
}

.exp-period {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--accent);
  margin-bottom: 8px;
  display: block;
}

.exp-role {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 22px;
  margin: 0 0 4px;
}

.exp-org {
  font-size: 14px;
  color: var(--ink-soft);
  margin: 0 0 10px;
}

.exp-desc {
  font-size: 14.5px;
  color: var(--ink-soft);
  line-height: 1.7;
  max-width: 520px;
  margin: 0;
}
</style>
