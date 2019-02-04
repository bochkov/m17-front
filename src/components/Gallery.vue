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
        { src: require("@/assets/gallery/gal1.jpg"), idx: 1 },
        { src: require("@/assets/gallery/gal2.jpg"), idx: 2 },
        { src: require("@/assets/gallery/gal3.jpg"), idx: 3 },
        { src: require("@/assets/gallery/gal4.jpg"), idx: 4 },
        { src: require("@/assets/gallery/gal5.jpg"), idx: 5 },
        { src: require("@/assets/gallery/gal6.jpg"), idx: 6 },
        { src: require("@/assets/gallery/gal7.jpg"), idx: 7 },
        { src: require("@/assets/gallery/gal8.jpg"), idx: 8 },
        { src: require("@/assets/gallery/gal9.jpg"), idx: 9 },
        { src: require("@/assets/gallery/gal10.jpg"), idx: 10 },
        { src: require("@/assets/gallery/gal11.jpg"), idx: 11 },
        { src: require("@/assets/gallery/gal12.jpg"), idx: 12 },
        { src: require("@/assets/gallery/gal13.jpg"), idx: 13 },
        { src: require("@/assets/gallery/gal14.jpg"), idx: 14 },
        { src: require("@/assets/gallery/gal15.jpg"), idx: 15 },
        { src: require("@/assets/gallery/gal16.jpg"), idx: 16 },
        { src: require("@/assets/gallery/gal17.jpg"), idx: 17 },
        { src: require("@/assets/gallery/gal18.jpg"), idx: 18 },
        { src: require("@/assets/gallery/gal19.jpg"), idx: 19 },
        { src: require("@/assets/gallery/gal20.jpg"), idx: 20 },
        { src: require("@/assets/gallery/gal21.jpg"), idx: 21 },
        { src: require("@/assets/gallery/gal22.jpg"), idx: 22 },
        { src: require("@/assets/gallery/gal23.jpg"), idx: 23 }
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
