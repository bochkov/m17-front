<template>
  <div id="menu">
    <el-menu
      mode="horizontal"
      background-color="#040507"
      text-color="#FFFFFF"
      active-text-color="#FF0000"
      :router="true"
      :default-active="activeLink"
    >
      <el-menu-item
        class="hidden-md-and-up"
        v-for="(menu) in sortedmenu"
        :key="menu.id"
        :index="menu.index"
      >
        <font-awesome-icon :icon="menu.class"/>
      </el-menu-item>
      <el-menu-item
        class="hidden-sm-and-down"
        v-for="(menu) in sortedmenu"
        :key="100+menu.id"
        :index="menu.index"
      >{{menu.title}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  mounted: function() {
    this.activeLink = this.$route.path;
    if (this.activeLink == '/')
      this.$router.push('news');
  },
  computed: {
    sortedmenu: function() {
      return this.menus.slice().sort((a, b) => a.id - b.id);
    }
  },
  data() {
    return {
      activeLink: null,
      menus: [
        { id: 0, title: "Новости", index: "/news", class: "bullhorn"},
        { id: 1, title: "Афиша", index: "/gigs", class: "guitar" },
        // { id: 2, title: "Состав", index: "members", class: "fa fa-users" },
        { id: 3, title: "Музыка", index: "/music", class: "compact-disc" },
        // { id: 4, title: "Галерея", index: "gallery", class: "fas fa-camera-retro"},
        // { id: 5, title: "Видео", index: "video", class: "fas fa-video" },
        // { id: 6, title: "Ссылки", index: "links"},
        { id: 7, title: "Ресурсы", index: "/tech", class: "cog"},
      ]
    };
  },
  watch: {
    $route(to) {
      this.activeLink = to.path;
    }
  }
};
</script>

<style>
#menu {
  text-align: center;
}
#menu ul {
  display: inline-block;
  margin: 0;
  padding: 0;
}
#menu li {
  margin: 2px;
  padding: 5px 10px;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu-item {
  font-size: 1.5em;
}
.el-menu-item > i {
  font-size: 5vw;
}
</style>
