<template>
  <section class="max-w-7xl mx-auto px-4 py-16">
    <h1 class="text-3xl font-bold mb-8">Pricing</h1>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="border rounded-xl p-6">
        <h3 class="font-semibold">Hobby</h3>
        <p class="text-3xl font-bold mt-2">$0</p>
        <ul class="mt-4 text-gray-600">
          <li>Basic features</li>
          <li>Community support</li>
        </ul>
        <BaseButton class="mt-6" type="primary">Choose</BaseButton>
      </div>
      <div class="border rounded-xl p-6">
        <h3 class="font-semibold">Pro</h3>
        <p class="text-3xl font-bold mt-2">$29</p>
        <ul class="mt-4 text-gray-600">
          <li>Advanced memory</li>
          <li>Observability</li>
        </ul>
        <BaseButton class="mt-6" type="primary">Choose</BaseButton>
      </div>
      <div class="border rounded-xl p-6">
        <h3 class="font-semibold">Enterprise</h3>
        <p class="text-3xl font-bold mt-2">Custom</p>
        <ul class="mt-4 text-gray-600">
          <li>On-prem / private cloud</li>
          <li>Compliance & SSO</li>
        </ul>
        <BaseButton class="mt-6" type="primary">Contact</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
</script>


