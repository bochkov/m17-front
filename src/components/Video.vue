<template>
  <div id="videos">
    <el-row v-for="(video) in videos" :key="video.id" class="video-row">
      <el-col
        :xs="{span: 24, offset: 0}"
        :sm="{span: 24, offset: 0}"
        :md="{span: 20, offset: 2}"
        :lg="{span: 16, offset: 4}"
        :xl="{span: 10, offset: 7}"
      >
        <span v-html="video.iframe"></span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { axio } from "../App.vue";
import fitvids from "fitvids";
export default {
  created: function() {
    axio.get("/api/v1/videos").then((resp) => {
      this.videos = resp.data;
    });
  },
  updated: function() {
    fitvids({players: 'iframe[src*="//vk.com/"]'});
  },
  data() {
    return {
      videos: []
    };
  }
};
</script>

<style scoped>
.video-row {
  padding-bottom: 3em;
}
</style>
