<template>
  <div id="app">
    <el-container>
      <el-header height="100%">
        <img class="round-logo" src="./assets/header.jpg"/>
      </el-header>
      <el-main>
        <Menu />
        <div class="view">
          <router-view></router-view>
        </div>
        <Contacts />
      </el-main>
      <el-footer height="100%">
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import Menu from "./components/Menu.vue";
import Contacts from "./components/Contacts.vue";

export const axio = axios.create({
  // baseURL: "http://127.0.0.1:5000"
});

export default {
  name: "app",
  components: {
    Menu,
    Contacts
  },
  created: function() {
    this.$router.push('news');
  }
};
</script>

<style>
html {
  background: black;
}
body {
  padding: 2em 0;
  margin: 0;
  width: 100%;
}
.round-logo {
  border-radius: 50%;
  max-width: 100%;
  height: auto;
}
.view {
  padding: 2.5em 0;
}
#app {
  font-family: Impact, "Oswald", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: aliceblue;
  margin: 0px;
  padding: 0px;
}
</style>
