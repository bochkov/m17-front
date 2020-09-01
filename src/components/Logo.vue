<template>
<img class="logo-50" alt="M17 logo" :src="srcof()" />
</template>

<script>
export default {
  methods: {
    srcof: function() {
      var dt = new Date();
      // 0 - jan
      // 1 - feb
      // 2 - mar
      if (dt.getMonth() == 0 || dt.getMonth() == 1 || dt.getMonth() == 11) {
        if ((dt.getMonth() == 11 && dt.getDate() > 20) || (dt.getMonth() == 0 && dt.getDate() < 10))
          return "/static/logo_ny.jpg";
        return "/static/logo_winter.jpg";
      }
      if (dt.getMonth() == 2 || dt.getMonth() == 3 || dt.getMonth() == 4)
        return "/static/logo_spring.jpg"; // spring
      if (dt.getMonth() == 5 || dt.getMonth() == 6 || dt.getMonth() == 7)
        return "/static/logo_main.jpg"; // summer
      if (dt.getMonth() == 8 || dt.getMonth() == 9 || dt.getMonth() == 10)
        return "/static/logo_autumn.jpg"; // autumn

      return "/static/logo_main.jpg";
    }
  }
};
</script>

<style scoped>
</style>
