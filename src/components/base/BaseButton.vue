<template>
  <el-button
    class="!rounded-lg"
    :type="type"
    :size="size"
    :loading="loading"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </el-button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
    size?: 'large' | 'default' | 'small'
    loading?: boolean
    disabled?: boolean
  }>(),
  {
    type: 'default',
    size: 'default',
    loading: false,
    disabled: false
  }
)
defineEmits<{ (e: 'click'): void }>()
</script>


