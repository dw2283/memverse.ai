<template>
  <div class="min-h-screen bg-white">
    <!-- Blog Header -->
    <section class="bg-white border-b">
      <div class="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8">
        <div class="max-w-3xl mx-auto">
          <!-- Breadcrumb -->
          <nav class="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <router-link to="/" class="hover:text-gray-900 transition-colors">Home</router-link>
            <span>/</span>
            <router-link to="/research" class="hover:text-gray-900 transition-colors">Research</router-link>
            <span>/</span>
            <span class="text-gray-900">{{ currentBlog.title }}</span>
          </nav>

          <!-- Title -->
          <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {{ currentBlog.title }}
          </h1>

          <!-- Meta Info -->
          <div class="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
            <span>{{ currentBlog.date }}</span>
            <span>•</span>
            <span>{{ currentBlog.readTime }}</span>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span 
              v-for="tag in currentBlog.tags" 
              :key="tag"
              class="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
            >
              #{{ tag }}
            </span>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap gap-2">
            <a 
              v-if="currentBlog.arxiv"
              :href="currentBlog.arxiv" 
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors"
            >
              View on arXiv
            </a>
            <a 
              v-if="currentBlog.github"
              :href="currentBlog.github" 
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 px-2 py-1 bg-gray-900 text-white rounded text-xs hover:bg-gray-800 transition-colors"
            >
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Content -->
    <article class="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 bg-white">
      <div class="max-w-3xl mx-auto">
        <!-- Featured Image -->
        <div v-if="currentBlog.image" class="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img 
            :src="currentBlog.image" 
            :alt="currentBlog.title"
            class="w-full h-auto"
            @error="handleImageError"
          />
        </div>

        <!-- Blog Content Sections -->
        <div class="space-y-12">
          <!-- MemVerse Content -->
          <template v-if="blogId === 0">
            <!-- Project Overview -->
            <section class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <div class="space-y-4 text-gray-700 leading-relaxed text-sm text-sm sm:text-base">
                <p>
                  MemVerse is a <strong>model-agnostic, plug-and-play memory framework</strong> designed to equip AI agents with lifelong multimodal learning capabilities. 
                  By bridging fast parametric recall and hierarchical retrieval-based memory, it solves core limitations of current AI systems—catastrophic forgetting, 
                  poor long-horizon reasoning, and disconnected multimodal understanding.
                </p>
                <p>
                  Unlike stateless models or rigid memory solutions, MemVerse enables agents to accumulate, organize, and adaptively use knowledge from text, images, 
                  audio, and video, supporting coherent interaction in real-world environments.
                </p>
              </div>
            </section>

            <!-- Core Challenges -->
            <section class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-4">Core Challenges Addressed</h2>
              <p class="text-sm text-gray-600 mb-6">
                Current AI systems face fundamental limitations that MemVerse addresses through its unified memory architecture.
              </p>

              <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="border-l-2 border-red-500 pl-4">
                  <h3 class="text-base font-semibold text-gray-900 mb-2">Catastrophic Forgetting</h3>
                  <p class="text-sm text-gray-700 leading-relaxed">
                    AI models lose previously learned knowledge when trained on new data, preventing continuous learning and knowledge accumulation.
                  </p>
                </div>

                <div class="border-l-2 border-orange-500 pl-4">
                  <h3 class="text-base font-semibold text-gray-900 mb-2">Poor Long-Horizon Reasoning</h3>
                  <p class="text-sm text-gray-700 leading-relaxed">
                    Limited context windows and lack of persistent memory prevent agents from maintaining coherence across extended interactions and complex tasks.
                  </p>
                </div>

                <div class="border-l-2 border-yellow-500 pl-4">
                  <h3 class="text-base font-semibold text-gray-900 mb-2">Disconnected Multimodal Understanding</h3>
                  <p class="text-sm text-gray-700 leading-relaxed">
                    Existing systems struggle to maintain consistent understanding across text, images, audio, and video modalities.
                  </p>
                </div>

                <div class="border-l-2 border-blue-500 pl-4">
                  <h3 class="text-base font-semibold text-gray-900 mb-2">Inefficient Memory Retrieval</h3>
                  <p class="text-sm text-gray-700 leading-relaxed">
                    Traditional retrieval systems suffer from high latency and token costs, limiting real-time application performance.
                  </p>
                </div>
              </div>

              <p class="text-sm text-gray-700 italic border-l-2 border-purple-500 pl-4 py-2">
                MemVerse addresses these challenges through its unified memory architecture combining parametric and retrieval-based memory, 
                enabling efficient, scalable, and multimodal knowledge management for AI agents.
              </p>
            </section>

            <!-- Technical Architecture -->
            <section class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-4">Technical Architecture</h2>
              <p class="text-sm text-gray-600 mb-6">
                MemVerse integrates three core memory components to enable lifelong multimodal learning.
              </p>

              <div class="space-y-6">
                <!-- Hierarchical Retrieval-Based Memory -->
                <div>
                  <h3 class="text-base font-semibold text-gray-900 mb-3">Hierarchical Retrieval-Based Memory</h3>
                  <div class="space-y-3 text-sm text-gray-700">
                    <p>
                      MemVerse employs a <strong>two-tier retrieval system</strong> for efficient memory access:
                    </p>
                    <ul class="list-disc pl-5 space-y-2 text-sm">
                      <li><strong>Short-term Memory:</strong> Fast-access cache for recent interactions and frequently accessed information</li>
                      <li><strong>Long-term Memory:</strong> Persistent storage with hierarchical indexing for efficient retrieval across large knowledge bases</li>
                      <li>Adaptive retrieval strategies that balance speed and relevance</li>
                      <li>Multimodal encoding that maintains semantic relationships across modalities</li>
                    </ul>
                  </div>
                </div>

                <!-- Parametric Memory -->
                <div>
                  <h3 class="text-base font-semibold text-gray-900 mb-3">Parametric Memory</h3>
                  <p class="text-sm text-gray-700 mb-4">
                    A lightweight neural model that learns compressed representations of frequently accessed knowledge:
                  </p>
                  <div class="grid md:grid-cols-2 gap-3">
                    <div class="border-l-2 border-blue-500 pl-3">
                      <h4 class="text-sm font-semibold text-gray-900 mb-1">Knowledge Compression</h4>
                      <p class="text-xs text-gray-700">
                        Efficiently encodes patterns and relationships into compact parametric representations.
                      </p>
                    </div>
                    <div class="border-l-2 border-blue-500 pl-3">
                      <h4 class="text-sm font-semibold text-gray-900 mb-1">Fast Recall</h4>
                      <p class="text-xs text-gray-700">
                        Enables instant access to learned patterns without external retrieval overhead.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Memory Orchestrator -->
                <div>
                  <h3 class="text-base font-semibold text-gray-900 mb-3">Memory Orchestrator</h3>
                  <div class="space-y-3 text-sm text-gray-700">
                    <p>
                      The orchestrator manages storage, retrieval, and integration across all memory types:
                    </p>
                    <ul class="list-disc pl-5 space-y-1.5 text-sm">
                      <li><strong>Unified Storage:</strong> Seamlessly stores and indexes information across all modalities</li>
                      <li><strong>Intelligent Retrieval:</strong> Selects optimal memory source based on query characteristics and context</li>
                      <li><strong>Cross-Modal Integration:</strong> Maintains semantic consistency across text, images, audio, and video</li>
                      <li><strong>Adaptive Updates:</strong> Dynamically updates memory based on usage patterns and new information</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- Key Results -->
            <section class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-4">Key Results</h2>
              <p class="text-sm text-gray-600 mb-6">
                MemVerse demonstrates significant improvements in performance, efficiency, and scalability.
              </p>

              <!-- Performance Metrics -->
              <div class="border overflow-hidden mb-6">
                <div class="overflow-x-auto">
                  <table class="w-full text-sm">
                    <thead class="bg-gray-50">
                      <tr>
                        <th class="px-4 py-2 text-left font-semibold text-gray-900">Metric</th>
                        <th class="px-4 py-2 text-left font-semibold text-gray-900">Improvement</th>
                        <th class="px-4 py-2 text-left font-semibold text-gray-900">Impact</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                      <tr>
                        <td class="px-4 py-2 font-medium text-gray-900">Recall Speed</td>
                        <td class="px-4 py-2 text-gray-700">10× faster</td>
                        <td class="px-4 py-2 font-semibold text-green-600">Millisecond-level retrieval</td>
                      </tr>
                      <tr class="bg-gray-50">
                        <td class="px-4 py-2 font-medium text-gray-900">Token Savings</td>
                        <td class="px-4 py-2 text-gray-700">89% reduction</td>
                        <td class="px-4 py-2 font-semibold text-green-600">Significant cost reduction</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 font-medium text-gray-900">Latency</td>
                        <td class="px-4 py-2 text-gray-700">91% lower</td>
                        <td class="px-4 py-2 font-semibold text-blue-600">Real-time performance</td>
                      </tr>
                      <tr class="bg-gray-50">
                        <td class="px-4 py-2 font-medium text-gray-900">Cost Efficiency</td>
                        <td class="px-4 py-2 text-gray-700">70% lower</td>
                        <td class="px-4 py-2 font-semibold text-blue-600">Enterprise-grade scalability</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <!-- Core Contributions -->
            <section class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-4">Core Contributions</h2>
              <div class="space-y-4">
                <div>
                  <h3 class="text-base font-semibold text-gray-900 mb-2">Unified Memory Architecture</h3>
                  <p class="text-sm text-gray-700 leading-relaxed">
                    Introduces a novel framework that seamlessly integrates parametric and retrieval-based memory, enabling efficient knowledge management across modalities.
                  </p>
                </div>

                <div>
                  <h3 class="text-base font-semibold text-gray-900 mb-2">Model-Agnostic Design</h3>
                  <p class="text-sm text-gray-700 leading-relaxed">
                    Provides a plug-and-play solution that works with any LLM or VLM without requiring model retraining or modification.
                  </p>
                </div>

                <div>
                  <h3 class="text-base font-semibold text-gray-900 mb-2">Multimodal Memory Support</h3>
                  <p class="text-sm text-gray-700 leading-relaxed">
                    Enables consistent understanding and retrieval across text, images, audio, and video, maintaining semantic relationships across modalities.
                  </p>
                </div>

                <div>
                  <h3 class="text-base font-semibold text-gray-900 mb-2">Efficient Retrieval System</h3>
                  <p class="text-sm text-gray-700 leading-relaxed">
                    Achieves 10× faster recall and 89% token savings compared to other memory systems, enabling real-time applications at scale.
                  </p>
                </div>
              </div>
            </section>
          </template>

          <!-- MGA Content -->
          <template v-else-if="blogId === 1">
            <!-- Video Demo Section -->
            <section v-if="currentBlog.videoUrl" class="mb-8">
              <div class="relative w-full bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <div class="aspect-video w-full">
                  <iframe
                    :src="currentBlog.videoUrl"
                    class="w-full h-full"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </section>

            <!-- Project Overview -->
            <section class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <div class="space-y-4 text-gray-700 leading-relaxed text-sm text-sm sm:text-base">
                <p>
                  MGA (Memory-Driven GUI Agent) introduces a novel <strong>observation-centric interaction paradigm</strong> for graphical user interface automation. 
                  Unlike traditional GUI agents that rely on sequential action histories, MGA treats each step as an independent, context-rich environment state, 
                  significantly reducing error propagation and improving robustness.
                </p>
                <p>
                  The framework leverages a <strong>triple-state representation</strong> combining current screenshots, task-agnostic spatial information, 
                  and dynamically updated structured memory. This approach enables MGA to achieve superior performance in complex desktop and web environments 
                  while maintaining strong generalization capabilities across different applications and tasks.
                </p>
                <p>
                  MGA demonstrates significant improvements over state-of-the-art baselines in robustness, generalization, and efficiency across OSworld benchmarks, 
                  real desktop applications (Chrome, VSCode, VLC), and cross-task transfer scenarios.
                </p>
              </div>
            </section>

            <!-- Core Challenges -->
            <section class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-4">Core Challenges Addressed</h2>
              <p class="text-sm text-gray-600 mb-6">
                Traditional GUI agents face several critical limitations that MGA overcomes.
              </p>

              <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="border-l-2 border-red-500 pl-4">
                  <h3 class="text-base font-semibold text-gray-900 mb-2">Error Propagation</h3>
                  <p class="text-sm text-gray-700 leading-relaxed">
                    Sequential action histories cause errors to accumulate and propagate through the interaction chain, leading to task failure.
                  </p>
                </div>

                <div class="border-l-2 border-orange-500 pl-4">
                  <h3 class="text-base font-semibold text-gray-900 mb-2">Limited Observation Utilization</h3>
                  <p class="text-sm text-gray-700 leading-relaxed">
                    Existing agents fail to effectively leverage rich interface cues, resulting in local exploration bias and inefficient navigation.
                  </p>
                </div>

                <div class="border-l-2 border-yellow-500 pl-4">
                  <h3 class="text-base font-semibold text-gray-900 mb-2">Poor Generalization</h3>
                  <p class="text-sm text-gray-700 leading-relaxed">
                    Agents struggle to adapt to different application layouts, UI changes, and cross-task scenarios without extensive retraining.
                  </p>
                </div>

                <div class="border-l-2 border-blue-500 pl-4">
                  <h3 class="text-base font-semibold text-gray-900 mb-2">Context Loss</h3>
                  <p class="text-sm text-gray-700 leading-relaxed">
                    Lack of persistent memory prevents agents from learning from past interactions and maintaining context across sessions.
                  </p>
                </div>
              </div>

              <p class="text-sm text-gray-700 italic border-l-2 border-purple-500 pl-4 py-2">
                MGA addresses these challenges through its observation-first paradigm and triple-state memory representation, 
                treating each step as an independent decision point with rich contextual information.
              </p>
            </section>

            <!-- Technical Architecture -->
            <section class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-4">Technical Architecture</h2>
              <p class="text-sm text-gray-600 mb-6">
                MGA's design centers on observation-centric interaction with a triple-state representation.
              </p>

              <div class="space-y-6">
                <!-- Observation-Centric Paradigm -->
                <div>
                  <h3 class="text-base font-semibold text-gray-900 mb-3">Observation-First Interaction</h3>
                  <div class="space-y-3 text-sm text-gray-700">
                    <p>
                      MGA adopts a <strong>"observe first, decide later"</strong> approach where each step is treated as an independent, 
                      context-rich environment state. This paradigm eliminates dependency on historical action trajectories, 
                      preventing error propagation and enabling more robust decision-making.
                    </p>
                    <ul class="list-disc pl-5 space-y-2 text-sm">
                      <li>Each interaction step is self-contained with full environmental context</li>
                      <li>No reliance on sequential action histories</li>
                      <li>Reduced error accumulation and propagation</li>
                      <li>Better utilization of interface cues and visual information</li>
                    </ul>
                  </div>
                </div>

                <!-- Triple-State Representation -->
                <div>
                  <h3 class="text-base font-semibold text-gray-900 mb-3">Triple-State Representation</h3>
                  <p class="text-sm text-gray-700 mb-4">
                    Each state in MGA consists of three complementary components:
                  </p>
                  <div class="grid md:grid-cols-3 gap-3">
                    <div class="border-l-2 border-blue-500 pl-3">
                      <h4 class="text-sm font-semibold text-gray-900 mb-1">1. Current Screenshot</h4>
                      <p class="text-xs text-gray-700">
                        Visual representation of the current GUI state, capturing all visible elements and their spatial relationships.
                      </p>
                    </div>
                    <div class="border-l-2 border-blue-500 pl-3">
                      <h4 class="text-sm font-semibold text-gray-900 mb-1">2. Spatial Information</h4>
                      <p class="text-xs text-gray-700">
                        Task-agnostic spatial cues including element positions, sizes, and hierarchical structures.
                      </p>
                    </div>
                    <div class="border-l-2 border-blue-500 pl-3">
                      <h4 class="text-sm font-semibold text-gray-900 mb-1">3. Structured Memory</h4>
                      <p class="text-xs text-gray-700">
                        Dynamically updated memory containing learned UI patterns, interaction sequences, and task-specific knowledge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Key Results -->
            <section class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-4">Key Results</h2>
              <p class="text-sm text-gray-600 mb-6">
                MGA demonstrates superior performance across multiple benchmarks and real-world applications.
              </p>

              

              <!-- Results Image -->
              <div v-if="currentBlog.resultsImage" class="mb-6 rounded-xl overflow-hidden shadow-lg">
                <img 
                  :src="currentBlog.resultsImage" 
                  alt="MGA Key Results"
                  class="w-full h-auto"
                  @error="handleImageError"
                />
              </div>
            </section>

            

            <!-- Paper Link -->
            <section class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-4">Paper & Resources</h2>
              <div class="space-y-3">
                <a 
                  href="https://arxiv.org/pdf/2510.24168" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors"
                >
                  View Paper on arXiv
                </a>
                <p class="text-xs text-gray-600">
                  The code for MGA is publicly available. For implementation details and to use MGA in your projects, 
                  please refer to the paper and associated repository.
                </p>
              </div>
            </section>
          </template>

          <!-- MemVerse Specific Content -->
          <template v-if="blogId === 0">
            <!-- Core Challenges -->
            <section class="mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Core Challenges Addressed</h2>
            <p class="text-sm text-gray-600 mb-6">
              Current AI memory systems face three critical bottlenecks that MemVerse overcomes.
            </p>

            <div class="space-y-4 mb-6">
              <div class="border-l-2 border-red-500 pl-4">
                <h3 class="text-base font-semibold text-gray-900 mb-2">Parameter Dependency</h3>
                <p class="text-sm text-gray-700 leading-relaxed">
                  Memory tied to model weights limits scalability and causes catastrophic forgetting.
                </p>
              </div>

              <div class="border-l-2 border-orange-500 pl-4">
                <h3 class="text-base font-semibold text-gray-900 mb-2">Unstructured Storage</h3>
                <p class="text-sm text-gray-700 leading-relaxed">
                  Raw data logs in RAG-style systems lead to inefficient retrieval and redundancy.
                </p>
              </div>

              <div class="border-l-2 border-yellow-500 pl-4">
                <h3 class="text-base font-semibold text-gray-900 mb-2">Modality Silos</h3>
                <p class="text-sm text-gray-700 leading-relaxed">
                  Text-centric memory fails to align visual, auditory, and linguistic information.
                </p>
              </div>
            </div>

            <p class="text-sm text-gray-700 italic border-l-2 border-blue-500 pl-4 py-2">
              MemVerse overcomes these by unifying complementary memory mechanisms, mirroring the "fast and slow thinking" of human cognition.
            </p>
          </section>

          <!-- Technical Architecture -->
          <section class="mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Technical Architecture</h2>
            <p class="text-sm text-gray-600 mb-6">
              MemVerse's design integrates three core memory components, coordinated by a central orchestrator.
            </p>

            <!-- Architecture Image -->
            <div class="mb-6">
              <img 
                src="https://dw2283.github.io/memweb/research/architecture.png" 
                alt="MemVerse Architecture" 
                class="w-full h-auto"
                @error="handleImageError"
              />
              <p class="text-xs text-gray-500 mt-2 text-center">
                Figure 2: MemVerse's unified memory framework (from paper)
              </p>
            </div>

            <div class="space-y-6">
              <!-- Hierarchical Retrieval-Based Memory -->
              <div>
                <h3 class="text-base font-semibold text-gray-900 mb-3">Hierarchical Retrieval-Based Memory</h3>
                <div class="space-y-3 text-sm text-gray-700">
                  <div>
                    <strong class="text-gray-900">Short-Term Memory (STM):</strong>
                    <p class="mt-1">Caches recent conversational context (sliding window) to avoid redundant long-term storage updates.</p>
                  </div>
                  <div>
                    <strong class="text-gray-900">Long-Term Memory (LTM):</strong>
                    <p class="mt-1">Structures multimodal experiences into three specialized knowledge graphs:</p>
                    <ul class="list-disc pl-5 mt-2 space-y-1">
                      <li><strong>Core Memory:</strong> User-specific facts and preferences</li>
                      <li><strong>Episodic Memory:</strong> Time-ordered event logs</li>
                      <li><strong>Semantic Memory:</strong> Generalizable concepts and entity relationships</li>
                    </ul>
                  </div>
                  <div>
                    <strong class="text-gray-900">Multimodal Processing:</strong>
                    <p class="mt-1">Converts images, audio, and video into aligned textual representations, linking symbolic knowledge back to original sensory data.</p>
                  </div>
                </div>
              </div>

              <!-- Parametric Memory -->
              <div>
                <h3 class="text-base font-semibold text-gray-900 mb-3">Parametric Memory</h3>
                <p class="text-sm text-gray-700 mb-3">
                  A lightweight neural model (7B-scale transformer) that:
                </p>
                <ul class="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                  <li>Periodically distills essential knowledge from LTM via supervised fine-tuning</li>
                  <li>Enables fast, differentiable recall (89% faster than RAG) while preserving accuracy</li>
                  <li>Dynamically expands with new knowledge without full model retraining</li>
                </ul>
              </div>

              <!-- Memory Orchestrator -->
              <div>
                <h3 class="text-base font-semibold text-gray-900 mb-3">Memory Orchestrator</h3>
                <p class="text-sm text-gray-700">
                  A rule-based controller that manages storage, retrieval, and integration across STM, LTM, and parametric memory—no additional trainable parameters required.
                </p>
              </div>
            </div>
          </section>

          <!-- Key Results -->
          <section class="mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Key Results</h2>
            <p class="text-sm text-gray-600 mb-6">
              MemVerse outperforms state-of-the-art models across diverse multimodal benchmarks.
            </p>

            <!-- Benchmark Results Table -->
            <div class="border overflow-hidden mb-6">
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-4 py-2 text-left font-semibold text-gray-900">Benchmark</th>
                      <th class="px-4 py-2 text-left font-semibold text-gray-900">Key Metric</th>
                      <th class="px-4 py-2 text-left font-semibold text-gray-900">MemVerse Performance</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr>
                      <td class="px-4 py-2 font-medium text-gray-900">ScienceQA</td>
                      <td class="px-4 py-2 text-gray-700">Average Accuracy</td>
                      <td class="px-4 py-2 font-semibold text-green-600">85.48% (SOTA)</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="px-4 py-2 font-medium text-gray-900">LoCoMo</td>
                      <td class="px-4 py-2 text-gray-700">Overall F1</td>
                      <td class="px-4 py-2 font-semibold text-green-600">24.7 (Top 1)</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2 font-medium text-gray-900">ScienceQA</td>
                      <td class="px-4 py-2 text-gray-700">Query Time</td>
                      <td class="px-4 py-2 font-semibold text-blue-600">2.28s (89% faster than RAG)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </section>

          <!-- Core Contributions -->
          <section class="mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Core Contributions</h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-base font-semibold text-gray-900 mb-2">Unified Memory Interface</h3>
                <p class="text-sm text-gray-700 leading-relaxed">
                  Plug-and-play design works with any LLM/VLM, no model retraining required.
                </p>
              </div>

              <div>
                <h3 class="text-base font-semibold text-gray-900 mb-2">Structured Multimodal Knowledge</h3>
                <p class="text-sm text-gray-700 leading-relaxed">
                  Hierarchical knowledge graphs transform raw data into actionable, interpretable memory.
                </p>
              </div>

              <div>
                <h3 class="text-base font-semibold text-gray-900 mb-2">Efficient Dual-Path Recall</h3>
                <p class="text-sm text-gray-700 leading-relaxed">
                  Periodic distillation balances fast parametric access and deep retrieval-based reasoning.
                </p>
              </div>

              <div>
                <h3 class="text-base font-semibold text-gray-900 mb-2">Lifelong Learning Support</h3>
                <p class="text-sm text-gray-700 leading-relaxed">
                  Adaptive forgetting and bounded growth prevent redundancy and catastrophic forgetting.
                </p>
              </div>
            </div>
          </section>
          </template>
        </div>
      </div>
    </article>

    <!-- Back Button -->
    <section class="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 bg-white border-t">
      <div class="max-w-4xl mx-auto">
        <BaseButton size="large" @click="goBack" class="border border-gray-300">
          <el-icon class="mr-2"><i-ep-arrow-left /></el-icon>
          Back to Research
        </BaseButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import BaseButton from '@/components/base/BaseButton.vue'

