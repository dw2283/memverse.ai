<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="hero-gradient border-b">
      <div class="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div class="text-center space-y-6 max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            memverse: Building Production-Ready AI Agents with Scalable Long-Term Memory
          </h1>
          <p class="text-xl text-gray-600 leading-relaxed">
            A scalable memory-centric algorithm that dynamically extracts and retrieves key conversational facts—delivering 
            <strong class="text-brand-600">26% relative accuracy gains</strong> over baseline methods, with 
            <strong class="text-brand-600">91% lower p95 latency</strong> and 
            <strong class="text-brand-600">90% fewer tokens</strong>.
          </p>
          <div class="flex flex-wrap justify-center gap-4 pt-4">
            <BaseButton type="primary" size="large" @click="scrollToPaper">
              <el-icon class="mr-2"><i-ep-document /></el-icon>
              Read the Paper
            </BaseButton>
            <BaseButton size="large" @click="scrollToCode">
              <el-icon class="mr-2"><i-ep-link /></el-icon>
              View Code
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Executive Summary -->
    <section ref="summaryRef" class="max-w-7xl mx-auto px-4 py-16">
      <div class="space-y-6">
        <h2 class="text-3xl font-bold text-gray-900">Executive Summary</h2>
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-700 leading-relaxed">
            AI systems today forget key facts over extended interactions, breaking context and eroding trust. 
            Simply enlarging LLM context windows only delays the problem—models get slower, costlier, and still overlook critical details.
          </p>
          <p class="text-gray-700 leading-relaxed">
            <strong>memverse</strong> addresses this problem head-on with a scalable memory architecture that dynamically extracts, 
            consolidates, and retrieves important information from conversations. An enhanced variant, memverse<sup>g</sup>, 
            layers in a graph-based store to capture richer, multi-session relationships.
          </p>
          <p class="text-gray-700 leading-relaxed">
            On rigorous benchmarks, memverse consistently outperforms leading memory approaches, achieving:
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>26% higher response accuracy</strong> compared to baseline memory methods</li>
            <li><strong>91% lower latency</strong> compared to full-context method</li>
            <li><strong>90% savings in token usage</strong>, making memory practical and affordable at scale</li>
          </ul>
          <p class="text-gray-700 leading-relaxed">
            By making persistent, structured memory practical at scale, memverse paves the way for AI agents that don't just react, 
            but truly remember, adapt, and collaborate over time.
          </p>
        </div>
      </div>
    </section>

    <!-- Approach Section -->
    <section class="bg-gray-50 border-y">
      <div class="max-w-7xl mx-auto px-4 py-16">
        <div class="space-y-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Approach</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              A two-phase memory pipeline that extracts, consolidates, and retrieves only the most salient conversational facts—enabling scalable, long-term reasoning.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 mt-12">
            <!-- Extraction Phase -->
            <div class="bg-white rounded-xl border p-8 shadow-sm">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <el-icon class="text-blue-600 text-2xl"><i-ep-download /></el-icon>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Extraction Phase</h3>
              </div>
              <p class="text-gray-700 leading-relaxed mb-4">
                The system ingests three context sources—the latest exchange, a rolling summary, and the <em>m</em> most recent messages—and uses an LLM to extract a concise set of candidate memories.
              </p>
              <p class="text-gray-600 text-sm">
                A background module refreshes the long-term summary asynchronously, so inference never stalls.
              </p>
            </div>

            <!-- Update Phase -->
            <div class="bg-white rounded-xl border p-8 shadow-sm">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                  <el-icon class="text-purple-600 text-2xl"><i-ep-refresh /></el-icon>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Update Phase</h3>
              </div>
              <p class="text-gray-700 leading-relaxed mb-4">
                Each new fact is compared to the top <em>s</em> similar entries in the vector database. The LLM then chooses one of four operations:
              </p>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-center gap-2">
                  <el-icon class="text-green-600"><i-ep-plus /></el-icon>
                  <strong>ADD</strong> new memories
                </li>
                <li class="flex items-center gap-2">
                  <el-icon class="text-blue-600"><i-ep-edit /></el-icon>
                  <strong>UPDATE</strong> existing entries
                </li>
                <li class="flex items-center gap-2">
                  <el-icon class="text-red-600"><i-ep-delete /></el-icon>
                  <strong>DELETE</strong> contradictions
                </li>
                <li class="flex items-center gap-2">
                  <el-icon class="text-gray-600"><i-ep-close /></el-icon>
                  <strong>NOOP</strong> if no change is needed
                </li>
              </ul>
              <p class="text-gray-600 text-sm mt-4">
                These steps keep the memory store coherent, non-redundant, and instantly ready for the next query.
              </p>
            </div>
          </div>

          <!-- Graph Variant -->
          <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200 p-8 mt-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center">
                <el-icon class="text-white text-2xl"><i-ep-connection /></el-icon>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">memverse<sup>g</sup>: Graph-Enhanced Memory</h3>
            </div>
            <p class="text-gray-700 leading-relaxed">
              memverse<sup>g</sup> enhances memverse by storing memories as a directed, labeled graph. In the <strong>Extraction Phase</strong>, 
              incoming messages feed into an Entity Extractor to identify entities as nodes and a Relations Generator to infer labeled edges—transforming text into a structured graph.
            </p>
            <p class="text-gray-700 leading-relaxed mt-4">
              During the <strong>Update Phase</strong>, a Conflict Detector flags overlapping or contradictory nodes/edges, and an LLM-powered Update Resolver decides whether to add, merge, invalidate, or skip graph elements. The resulting knowledge graph enables efficient subgraph retrieval and semantic triplet matching for complex multi-hop, temporal, and open-domain reasoning.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Results Section -->
    <section ref="resultsRef" class="max-w-7xl mx-auto px-4 py-16">
      <div class="space-y-12">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Performance Highlights</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Rigorous benchmarking shows memverse delivers across accuracy, speed, and efficiency.
          </p>
        </div>

        <!-- Key Metrics -->
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 p-8 text-center">
            <div class="text-5xl font-bold text-green-700 mb-2">+26%</div>
            <p class="text-gray-700 font-medium">More accurate vs. Baseline</p>
            <p class="text-sm text-gray-600 mt-2">66.9% vs 52.9% accuracy</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 p-8 text-center">
            <div class="text-5xl font-bold text-blue-700 mb-2">91%</div>
            <p class="text-gray-700 font-medium">Lower p95 latency</p>
            <p class="text-sm text-gray-600 mt-2">1.44s vs 17.12s</p>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 p-8 text-center">
            <div class="text-5xl font-bold text-purple-700 mb-2">90%</div>
            <p class="text-gray-700 font-medium">Token cost savings</p>
            <p class="text-sm text-gray-600 mt-2">~1.8K vs 26K tokens</p>
          </div>
        </div>

        <!-- Performance Charts -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Search Latency Chart -->
          <div class="bg-white rounded-xl border p-6 shadow-sm">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Search Latency vs Accuracy</h3>
            <div ref="latencyChartRef" class="h-80"></div>
            <p class="text-sm text-gray-600 mt-4">
              This chart compares each method's search latency (median p50 in pink, tail p95 in green) against its reasoning accuracy (blue bars). 
              memverse achieves <strong>66.9%</strong> accuracy with a <strong>median search latency of 0.20s</strong> and <strong>p95 latency of 1.44s</strong>.
            </p>
          </div>

          <!-- End-to-End Latency Chart -->
          <div class="bg-white rounded-xl border p-6 shadow-sm">
            <h3 class="text-xl font-bold text-gray-900 mb-4">End-to-End Performance</h3>
            <div ref="e2eChartRef" class="h-80"></div>
            <p class="text-sm text-gray-600 mt-4">
              End-to-end measurements (memory retrieval + answer generation) showcase memverse's production readiness. 
              memverse achieves <strong>66.9%</strong> accuracy with just a <strong>0.71s median</strong> and <strong>1.44s p95</strong> end-to-end response time.
            </p>
          </div>
        </div>

        <!-- Detailed Results -->
        <div class="bg-gray-50 rounded-xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Benchmark Results</h3>
          <div class="space-y-4">
            <p class="text-gray-700 leading-relaxed">
              On rigorous benchmarks, memverse delivers a <strong>26% relative uplift</strong> in overall accuracy over baseline methods—66.9% versus 52.9%—underscoring its superior factual accuracy and coherence.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Beyond quality, memverse's selective retrieval pipeline <strong>slashes p95 latency by 91%</strong> (1.44s vs. 17.12s) by operating over concise memory facts instead of reprocessing entire chat histories. 
              This focused approach also drives a <strong>90% reduction in token consumption</strong>, requiring only ~1.8K tokens per conversation compared to 26K for full-context methods.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Together, these results demonstrate how memverse balances state-of-the-art reasoning, real-time responsiveness, and cost efficiency—making long-term conversational memory practical at scale.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Conclusion -->
    <section class="bg-gradient-to-br from-blue-50 to-purple-50 border-y">
      <div class="max-w-4xl mx-auto px-4 py-16">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-gray-900">Conclusion</h2>
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 leading-relaxed">
              By delivering a <strong>26% accuracy boost</strong>, <strong>91% lower p95 latency</strong>, and <strong>90% token savings</strong>, 
              memverse demonstrates that persistent, structured memory can be both powerful and practical at scale.
            </p>
            <p class="text-gray-700 leading-relaxed">
              These results unlock a future where AI agents don't just react—but truly remember: preserving user preferences over weeks, 
              adapting to evolving contexts, and maintaining coherent, personalized interactions in domains from healthcare and education to enterprise support.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Building on this foundation, the next generation of memory systems can explore hierarchical and multimodal representations, 
              on-device memory, and dynamic consolidation mechanisms—paving the way for AI that genuinely grows and evolves alongside its users.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <div class="bg-gradient-to-r from-brand-600 to-purple-600 rounded-2xl p-12 text-center text-white">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Give your AI a memory and personality.</h2>
        <p class="text-xl mb-8 opacity-90">Instant memory for LLMs—better, cheaper, personal.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <BaseButton size="large" class="bg-white text-brand-600 hover:bg-gray-100" @click="goHome">
            Get Started
          </BaseButton>
          <BaseButton size="large" class="bg-transparent border-2 border-white text-white hover:bg-white/10" @click="goPricing">
            View Pricing
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import * as echarts from 'echarts'
import BaseButton from '@/components/base/BaseButton.vue'

