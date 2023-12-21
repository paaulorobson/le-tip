<template>
  <div class="letip">
    <main class="letip__content">
      <form class="letip__form" v-if="!result">
        <div class="letip__form-content">
          <div class="letip__form-wrapper--radio">
            <label>EUR</label><input type="radio" id="eur" v-model="selectedCurrency" value="EUR" class="letip__custom-radio">
            <input type="radio" id="usd" v-model="selectedCurrency" value="USD" class="letip__custom-radio"> <label for="usd">USD</label>
          </div>

          <div class="letip__form-wrapper">
            <label class="letip__form-label">Valor</label>
            <span>{{ simbol }}</span>
            <input type="number" v-model="billAmount" min="0" />  
          </div>  

          <div class="letip__form-wrapper">
            <p>Gorjeta: <span class="letip__form-value">{{ tipPercentage }}%</span></p>
            <div class="letip__form-row">
              <span>10</span>
              <input type="range" v-model="tipPercentage" min="10" max="20" />
              <span>20</span>
            </div>    
          </div> 
    
          <div class="letip__form-wrapper">
            <p>Pessoas: <span class="letip__form-value">{{ numberOfPeople }}</span></p>
            <div class="letip__form-row">
              <span>2</span>
              <input type="range" v-model="numberOfPeople" min="2" max="16" />
              <span>16</span>
            </div>
          </div>
        </div>
        <div>
          <button class="letip__form-button" v-if="isMobile" @click="toggleResult"> Ver resultado</button>
        </div>
      </form>
      <Result :currency="currency" :is-mobile="isMobile" @back="toggleResult" v-if="!isMobile || result"/>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, watch, watchEffect, onMounted } from 'vue';
import Result from '../components/Result.vue'
import { tipStore } from '../stores';

const store = tipStore()

onMounted(()=> {
  store.fetchExchangeRate()
  checkIfMobile();
  window.addEventListener('resize', checkIfMobile);
})

const isMobile = ref(false);
const result = ref(false);
const selectedCurrency = ref(store.selectedCurrency);
const billAmount = ref(store.billAmount);
const tipPercentage = ref(store.tipPercentage);
const numberOfPeople = ref(store.numberOfPeople);

watch(selectedCurrency, () => {
    store.setSelectedCurrency(selectedCurrency.value);
    store.fetchExchangeRate();
})

watchEffect(() => {
    store.setBillAmount(billAmount.value);
    store.setTipPercentage(tipPercentage.value);
    store.setNumberOfPeople(numberOfPeople.value);
    store.setConvertedAmount();
})

const currency = computed(()=> {
  return selectedCurrency.value === 'USD' ? 'USD' : 'EUR';
})

const simbol = computed(() => {
  return selectedCurrency.value === 'USD' ? 'US$' : '€';
})

const checkIfMobile = () => {
  isMobile.value = window.matchMedia('(max-width: 768px)').matches;
}

const toggleResult = () => {
  result.value = !result.value
}

</script>

<style scoped>
.letip__content {
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
  padding: 1.8rem;
  color: var(--vt-c-black);
}

.letip__form-wrapper {
  margin: .5rem 0;
}

.letip__form-wrapper--radio {
  display: flex;
  align-items: center;
  justify-content: center;
}

.letip__form-wrapper--radio > label {
  margin: 0 1%;
}

.letip__custom-radio {
  display: inline-block;
  text-align: center;
  -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 30px; 
    height: 30px;
    border: 1px solid #ccc;
    outline: none;
}

.letip__custom-radio:checked {
    background-color: #005cc8;
  }

.letip__custom-radio:checked + label:before {
  background-color: #005CC8;
  box-sizing: border-box;
  padding: 4px;
}

.letip__form-row {
  display: flex;
  align-items: center;
}

.letip__form-label {
  margin-right: .4rem;
}

.letip__form-value {
  font-weight: bold;
}

.letip__form-button {
  cursor: pointer;
  margin-top: 1rem;
  margin-left: 50%;
  width: 150px;
  background-color: #005CC8;
  border: none;
  height: 30px;
  border-radius: 8px;
  color: #fff;
}

</style>
