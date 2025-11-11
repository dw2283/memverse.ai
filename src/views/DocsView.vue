<template>
  <section class="max-w-3xl mx-auto px-4 py-16">
    <h1 class="text-3xl font-bold mb-6">Docs</h1>
    <VueMarkdownIt :source="md" class="prose max-w-none" />
  </section>
</template>

<script setup lang="ts">
import VueMarkdownIt from 'vue3-markdown-it'
const md = `
## Quick Start

Install dependencies and start:

\`\`\`bash
yarn
yarn dev
\`\`\`

### Deploy to GitHub Pages
Use the included GitHub Action. Set BASE_PATH to '/<repo-name>/'.
`
</script>


