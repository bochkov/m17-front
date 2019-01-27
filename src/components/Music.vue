<template>
  <div id="music">
    <el-row v-for="(music, index) in musics" :key="music.id">
      <!-- встройка от яндекса -->
      <el-row class="hidden-md-and-up ya-small">
        <span v-html="yandex(music.id).url"></span>
      </el-row>
      <el-row class="hidden-sm-and-down ya">
        <span v-html="yandex(music.id).url"></span>
      </el-row>
      <!-- все остальное - ссылками -->
      <el-row>
        <span class="link-col" v-for="link in others(music.id)" :key="link.id" v-html="repr(link.url)"></span>
      </el-row>
      <hr v-if="index !== last" class="fancy-line">
    </el-row>
  </div>
</template>

<script>
import { axio } from "../App.vue";
export default {
  name: "Music",
  created: function() {
    axio.get("/api/v1/musics").then(resp => (this.musics = resp.data));
  },
  computed: {
    last: function() {
      return Object.keys(this.musics).length - 1;
    }
  },
  data: function() {
    return {
      musics: [],
      spotify: require("@/assets/Spotify_Logo_RGB_White.png")
    };
  },
  methods: {
    yandex: function(musid) {
      return this.musics
        .find(x => x.id === musid)
        .links.find(x => x.provid === 1);
    },
    others: function(musid) {
      return this.musics
        .find(x => x.id === musid)
        .links.filter(x => x.provid !== 1);
    },
    repr: function(url) {
      return url.replace("$spotify", "<img src='" + this.spotify + "'/>");
    }
  }
};
</script>

<style>
.ya-small {
  height: 800px;
}
.ya {
  width: 700px;
  height: 450px;
  margin-left: auto;
  margin-right: auto;
}
.link-col {
  margin: 1%;
}
a > img {
  height: 30px;
}
</style>
