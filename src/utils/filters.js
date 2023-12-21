export const filterFormatMoney = (value, props) => parseFloat(value).toLocaleString('pt-BR', {
  style: 'currency',
  currency: props,
});

export const filterFormatMoneyBRL = (value) => parseFloat(value).toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});