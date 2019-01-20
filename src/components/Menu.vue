<template>
  <div id="menu">
    <el-menu
      mode="horizontal"
      default-active="news"
      background-color="#040507"
      text-color="#FFFFFF"
      active-text-color="#FF0000"
      router>
      <el-menu-item index="news">Новости</el-menu-item>
      <el-menu-item index="members">Состав</el-menu-item>
      <el-menu-item index="gallery">Галерея</el-menu-item>
      <el-menu-item index="video">Видео</el-menu-item>
      <el-menu-item index="links">Ссылки</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {};
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
</style>
