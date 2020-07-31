<template>
  <div id="music">
    <div v-for="music in musics" :key="music.id" class="link-col">
      <span class="title">{{music.name}} ({{music.year}})</span>
      <br/>
      <img :src="cover(music.id)" width="200" height="200" />
      <br/>
      <span v-for="prov in music.links" :key="prov.id">
        <a :href="prov.url" target="_blank" v-html="imgfor(prov.id)"></a>
      </span>
    </div>
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
    cover(musid) {
      return '/static/music/' + musid + '.png'
    },
    imgfor(musid) {
      if (musid == 1) return "<img src='/static/logo/yandex-music.png'>";
      if (musid == 2) return "<img src='/static/logo/apple-music.svg'>";
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
.link-col > img {
  margin: 1em;
}
a > img {
  height: 30px;
  margin: 0.5em;
}
.title {
  font-size: 1.5em;
}
</style>
