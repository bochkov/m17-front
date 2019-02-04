<template>
  <div>
    <div v-for="(it, index) in members" :key="it.id">
      <div class="hidden-sm-and-down">
        <div v-if="(it.order % 2) === 0">
          <el-row :gutter="30" class="even-row">
            <el-col class="text" :span="12" :offset="4">
              <h3>{{it.name}}</h3>
              {{it.text}}
            </el-col>
            <el-col class="img-col" :span="4">
              <img class="round-logo" :src="photo(it.id)">
            </el-col>
          </el-row>
        </div>
        <div v-else>
          <el-row :gutter="30" class="odd-row">
            <el-col :offset="4" :span="4" class="img-col">
              <img class="round-logo" :src="photo(it.id)">
            </el-col>
            <el-col class="text" :span="12">
              <h3>{{it.name}}</h3>
              {{it.text}}
            </el-col>
          </el-row>
        </div>
        <hr v-if="index !== last" class="fancy-line">
      </div>
      <div class="hidden-md-and-up">
        <el-row>
          <el-col>
            <img class="round-logo logo-50" :src="photo(it.id)">
          </el-col>
          <el-col class="text">
            <h3>{{it.name}}</h3>
            {{it.text}}
          </el-col>
        </el-row>
        <hr v-if="index !== last" class="fancy-line">
      </div>
    </div>
  </div>
</template>

<script>
import { axio } from "../App.vue";

export default {
  computed: {
    last: function() {
      return Object.keys(this.members).length - 1;
    }
  },
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
          src: "/static/members/photo4.jpg"
        },
        {
          idx: 2,
          src: "/static/members/photo5.jpg"
        },
        {
          idx: 3,
          src: "/static/members/photo1.jpg"
        },
        {
          idx: 4,
          src: "static/members/photo2.jpg"
        },
        {
          idx: 5,
          src: "static/members/photo3.jpg"
        }
      ]
    };
  }
};
</script>

<style>
.odd-row {
  text-align: left;
}
.even-row {
  text-align: right;
}
</style>
