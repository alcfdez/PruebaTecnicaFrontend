import { ref } from 'vue'
import { defineStore } from 'pinia'


export const podcastStore = defineStore("podcast", () => {

  const podcast = ref([]);

  async function fetchPodcast() {
    const response = await fetch("https://pokeapi.https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json/api/v2/pokemon");
    const data = await response.json()
    this.podcast = data.results
    }
    
    return { podcast, fetchPodcast };
    
    
  })
  
  .then((res) => res.json())
  .then((data) => {
    this.characters = data;
    console.log(this.characters);
  });