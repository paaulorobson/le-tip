import { defineStore } from 'pinia';
import api from '../services/api';

export const tipStore = defineStore('tip', {
  state: () => {
    return {
      selectedCurrency: 'USD',
      quoteCurrency: 'BRL',
      billAmount: 0,
      tipPercentage: 10,
      numberOfPeople: 2,
      quoteValue: 1,
      convertedAmount: 0,
    }
  },

  getters: {
    tipAmount(state) { return Math.round(state.billAmount * (state.tipPercentage / 100)) * 100 / 100},
    totalAmount(state) { return state.billAmount + state.tipAmount },
    amountPerPerson(state) { return (state.totalAmount / state.numberOfPeople)},
  },

  actions: {
    setSelectedCurrency(value) {
      this.selectedCurrency = value
    },

    setBillAmount(value) {
      this.billAmount = value
    },

    setTipPercentage(value) {
      this.tipPercentage = value;
    },

    setNumberOfPeople(value) {
      this.numberOfPeople = value;
    },

    setConvertedAmount() {
      this.convertedAmount = (this.totalAmount * this.quoteValue).toFixed(2)
    },

    async fetchExchangeRate() {  
      const apiKey = "2523b3ed7455c90ae996ef8b";
      
      try {
        const response = await api.get(`/v6/${apiKey}/latest/${this.selectedCurrency}`);
        this.quoteValue = response.data.conversion_rates[this.quoteCurrency];
      } catch (err) {
        console.warn(err)
      }
    }
  }
})
