<template>
  <div class="contacts">
    <hr class="fancy-line">
    <el-row>
      <el-button circle>
        <a class="link" href="https://www.instagram.com/band_m17/" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
      </el-button>
      <el-button circle>
        <a class="link" href="https://vk.com/band_m17" target="_blank">
          <i class="fab fa-vk"></i>
        </a>
      </el-button>
      <el-button circle>
        <a class="link" href="mailto:band_m17@mail.ru">
          <i class="far fa-envelope"></i>
        </a>
      </el-button>
    </el-row>
    <el-row class="copy">&copy; 2019, M17</el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
  font-size: 1.7em;
  color: black;
}
.copy {
    padding-top: 20px;
    font-size: 0.7em;
    color: whitesmoke;
}
</style>
