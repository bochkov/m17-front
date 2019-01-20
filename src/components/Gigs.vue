<template>
  <div class="gigs">
    <img alt="M17 logo" src="@/assets/logo.jpg">
    <h1>Ближайшие выступления</h1>
    <ul v-for="(gig) in gigs" :key="gig.id">
      <li>
        <span class="dt">
          {{gig.date|moment("LLLL")}}
        </span>
        <br>
        <span class="gig.text">
          {{gig.place.name}}<br/>{{gig.place.address}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import {axio} from '../App.vue';
export default {
  name: "Gigs",
  created: function() {
    axio.get("/api/v1/gigs").then((resp) => this.gigs = resp.data);
  },
  data: function() {
    return {
      gigs: []
    };
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.dt {
  font-size: 1.2em;
}
</style>
