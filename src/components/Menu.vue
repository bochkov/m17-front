<template>
  <div id="menu">
    <el-menu
      mode="horizontal"
      default-active="news"
      background-color="#040507"
      text-color="#FFFFFF"
      active-text-color="#FF0000"
      router
    >
      <el-menu-item
        class="hidden-md-and-up"
        v-for="(menu) in menus"
        :key="menu.id"
        :index="menu.index"
      >
        <i :class="menu.class"></i>
      </el-menu-item>
      <el-menu-item
        class="hidden-sm-and-down"
        v-for="(menu) in menus"
        :key="100+menu.id"
        :index="menu.index"
      >{{menu.title}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      menus: [
        {
          id: 0,
          title: "Новости",
          index: "news",
          class: "fas fa-microphone-alt"
        },
        { id: 1, title: "Состав", index: "members", class: "fa fa-users" },
        { id: 3, title: "Музыка", index: "music", class: "fas fa-guitar" },
        {
          id: 2,
          title: "Галерея",
          index: "gallery",
          class: "fas fa-camera-retro"
        },
        { id: 4, title: "Видео", index: "video", class: "fas fa-video" }
        // { id:5, title: "Ссылки", index: "links"},
      ]
    };
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
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu-item {
  font-size: 1.5em;
}
.el-menu-item > i {
  font-size: 3vw;
}
</style>
