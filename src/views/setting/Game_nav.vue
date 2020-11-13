<template>
  <div name="Game_nav">
    <div class="game_nav_box" @click="push_game">
      <div
        class="game_nav_box_imgdiv"
        :style="'background-image:' + 'url(' + _getImgUrl('show') + ')'"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game_nav",
  data() {
    return {};
  },
  methods: {
    push_game() {
      this.$message.success({
        dangerouslyUseHTMLString: true,
        message:
          "<h3> 即将进入 => Showing ∞</h3><br/><br/><p>您将获得沉浸式的体验</p><br/><p>Esc或者点击左上角切换进入(退出)沉浸模式</p>",
      });
      clearTimeout(this.timer); //清除延迟执行

      this.timer = setTimeout(() => {
        //设置延迟执行
        this.$router.push("/show");
      }, 1300);
    },
    // 获取图片地址
    _getImgUrl(id) {
      // 这里路径必须是拼接出来的，不能写死成：return require(pic_name)
      return require("../../../public/img/ico_png/" + id + ".png");
      // return require(url);
    },
  },
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style scoped >
.game_nav_box {
  padding: 5px;
  /* width: 45px;
  height: 45px; */
  position: absolute;
  bottom: 3%;
  right: 2.5%;
  /* padding: 10px; */
  /* background-color: tomato; */
  border-radius: 50%;
  /* background-color: antiquewhite; */
  border-radius: 50%;
  cursor: pointer;
  transition: ease 0.3s;
}
.game_nav_box:hover {
  background-color: rgba(235, 253, 252, 0.815);
}

.game_nav_box_imgdiv {
  /* background-color: blue; */
  width: 35px;
  height: 35px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
