<template>
  <div class="gigs">
    <div v-if="isEmpty">
      <Logo />
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
import Logo from "./Logo.vue";
export default {
  name: "Gigs",
  components: {
    Logo
  },
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
