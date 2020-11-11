<template>
  <div id="Show ">
    <!-- 左侧沉浸式 -->
    <div @click="full_screen" class="test_box pointer_">
      <div
        class="img_box img_center"
        :style="'background-image:' + 'url(' + _getImgUrl('show') + ')'"
      ></div>
    </div>
    <!-- 右侧更新栏 -->
    <div class="reload_box pointer_" @click="relaod_show_box">
      <div
        class="img_box img_center"
        :style="'background-image:' + 'url(' + _getImgUrl('reload3') + ')'"
      ></div>
    </div>
    <!-- 左下返回键 -->
    <div class="back_home_box pointer_" @click="back_home_box">
      <div
        class="img_box img_center"
        :style="'background-image:' + 'url(' + _getImgUrl('home') + ')'"
      ></div>
    </div>
    <iframe
      name="Show_frame"
      :src="default_game"
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
      default_game: "https://www.webhek.com/misc-res/species-in-pieces/#",
      last_num: 0,
      isFullscreen: false,
      screenWidth: 0,
      screenHeight: 0,
      // https://theuselessweb.com/ 访问这个网站,可以随机出来很多好玩的小游戏
      game_List: [
        "https://www.webhek.com/misc-res/species-in-pieces/#",
        "https://www.webhek.com/misc-res/species-in-pieces/#",
        "https://29a.ch/sandbox/2011/neonflames/",
        "http://www.staggeringbeauty.com/",
        "https://fakeupdate.net/",
        "https://8zt.cc/index.html",
        "http://corndog.io/",
        "http://eelslap.com/",
        "https://jacksonpollock.org/",
        "https://cat-bounce.com/",
        "http://burymewithmymoney.com/",
        "http://www.koalastothemax.com/",
        "http://drawing.garden/",
        "http://weavesilk.com/",
        "http://www.blankwindows.com/",
        "http://buildshruggie.com/",
        "http://spaceis.cool/",
        "https://www.ascii-middle-finger.com/",
        "https://greatbignothing.com/",
        "http://wowenwilsonquiz.com/",
        "http://www.amialright.com/",
        "http://lacquerlacquer.com/",
      ],
    };
  },
  methods: {
    back_home_box() {
      this.$message.success({
        message: "即将返回 => 搜索页",
        duration: 1000,
      });
      clearTimeout(this.timer); //清除延迟执行

      this.timer = setTimeout(() => {
        //设置延迟执行
        this.$router.push("/home");
      }, 1000);
    },
    relaod_show_box() {
      this.game_api();
    },
    full_screen() {
      /**
       * 全屏事件
       */
      screenfull.toggle();
    },
    //
    // 更换游戏源
    game_api() {
      let odk = Math.floor(Math.random() * this.game_List.length);
      if (odk !== this.last_num) {
        this.default_game = this.game_List[odk];
        this.last_num = odk;
        // this.$message("当前的壁纸网站是第 :  " + odk + " 个 ");
      } else {
        this.game_api();
      }
    },
    // 获取图片地址
    _getImgUrl(id) {
      // 这里路径必须是拼接出来的，不能写死成：return require(pic_name)
      return require("../../../public/img/ico_png/" + id + ".png");
      // return require(url);
    },
  },
  computed: {},
  created() {
    this.game_api();
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
.reload_box {
  z-index: 5;
  width: 45px;
  height: 45px;
  padding: 5px;
  position: absolute;
  top: 2.5%;
  right: 1.5%;
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
  /* border-radius: 50%; */
}
.back_home_box {
  z-index: 5;
  width: 45px;
  height: 45px;
  padding: 5px;
  position: absolute;
  bottom: 2.5%;
  left: 1.5%;
}
.test_box :hover {
  background-color: rgb(240, 237, 233);
  transition: 0.25s;
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
