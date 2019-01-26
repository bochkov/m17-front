<template>
  <div class="gigs">
    <div v-if="isEmpty"></div>
    <div v-else>
      <img alt="M17 logo" src="@/assets/logo.jpg">
      <h1>Ближайшие выступления</h1>
      <el-row v-for="(gig) in gigs" :key="gig.id">
        <el-col :offset="7" :span="2">
          <a class="link-col" :href="gig.place.link" target="_blank">
            <img :src="img(gig.place.id)">
          </a>
        </el-col>
        <el-col :span="8">
          <span class="dt">{{gig.date|moment("LLLL")}}</span>
          <br>
          <span class="gig.text">
            {{gig.place.name}}
            <br>
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
    img: function(id) {
      let img;
      try {
        img = require("@/assets/place/" + id + ".png");
      } catch (ex) {
        img = require("@/assets/place/empty.png");
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
  height: 100px;
}
.el-row {
  padding-top: 3em;
}
</style>
