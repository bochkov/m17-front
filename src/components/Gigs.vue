<template>
  <div class="gigs">
    <div v-if="isEmpty"></div>
    <div v-else>
      <img alt="M17 logo" src="@/assets/logo.jpg">
      <h1>Ближайшие выступления</h1>
      <el-row v-for="(gig) in gigs" :key="gig.id">
        <el-col :span="10" :offset="7">
          <div class="gig">
            <div class="gig-img">
              <a class="link-col" :href="gig.place.link" target="_blank">
                <img :src="img(gig.place)">
              </a>
            </div>
            <div class="gig-content">
              <span class="dt">{{gig.date|moment("LLLL")}}</span>
              <br>
              <span class="gig.text">
                <br>
                {{gig.place.name}}
                <br>
                {{gig.place.address}}
              </span>
            </div>
          </div>
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
    img: function(place) {
      let img;
      try {
        img = require("@/assets/place/" + place.id + ".png");
      } catch (ex) {
        //img = require("@/assets/place/empty.png");
        img = "https://via.placeholder.com/135x120.png/000000/FFFFFF/?text=" + place.name;
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
  height: 120px;
}
.el-row {
  padding-top: 3em;
}
.gig-img {
  float: left;
}
.gig-img img {
  display: block;
}
.gig-content {
  margin-left: 150px;
  vertical-align: baseline;
}
</style>
