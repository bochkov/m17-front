<template>
  <div id="app">
    <el-container>
      <el-header height="100%">
        <img class="round-logo" src="/static/header.jpg"/>
      </el-header>
      <el-main>
        <Menu />
        <div class="view">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer height="100%">
        <Contacts />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import Menu from "./components/Menu.vue";
import Contacts from "./components/Contacts.vue";

export const axio = axios.create({
});

export default {
  name: "app",
  components: {
    Menu,
    Contacts
  }
};
</script>

<style>
html {
  /* background: black; */
  background: #020304;
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
.logo-50 {
  max-width: 50%;
  height: auto;
}
.view {
  padding: 2.5em 0;
}
#app {
  font-family: "Oswald", Impact, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: aliceblue;
  margin: 0px;
  padding: 0px;
}

.fancy-line {
  margin: 5% 15%;
  display: block;
  border: none;
  color: gray;
  height: 1px;
  background: gray;
  background: -webkit-gradient(
    radial,
    50% 50%,
    0,
    50% 50%,
    350,
    from(#fff),
    to(#555)
  );
}
</style>
