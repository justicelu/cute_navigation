<template>
  <div id="Show ">
    <div @click="full_screen" class="test_box pointer_">
      <div
        class="img_box img_center"
        :style="'background-image:' + 'url(' + _getImgUrl('show') + ')'"
      ></div>
    </div>
    <iframe
      name="Show_frame"
      src="https://www.webhek.com/misc-res/species-in-pieces/#"
      :width="screenWidth + 'px'"
      :height="screenHeight + 'px'"
      scrolling="no"
      frameborder="no"
    ></iframe>
  </div>
</template>

<script>
// 全屏沉浸式 插件
import screenfull from "screenfull";

export default {
  name: "Show",
  data() {
    return {
      isFullscreen: false,
      screenWidth: 0,
      screenHeight: 0,
    };
  },
  methods: {
    full_screen() {
      /**
       * 全屏事件
       */
      screenfull.toggle();
    },
    //
    // 获取图片地址
    _getImgUrl(id) {
      // 这里路径必须是拼接出来的，不能写死成：return require(pic_name)
      return require("../../../public/img/ico_png/" + id + ".png");
      // return require(url);
    },
  },
  computed: {},
  created() {
    screenfull.toggle();
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        this.screenHeight = document.body.clientHeight;
      })();
    };
  },
  beforeDestroy() {},
};
</script>

<style scoped >
/* #Game {
  position: relative;

  width: 100%;
  max-height: 100%;
} */

#Show {
  display: block;
  width: 100%;
  height: 100%;
  /* background-image: url(https://api.sunweihu.com/api/bing1/api.php); */
  /* background-image: url("https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBUpVFY.img"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}
.test_box {
  z-index: 5;
  width: 45px;
  height: 45px;
  padding: 5px;
  position: absolute;
  top: 2.5%;
  left: 1.5%;
  /* background-color: antiquewhite; */
  border-radius: 50%;
}
.test_box :hover {
  background-color: rgb(240, 237, 233);
}
.img_box {
  /* padding: 5px; */
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 5px solid transparent;
  transition: 0.25s;
}
</style>
