<template>
  <span class="inline-flex items-center justify-center" :style="{ width: sizePx, height: sizePx }">
    <component :is="icon" />
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    icon: any
    size?: number
  }>(),
  { size: 20 }
)
const sizePx = `${props.size}px`
</script>


