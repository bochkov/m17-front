<template>
  <div id="tech">
    <Logo />
    <p/>
    <a href="/static/assets/tech_rider.pdf" target="_blank">Технический райдер группы</a>
  </div>
</template>

<script>
import Logo from './Logo';
export default {
  name: "Tech",
  components: {
    Logo
  }
};
</script>

<style scoped>
#tech {
  font-family: "Oswald", Arial, Helvetica, sans-serif;
}

#news a, a:visited {
  color: lightcoral;
}
</style>
