<template>
  <div>
    <div v-for="(it) in members" :key="it.id">
      <div v-if="(it.order % 2) === 0">
        <el-row class="odd-row">
          <el-col class="text" :offset="4" :span="12">
            <h3>{{it.name}}</h3>
            {{it.text}}
          </el-col>
          <el-col :span="4" class="img-col">
            <img class="round-logo" :src="photo(it.id)">
          </el-col>
        </el-row>
      </div>
      <div v-else>
        <el-row class="even-row">
          <el-col :offset="4" :span="4" class="img-col">
            <img class="round-logo" :src="photo(it.id)">
          </el-col>
          <el-col class="text" :span="12">
            <h3>{{it.name}}</h3>
            {{it.text}}
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import {axio} from '../App.vue';

export default {
  methods: {
    photo: function(idx) {
      return this.photos.find(x => x.idx === idx).src;
    }
  },
  created: function() {
    axio.get("/api/v1/members").then(resp => {
      this.members = resp.data;
    });
  },
  data() {
    return {
      members: [],
      photos: [
        {
          idx: 1,
          src: require("@/assets/members/photo4.jpg")
        },
        {
          idx: 2,
          src: require("@/assets/members/photo5.jpg")
        },
        {
          idx: 3,
          src: require("@/assets/members/photo1.jpg")
        },
        {
          idx: 4,
          src: require("@/assets/members/photo2.jpg")
        },
        {
          idx: 5,
          src: require("@/assets/members/photo3.jpg")
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
}

.even-row {
  padding-bottom: 100px;
  text-align: left;
}

.odd-row {
  padding-bottom: 100px;
  text-align: right;
}

.img-col {
  padding-top: 2em;
}
</style>
