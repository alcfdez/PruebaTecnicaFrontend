<script setup>
const props = defineProps({
  title: {
    type: Number,
    default: null,
  },
});
console.log(props);
</script>

<template>
  <v-card class="card-container" max-width="344">
    <v-img
      class="rounded-circle"
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      width="150"
      height="150"
      cover
      :src="props.image"
      :alt="props.image"
    ></v-img>

    <v-card-title class="text-container">
      {{ props.name }} titulo
    </v-card-title>

    <v-card-subtitle> Author:NPR </v-card-subtitle>
  </v-card>
</template>

<style scoped>
.card-container {
  font-family: "Google Sans", Roboto, arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  
  .text-container {
    width: 100%;
    border: 1px solid black;
    height: 9rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
