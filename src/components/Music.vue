<template>
  <div id="music">
    <el-row type="flex" justify="center" v-for="music in musics" :key="music.id" class="link-col">
      <a :href="music.url" v-html="imgfor(music.id)"></a>
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
      musics: []
    };
  },
  methods: {
    imgfor(musid) {
      if (musid == 1) return "<img src='/static/logo/yandex-music.png'>";
      if (musid == 2) return "<img src='/static/logo/apple-music.png'>";
      if (musid == 3) return "<img src='/static/logo/spotify.png'>";
      if (musid == 4) return "<img src='/static/logo/google-play-badge.png'>";
    },
    yandex: function(musid) {
      return this.musics
        .find(x => x.id === musid)
        .links.find(x => x.provid === 1);
    },
    others: function(musid) {
      return this.musics
        .find(x => x.id === musid)
        .links.filter(x => x.provid !== 1);
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
  margin: 2em;
}
a > img {
  height: 50px;
}
</style>
