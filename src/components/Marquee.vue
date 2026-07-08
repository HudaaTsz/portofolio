<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>A
  <div class="marquee-wrap">
    <div class="marquee-track">
      <div class="marquee-item" v-for="(item, i) in [...items, ...items]" :key="i">
        {{ item }} <span class="sep"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-wrap {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  overflow: hidden;
  padding: 22px 0;
  background: var(--bg-soft);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: scroll 32s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.marquee-item {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 26px;
  display: flex;
  align-items: center;
  gap: 28px;
  padding: 0 28px;
  white-space: nowrap;
}

.marquee-item .sep {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--lime);
  border: 1px solid var(--ink);
}
</style>
