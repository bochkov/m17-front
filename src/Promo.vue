<template>
  <div id="app-promo">
  <MusicPromo />
  </div>
</template>

<script>
import axios from "axios";
import MusicPromo from "./components/MusicPromo.vue";

export const axio = axios.create({
});
export default {
  name: "promo",
  components: {
    MusicPromo,
  }
};
</script>

<style>
html {
  background: whitesmoke;
}
body {
  padding: 2em 0;
  margin: 0;
  width: 100%;
}
#app-promo {
  font-family: "Oswald", Impact, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0px;
  padding: 0px;
}
</style>
