<template>
  <div id="news">
    <img class="logo-50" alt="M17 logo" src="/static/logo_main.jpg">
    <el-row v-for="(n) in news" :key="n.id">
      <el-col
        :xs="24"
        :sm="{span: 16, offset: 4}"
        :md="{span: 16, offset: 4}"
        :lg="{span: 8, offset: 8}"
        :xl="{span: 8, offset: 8}"
      >
        <h2>{{n.title}}</h2>
        <p class="news_dt">{{n.dt|moment("from")}}</p>
        <p class="news_text" v-html="n.text"></p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { axio } from "../App.vue";
export default {
  name: "News",
  created: function() {
    axio.get("/api/v1/news").then(resp => (this.news = resp.data));
  },
  computed: {
    isEmpty: function() {
      return this.news.length === 0;
    }
  },
  data: function() {
    return {
      news: []
    };
  }
};
</script>

<style>
#news {
  font-family: "Oswald", Arial, Helvetica, sans-serif;
}

#news .news_dt {
  text-align: right;
  font-size: .8em;
}

#news .news_text {
  text-align: justify;
}

#news a {
  color: lightcoral;
}
</style>
