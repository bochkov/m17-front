<template>
  <div id="tech">
    <img class="logo-50" alt="M17 logo" :src="srcof()" />
    <p/>
    Раздел в разработке
  </div>
</template>

<script>
export default {
  methods: {
    srcof: function() {
      var dt = new Date();
      // 0 - jan
      // 1 - feb
      // 2 - mar
      console.log(dt.getMonth());
      if (dt.getMonth() == 0 || dt.getMonth() == 1 || dt.getMonth() == 11)
        return "/static/logo_winter.jpg";
      if (dt.getMonth() == 2 || dt.getMonth() == 3 || dt.getMonth() == 4)
        return "/static/logo_main.jpg"; // spring
      if (dt.getMonth() == 5 || dt.getMonth() == 6 || dt.getMonth() == 7)
        return "/static/logo_main.jpg"; // summer
      if (dt.getMonth() == 8 || dt.getMonth() == 9 || dt.getMonth() == 10)
        return "/static/logo_main.jpg"; // autumn

      return "/static/logo_main.jpg";
    }
  }
};
</script>

<style scoped>
</style>
