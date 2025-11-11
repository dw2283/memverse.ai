<template>
  <div class="flex items-center gap-3 text-gray-600" role="status" aria-live="polite">
    <el-icon class="animate-spin"><i-ep-loading /></el-icon>
    <span>{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ text?: string }>(), { text: 'Loading...' })
</script>


