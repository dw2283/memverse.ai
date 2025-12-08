<template>
  <div class="space-y-3">
    <el-upload
      class="w-full"
      drag
      :limit="1"
      :auto-upload="false"
      :on-change="onFileChange"
      :on-remove="onRemove"
      accept="video/*"
    >
      <i class="el-icon--upload"></i>
      <div class="el-upload__text">拖拽视频到此处或 <em>点击上传</em></div>
      <template #tip>
        <div class="el-upload__tip">支持 MP4、WebM、MOV 等格式，最大 100MB</div>
      </template>
    </el-upload>

    <div v-if="preview" class="rounded-lg border p-3 bg-white">
      <video 
        :src="preview" 
        controls 
        class="w-full max-h-96 object-contain mx-auto rounded"
        preload="metadata"
      ></video>
      <div class="text-right mt-2">
        <BaseButton type="primary" @click="emitUpload" :disabled="!file || loading" :loading="loading">
          上传视频
        </BaseButton>
        <BaseButton @click="onRemove" class="ml-2" :disabled="loading">
          取消
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import BaseButton from './BaseButton.vue'

defineProps<{
  loading?: boolean
}>()

const emit = defineEmits<{ (e: 'upload', file: File): void }>()

const file = ref<File | null>(null)
const preview = ref<string | null>(null)

function onFileChange(uploadFile: any) {
  const f = uploadFile?.raw as File
  file.value = f || null
  if (f) {
    // 验证文件大小（100MB）
    const maxSize = 100 * 1024 * 1024
    if (f.size > maxSize) {
      ElMessage.error('视频文件大小不能超过 100MB')
      file.value = null
      preview.value = null
      return
    }
    
    // 验证文件类型
    if (!f.type.startsWith('video/')) {
      ElMessage.error('请上传有效的视频文件')
      file.value = null
      preview.value = null
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      preview.value = reader.result as string
    }
    reader.readAsDataURL(f)
  } else {
    preview.value = null
  }
}

function onRemove() {
  file.value = null
  preview.value = null
}

function emitUpload() {
  if (file.value) emit('upload', file.value)
}
</script>