const router = useRouter()
const summaryRef = ref<HTMLElement | null>(null)
const resultsRef = ref<HTMLElement | null>(null)
const latencyChartRef = ref<HTMLElement | null>(null)
const e2eChartRef = ref<HTMLElement | null>(null)

function scrollToPaper() {
  summaryRef.value?.scrollIntoView({ behavior: 'smooth' })
}

function scrollToCode() {
  resultsRef.value?.scrollIntoView({ behavior: 'smooth' })
}

function goHome() {
  router.push('/')
}

function goPricing() {
  router.push('/pricing')
}

onMounted(() => {
  nextTick(() => {
    // Initialize Search Latency Chart
    if (latencyChartRef.value) {
      const latencyChart = echarts.init(latencyChartRef.value)
      const latencyOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'cross' }
        },
        legend: {
          data: ['Accuracy', 'p50 Latency', 'p95 Latency'],
          bottom: 0
        },
        xAxis: {
          type: 'category',
          data: ['Baseline', 'RAG', 'memverse', 'memverseᵍ'],
          axisLabel: { rotate: 0 }
        },
        yAxis: [
          {
            type: 'value',
            name: 'Accuracy (%)',
            position: 'left',
            max: 75
          },
          {
            type: 'value',
            name: 'Latency (s)',
            position: 'right'
          }
        ],
        series: [
          {
            name: 'Accuracy',
            type: 'bar',
            data: [52.9, 61.0, 66.9, 68.4],
            itemStyle: { color: '#3b82f6' }
          },
          {
            name: 'p50 Latency',
            type: 'line',
            yAxisIndex: 1,
            data: [0.5, 0.7, 0.2, 0.66],
            itemStyle: { color: '#ec4899' },
            lineStyle: { width: 3 }
          },
          {
            name: 'p95 Latency',
            type: 'line',
            yAxisIndex: 1,
            data: [2.1, 0.26, 0.15, 0.48],
            itemStyle: { color: '#10b981' },
            lineStyle: { width: 3 }
          }
        ]
      }
      latencyChart.setOption(latencyOption)
      
      // Handle resize
      window.addEventListener('resize', () => {
        latencyChart.resize()
      })
    }

    // Initialize End-to-End Chart
    if (e2eChartRef.value) {
      const e2eChart = echarts.init(e2eChartRef.value)
      const e2eOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'cross' }
        },
        legend: {
          data: ['Accuracy', 'Median Latency', 'p95 Latency'],
          bottom: 0
        },
        xAxis: {
          type: 'category',
          data: ['Full Context', 'memverse', 'memverseᵍ'],
          axisLabel: { rotate: 0 }
        },
        yAxis: [
          {
            type: 'value',
            name: 'Accuracy (%)',
            position: 'left',
            max: 75
          },
          {
            type: 'value',
            name: 'Latency (s)',
            position: 'right'
          }
        ],
        series: [
          {
            name: 'Accuracy',
            type: 'bar',
            data: [72.9, 66.9, 68.4],
            itemStyle: { color: '#3b82f6' }
          },
          {
            name: 'Median Latency',
            type: 'line',
            yAxisIndex: 1,
            data: [9.87, 0.71, 1.09],
            itemStyle: { color: '#ec4899' },
            lineStyle: { width: 3 }
          },
          {
            name: 'p95 Latency',
            type: 'line',
            yAxisIndex: 1,
            data: [17.12, 1.44, 2.59],
            itemStyle: { color: '#10b981' },
            lineStyle: { width: 3 }
          }
        ]
      }
      e2eChart.setOption(e2eOption)
      
      // Handle resize
      window.addEventListener('resize', () => {
        e2eChart.resize()
      })
    }
  })
})
</script>

