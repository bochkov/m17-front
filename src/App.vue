<template>
  <div id="app">
    <img alt="M17 logo" src="./assets/logo.jpg">
    <Gigs/>
    <Contacts/>
  </div>
</template>

<script>
import Gigs from "./components/Gigs.vue";
import Contacts from "./components/Contacts.vue";

export default {
  name: "app",
  components: {
    Gigs,
    Contacts
  }
};
</script>

<style>
html {
  background: #040507;
}
#app {
  font-family: Impact, 'Oswald', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: aliceblue;
  margin-top: 60px;
}
</style>
