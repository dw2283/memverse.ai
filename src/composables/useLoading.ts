import { ref } from 'vue'

/**
 * Manage async loading state with optional message
 */
export function useLoading(initial = false, defaultText = 'Loading...') {
  const loading = ref<boolean>(initial)
  const text = ref<string>(defaultText)
  function start(message?: string) {
    if (message) text.value = message
    loading.value = true
  }
  function stop() {
    loading.value = false
    text.value = defaultText
  }
  return { loading, text, start, stop }
}


