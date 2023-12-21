<template>
  <section class="result">
    <h3>Resultado</h3>
    <p>Conta</p>
    <strong><span>{{props.simbol}}</span> {{ store.billAmount }}</strong>

    <p>Gorjeta</p>
    <strong><span>{{props.simbol}}</span> {{ store.tipAmount }}</strong>

    <p>Total</p>
    <strong><span>{{props.simbol}}</span> {{ store.totalAmount }}</strong>

    <p>por Pessoa</p>
    <strong><span>{{props.simbol}}</span> {{store.amountPerPerson}}</strong>

    <p>em R$</p>
    <strong>R$ {{ store.convertedAmount }}</strong>
  </section>
</template>

<script setup>
import { tipStore } from '../stores';
const store = tipStore()

const props = defineProps(['simbol'])

</script>