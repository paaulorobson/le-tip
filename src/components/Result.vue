<template>
  <section class="result">
    <h3>Resultado</h3>
    <p>Conta</p>
    <strong> {{ filterFormatMoney(store.billAmount, props.currency) }}</strong>

    <p>Gorjeta</p>
    <strong> {{ filterFormatMoney(store.tipAmount, props.currency) }}</strong>

    <p>Total</p>
    <strong> {{ filterFormatMoney(store.totalAmount, props.currency) }}</strong>

    <p>por Pessoa</p>
    <strong> {{filterFormatMoney(store.amountPerPerson, props.currency)}}</strong>

    <p>em R$</p>
    <strong>{{ filterFormatMoneyBRL(store.convertedAmount) }}</strong>

    <div>
     <button  @click="toGoBack" v-if="isMobile" class="result__button"> Calcular gorjeta</button>
    </div>
  </section>
</template>

<script setup>
import { tipStore } from '../stores';
import { filterFormatMoney, filterFormatMoneyBRL } from '../utils/filters';
const store = tipStore()

const props = defineProps(['currency', 'isMobile'])

const emit = defineEmits(['back'])

const toGoBack = () => {
  emit('back');
}

</script>

<style scoped>
.result__button {
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