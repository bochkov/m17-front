<template>
  <div class="gigs">
    <div v-if="isEmpty">
      <img class="logo-50" alt="M17 logo" :src="srcof()" />
      <h3>Ближайших концертов пока не предвидится</h3>
    </div>
    <div v-else>
      <el-row v-for="(gig) in gigs" :key="gig.id">
        <el-col>
          <a class="link-col" :href="gig.place.link" target="_blank">
            <img :src="img(gig.place)" />
          </a>
        </el-col>
        <el-col>
          <span class="dt">{{gig.date|moment("LLLL")}}</span>
          <br />
          <span class="gig.text">
            <br />
            {{gig.place.name}}
            <br />
            {{gig.place.address}}
          </span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { axio } from "../App.vue";
export default {
  name: "Gigs",
  created: function() {
    axio.get("/api/v1/gigs").then(resp => (this.gigs = resp.data));
  },
  computed: {
    isEmpty: function() {
      return this.gigs.length === 0;
    }
  },
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
    },
    img: function(place) {
      let img;
      try {
        img = "/static/place/" + place.id + ".png";
      } catch (ex) {
        img = "/static/place/empty.png";
      }
      return img;
    }
  },
  data: function() {
    return {
      gigs: []
    };
  }
};
</script>

<style scoped>
.dt {
  font-size: 1.2em;
}
a > img {
  height: 60px;
}
.el-row {
  padding-top: 3em;
}
</style>
