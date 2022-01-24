<template>
  <div id="music" class="link-col">
    <img :src="cover(musics.id)" width="300" height="300" /><br/>
    <span v-for="prov in musics.links" :key="prov.provid">
      <a :href="prov.url" target="_blank" v-html="imgfor(prov.provid)">{{ prov }}</a>
    </span>
  </div>
</template>

<script>
import { axio } from "../Promo.vue";
export default {
  name: "MusicPromo",
  created: function() {
    axio.get("/api/v1/promo").then(resp => (this.musics = resp.data));
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
      if (musid == 1) return "<img src='/static/logo/yandex-music-color.png'>";
      if (musid == 2) return "<img src='/static/logo/apple-music-color.svg'>";
      if (musid == 3) return "<img src='/static/logo/spotify-color.png'>";
      if (musid == 4) return "<img src='/static/logo/youtube-color.svg'>";
      if (musid == 5) return "<img src='/static/logo/vk-color.svg'>";
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
  height: 40px;
  margin: 0.5em;
}
.title {
  font-size: 1.5em;
}
.title-year {
  font-size: 1.2em;
}
</style>
