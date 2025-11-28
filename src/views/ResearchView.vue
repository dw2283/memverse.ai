<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b">
      <div class="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-6 sm:mb-8">
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 px-2">
              MemVerse Blog
            </h1>
            <p class="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Explore our latest research, technical insights, and contributions to AI memory systems.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Cards Grid -->
    <section class="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
      <div class="max-w-4xl mx-auto">
        <div class="space-y-4 sm:space-y-6">
          <!-- Blog Card 1: MemVerse -->
          <article 
            class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer group"
            @click="viewBlogDetail(0)"
          >
            <!-- Content -->
            <div class="p-4 sm:p-5">
              <div class="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <span>2025</span>
                <span>•</span>
                <span>15 min read</span>
              </div>
              <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                How Memverse Enhances Your AI Agents
              </h3>
              <p class="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                A model-agnostic, plug-and-play memory framework that equips AI agents with lifelong multimodal learning capabilities. By bridging fast parametric recall and hierarchical retrieval-based memory, it solves catastrophic forgetting, poor long-horizon reasoning, and disconnected multimodal understanding.
              </p>

              <!-- Footer -->
              <div class="flex items-center justify-between pt-3 border-t border-gray-100">
                <span class="text-xs font-medium text-gray-600 group-hover:text-blue-600 transition-colors">
                  Read Article
                </span>
                <el-icon class="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-sm">
                  <i-ep-arrow-right />
                </el-icon>
              </div>
            </div>
          </article>

          <!-- Blog Card 2: MGA -->
          <article 
            class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-purple-300 transition-all duration-300 cursor-pointer group"
            @click="viewBlogDetail(1)"
          >
            <!-- Content -->
            <div class="p-4 sm:p-5">
              <div class="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <span>2025</span>
                <span>•</span>
                <span>12 min read</span>
              </div>
              <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors leading-tight">
                Application: How Memverse Enhances GUI Agent
              </h3>
              <p class="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                A memory-driven GUI agent framework that enables observation-centric interaction with graphical user interfaces. MGA leverages persistent memory to remember UI patterns, user preferences, and interaction history for efficient task automation.
              </p>

              <!-- Footer -->
              <div class="flex items-center justify-between pt-3 border-t border-gray-100">
                <span class="text-xs font-medium text-gray-600 group-hover:text-purple-600 transition-colors">
                  Read Article
                </span>
                <el-icon class="text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all text-sm">
                  <i-ep-arrow-right />
                </el-icon>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function viewBlogDetail(index: number) {
  // Navigate to detail page for both cards
  router.push(`/research/${index}`)
}

function handleImageError(event: Event) {
  const img = event.target as HTMLImageElement
  img.style.display = 'none'
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
