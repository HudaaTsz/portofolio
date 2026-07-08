<script setup>
const stats = [
  { value: '5+', label: 'tahun pengalaman' },
  { value: '32', label: 'proyek selesai' },
  { value: '14', label: 'klien & studio' }
]
</script>

<template>
  <section class="about" id="tentang">
    <div class="wrap">
      <div class="section-head" v-reveal>
        <div>
          <span class="section-num">01 / tentang</span>
          <h2 class="section-title">Sedikit tentang saya</h2>
        </div>
        <p class="section-note">
          Desainer yang belajar coding, atau developer yang tidak bisa berhenti mendesain —
          keduanya benar.
        </p>
      </div>

      <div class="about-grid">
        <div class="monogram" v-reveal>
          <div class="ring r1"></div>
          <div class="ring r2"></div>
          <span>NK</span>
        </div>

        <div class="about-text" v-reveal>
          <p>
            Selama <strong>5 tahun terakhir</strong>, saya membantu startup dan studio kecil
            mengubah ide produk menjadi antarmuka yang enak dipakai. Fokus saya ada di titik
            temu antara desain dan kode — tempat detail kecil, seperti transisi 200 milidetik,
            benar-benar terasa.
          </p>
          <p>
            Saya bekerja dengan <strong>Vue.js, TypeScript, dan Figma</strong> sehari-hari, dan
            percaya bahwa produk terbaik lahir dari iterasi cepat, bukan dokumen perencanaan
            yang tebal.
          </p>

          <div class="stat-row">
            <div class="stat" v-for="s in stats" :key="s.label">
              <b>{{ s.value }}</b>
              <span>{{ s.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 130px 0;
}

.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 56px;
  flex-wrap: wrap;
  gap: 16px;
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

.section-note {
  font-size: 14px;
  color: var(--ink-soft);
  max-width: 260px;
  text-align: right;
}

@media (max-width: 700px) {
  .section-note {
    text-align: left;
  }
}

.about-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 70px;
  align-items: start;
}

@media (max-width: 820px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 44px;
  }
}

.monogram {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 24px;
  background: var(--bg-soft);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.monogram span {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 120px;
  color: var(--accent);
}

.monogram .ring {
  position: absolute;
  border: 1px solid var(--accent);
  border-radius: 50%;
  opacity: 0.35;
}

.monogram .ring.r1 {
  width: 70%;
  height: 70%;
}

.monogram .ring.r2 {
  width: 95%;
  height: 95%;
}

.about-text p {
  font-size: 17px;
  line-height: 1.8;
  color: var(--ink-soft);
  margin: 0 0 20px;
}

.about-text strong {
  color: var(--ink);
  font-weight: 600;
}

.stat-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 44px;
}

.stat {
  border-top: 1px solid var(--border);
  padding-top: 16px;
}

.stat b {
  font-family: var(--font-display);
  font-size: 34px;
  font-weight: 600;
  display: block;
  color: var(--ink);
}

.stat span {
  font-size: 13px;
  color: var(--ink-soft);
}
</style>
