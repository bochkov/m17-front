<template>
  <el-row>
    <el-col>
      <div class="hidden-sm-and-down">
        <el-carousel indicator-position="outside" height="550px">
          <el-carousel-item v-for="(image, index) in images" :key="index">
            <img :src="image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="hidden-md-and-up">
        <div class="img-list" v-for="(image, index) in images" :key="index">
          <img :src="image">
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { axio } from "../App.vue";
export default {
  created: function() {
    axio.get("/api/v1/gallery").then(resp => this.images = resp.data);
  },
  data() {
    return {
      images: []
    }
  }
};
</script>

<style>
.el-carousel__item {
  color: black;
  font-size: 18px;
  opacity: 0.75;
  line-height: 550px;
  margin: 0;
}

.img-list {
  margin: 40px 0;
  text-align: center;
  font-size: 0.9em;
}
.img-list img {
  width: 100%;
}
</style>
