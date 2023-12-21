<template>
  <section class="result">
    <h3>Resultado</h3>
    <p>Conta</p>
    <strong> {{ getMoneyMask(store.billAmount) }}</strong>

    <p>Gorjeta</p>
    <strong> {{ getMoneyMask(store.tipAmount) }}</strong>

    <p>Total</p>
    <strong> {{ getMoneyMask(store.totalAmount) }}</strong>

    <p>por Pessoa</p>
    <strong> {{getMoneyMask(store.amountPerPerson)}}</strong>

    <p>em R$</p>
    <strong>{{ getMoneyRealMask(store.convertedAmount) }}</strong>
  </section>
</template>

<script setup>
import { tipStore } from '../stores';
const store = tipStore()

const props = defineProps(['currency'])

const getMoneyMask = (value) => parseFloat(value).toLocaleString('pt-BR', {
  style: 'currency',
  currency: props.currency,
});

const getMoneyRealMask = (value) => parseFloat(value).toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})


</script>