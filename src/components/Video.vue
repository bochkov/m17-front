<template>
  <div id="videos">
    <el-row v-for="(video) in videos" :key="video.id" class="video-row">
      <el-col :xs="{span: 24, offset: 0}">
        <span v-html="video.iframe"></span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { axio } from "../App.vue";
export default {
  created: function() {
    axio.get("/api/v1/videos").then(resp => (this.videos = resp.data));
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
