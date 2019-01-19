<template>
  <el-row>
    <el-col>
      <div class="hidden-sm-and-down">
        <el-carousel indicator-position="outside" height="550px">
          <el-carousel-item v-for="(image) in images" :key="image.idx">
            <img :src="image.src">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="hidden-md-and-up">
        <div class="img-list" v-for="(image) in images" :key="image.idx">
          <img :src="image.src">
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: require("@/assets/img/gal1.jpg"), idx: 1 },
        { src: require("@/assets/img/gal2.jpg"), idx: 2 },
        { src: require("@/assets/img/gal3.jpg"), idx: 3 },
        { src: require("@/assets/img/gal4.jpg"), idx: 4 }
      ]
    };
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
