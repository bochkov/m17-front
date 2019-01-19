<template>
  <div id="app">
    <el-container>
      <el-header height="913px">
      </el-header>
      <el-main>
        <Menu />
        <img alt="M17 logo" src="./assets/logo.jpg">
        <Gigs/>
        <Contacts/>
      </el-main>
      <el-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Gigs from "./components/Gigs.vue";
import Contacts from "./components/Contacts.vue";
import Gallery from "./components/Gallery.vue";

export default {
  name: "app",
  components: {
    Menu,
    Gigs,
    Gallery,
    Contacts
  }
};
</script>

<style>
html {
  background: #040507;
}
body {
  padding: 0;
  margin: 0;
}
.el-header {
  background-image: url("./assets/header.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  display: block;
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
