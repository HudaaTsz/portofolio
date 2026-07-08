<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cx = ref(0)
const cy = ref(0)
const big = ref(false)

function onMove(e) {
  cx.value = e.clientX
  cy.value = e.clientY
}

function onOver(e) {
  if (e.target.closest('a, button, .project-row')) big.value = true
}

function onOut(e) {
  if (e.target.closest('a, button, .project-row')) big.value = false
}

onMounted(() => {
  window.addEventListener('mousemove', onMove)
  document.addEventListener('mouseover', onOver)
  document.addEventListener('mouseout', onOut)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
  document.removeEventListener('mouseover', onOver)
  document.removeEventListener('mouseout', onOut)
})
</script>

<template>
  <div
    class="cursor-dot"
    :class="{ big }"
    :style="{ transform: `translate(${cx}px, ${cy}px) translate(-50%, -50%)` }"
  ></div>
</template>

<style scoped>
.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 34px;
  height: 34px;
  border: 1.5px solid var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: width 0.25s ease, height 0.25s ease, background 0.25s ease;
  mix-blend-mode: multiply;
}

.cursor-dot.big {
  width: 64px;
  height: 64px;
  background: var(--accent-soft);
}

@media (max-width: 900px) {
  .cursor-dot {
    display: none;
  }
}
</style>
