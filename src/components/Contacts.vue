<template>
  <div class="contacts">
    <hr class="fancy-line">
    <el-row>
      <el-button circle>
        <a class="link" href="https://www.instagram.com/band_m17/" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram-square']"/>
        </a>
      </el-button>
      <el-button circle>
        <a class="link" href="https://vk.com/band_m17" target="_blank">
          <font-awesome-icon :icon="['fab', 'vk']" />
        </a>
      </el-button>
      <el-button circle>
        <a class="link" href="mailto:band_m17@mail.ru">
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </a>
      </el-button>
      <el-button circle>
        <a class="link" href="https://open.spotify.com/artist/60Utw1lKdWMXTWONojuscQ" target="_blank">
          <font-awesome-icon :icon="['fab', 'spotify']" />
        </a>
      </el-button>
      <el-button circle>
        <a class="link" href="https://music.apple.com/ru/artist/m17/1266716485" target="_blank">
          <img src="/static/logo/apple-music-black.svg" />
        </a>
      </el-button>
      <el-button circle>
        <a class="link" href="https://music.yandex.ru/artist/5259810" target="_blank">
          <img src="/static/logo/yandex-music.png" />
        </a>
      </el-button>
    </el-row>
    <el-row class="copy" v-html="year"></el-row>
  </div>
</template>

<script>
export default {
  computed: {
    year: function() {
      var ystr = "";
      var y = new Date().getFullYear();
      if (y > 2019) {
        ystr = " &ndash; " + y
      }
      return "&copy; 2019" + ystr + ", M17"
    }
  },
};
</script>

<style scoped>
.link {
  font-size: 1.7em;
  color: black;
}
.link > img {
  width: 0.9em;
}
.copy {
    padding-top: 20px;
    font-size: 0.7em;
    color: whitesmoke;
}
</style>