const router = useRouter()
const route = useRoute()

interface Blog {
  title: string
  summary: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image?: string
  arxiv?: string
  videoUrl?: string
  resultsImage?: string
  github?: string
}

const blogs = [
  {
    title: 'How Memverse Enhances Your AI Agents',
    summary: 'A model-agnostic, plug-and-play memory framework that equips AI agents with lifelong multimodal learning capabilities.',
    date: '2025',
    readTime: '15 min read',
    category: 'Research Paper',
    tags: ['Memory Systems', 'Multimodal AI', 'Lifelong Learning'],
    image: 'https://dw2283.github.io/memweb/research/architecture.png',
    arxiv: 'https://arxiv.org/pdf/2510.24168',
    github: 'https://github.com/MintyCo0kie/MGA4OSWorld',
    videoUrl: undefined,
    resultsImage: undefined
  },
  {
    title: 'Application: How Memverse Enhances GUI Agent',
    summary: 'A memory-driven GUI agent framework that enables observation-centric interaction with graphical user interfaces. MGA leverages persistent memory to remember UI patterns, user preferences, and interaction history for efficient task automation.',
    date: '2025',
    readTime: '12 min read',
    category: 'Research Paper',
    tags: ['GUI Agent', 'Memory Systems', 'Automation'],
    image: undefined,
    arxiv: 'https://arxiv.org/pdf/2510.24168',
    github: 'https://github.com/MintyCo0kie/MGA4OSWorld',
    resultsImage: '/mga-res.PNG'
  }
]

const blogId = computed(() => {
  const id = route.params.id
  return id ? parseInt(id as string) : 0
})

const currentBlog = computed(() => {
  return blogs[blogId.value] || blogs[0]
})

function goBack() {
  router.push('/research')
}

function handleImageError(event: Event) {
  const img = event.target as HTMLImageElement
  img.style.display = 'none'
}
</script>

