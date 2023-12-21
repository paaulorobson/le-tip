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
  </section>
</template>

<script setup>
import { tipStore } from '../stores';
import { filterFormatMoney, filterFormatMoneyBRL } from '../utils/filters';
const store = tipStore()

const props = defineProps(['currency'])

</script>