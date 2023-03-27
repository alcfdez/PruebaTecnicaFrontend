<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FirtsCard from './components/FirtsCard.vue';
import { usePodcastStore } from './stores/storePodcast'
;
import { onBeforeMount } from "vue";

const store = usePodcastStore();

onBeforeMount(async() =>{
  await store.fetchPodcast();
});
</script>

<template>
  

  <div
  class="content-podcast"
  v-for="podcast in store.podcast"
  :key="podcast">

  <FirtsCard
  :id="podcast.id"
  :image="podcast.image"
  :name="podcast.name"
  />
  </div>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Podcast">Podcast Detail</RouterLink>
        <RouterLink to="/Title">Title Detail</RouterLink> -->
    

  <RouterView />
</template>

<style scoped>
</style>

