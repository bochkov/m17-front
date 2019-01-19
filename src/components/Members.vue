<template>
  <div>
    <el-row v-for="(it) in members" :key="it.idx">
      <el-col :span="4">
        <img class="round-logo" :src="photo(it.id)">
      </el-col>
      <el-col class="text" :span="20">
        <h3>{{it.name}}</h3>
        {{it.text}}
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

const axi = axios.create({
  baseURL: "http://127.0.0.1:5000"
});

export default {
  methods: {
    photo: function(idx) {
      return this.photos.find(x => x.idx === idx).src
    }
  },
  created: function() {
    axi.get("/api/v1/members").then((resp) => {
      this.members = resp.data;
    });
  },
  data() {
    return {
      members:[],
      photos: [
        {
          idx: 1,
          src: require("@/assets/img/photo4.jpg")
        },
        {
          idx: 2,
          src: require("@/assets/img/photo5.jpg")
        },
        {
          idx: 3,
          src: require("@/assets/img/photo1.jpg")
        },
        {
          idx: 4,
          src: require("@/assets/img/photo2.jpg")
        },
        {
          idx: 5,
          src: require("@/assets/img/photo3.jpg")
        }
      ]
    };
  }
};
</script>

<style>
.text {
  padding-left: 5em;
  padding-right: 5em;
  text-align: left;
}
</style>
