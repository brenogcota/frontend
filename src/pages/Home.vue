<script setup lang="ts">
import Header from '../components/Header.vue'
import InvestimentCalculator from '../components/InvestmentCalculator.vue'
</script>

<template>
  <div>
    <Header />

    <main class="bg-black py-20 px-5">
      <div class="md:mx-12 mx-3">
        <h1 class="text-3xl md:text-5xl text-white font-semibold mb-3">Simulador de investimento</h1>
        <h3 class="text-gray-500">Descubra o quanto você pode economizar.</h3>
      </div>
    </main>

    <div class="py-10 px-5">
      <div class="md:mx-12 mx-3">
        <InvestimentCalculator />
      </div>
    </div>

  </div>
</template>
