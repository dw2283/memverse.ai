import { ElMessage } from 'element-plus'

/**
 * Unified notification interface
 */
export function useNotification() {
  function success(message: string) {
    ElMessage.success(message)
  }
  function error(message: string) {
    ElMessage.error(message)
  }
  function info(message: string) {
    ElMessage.info(message)
  }
  function warning(message: string) {
    ElMessage.warning(message)
  }
  return { success, error, info, warning }
}


