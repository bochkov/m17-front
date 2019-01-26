<template>
  <div id="music">
    <el-row v-for="(music) in musics" :key="music.id">
      <!-- встройка от яндекса -->
      <el-row>
        <span v-html="yandex(music.id).url"></span>
      </el-row>
      <!-- все остальное - ссылками -->
      <el-row>
        <el-col class="link-col">
          <span v-for="link in others(music.id)" :key="link.id" v-html="repr(link.url)"></span>
        </el-col>
      </el-row>
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
.link-col > span {
  padding-left: 3em;
}
a > img {
  height: 30px;
}
</style>
