<template>
  <div class="gigs">
    <h1>Ближайшие выступления</h1>
    <ul v-for="(gig) in gigs" :key="gig.id">
      <li>
        <span class="dt">{{gig.date}}, {{gig.time}}</span>
        <br>
        <span class="gig.text">{{gig.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Gigs",
  data: function() {
    return {
      gigs: [
        {
          id: "1",
          date: "3 февраля 2019",
          time: "19:00",
          text: 'Екатеринбург, Клуб "Дом печати", ул. Ленина, 49'
        },
        {
          id: "2",
          date: "9 февраля 2019",
          time: "19:00",
          text: 'Екатеринбург, "U-bar", ул. Добролюбова, 3В'
        }
      ]
    };
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
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
