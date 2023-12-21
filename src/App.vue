<template>
  <div class="calculadora-gorjeta">
    <Header />
    <LeTip/>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import LeTip from './pages/LeTip.vue'

</script>

<style scoped>
.calculadora-gorjeta {
  background-color: #f7f7f7;
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 10% auto;
  border-radius: .5rem;
}
</style>