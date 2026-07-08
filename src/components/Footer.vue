<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="wrap">
    <p>&copy; {{ year }} Miftahul Huda — dibuat dengan Vue.js</p>
    <a href="#home" class="back-top">kembali ke atas ↑</a>
  </footer>
</template>

<style scoped>
footer {
  padding: 28px 0;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

footer p {
  margin: 0;
  font-size: 12.5px;
  color: var(--ink-faint);
  font-family: var(--font-mono);
}

.back-top {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--ink-soft);
}

.back-top:hover {
  color: var(--accent);
}
</style>
