<template>
  <div id="home">
    <!-- 天气栏 -->
    <transition name="transition_show">
      <Weather v-show="show_weather_card"></Weather>
    </transition>
    <!-- 头像栏 -->
    <Avatar></Avatar>

    <!-- 搜索栏 -->
    <Search_></Search_>
    <!-- 快捷导航栏 -->
    <transition name="transition_show">
      <NavCard_ v-show="show_nav_card"></NavCard_>
    </transition>

    <!-- 设置区 -->
    <Setting></Setting>
    <transition name="transition_show">
      <Sentence v-show="show_sentence"></Sentence>
    </transition>
    <Gamenav></Gamenav>
  </div>
</template>

<script>
import Search_ from "@/views/search/Search";
import NavCard_ from "@/views/nav_card/NavCard";
import Weather from "@/views/weather/Weather";
import Avatar from "@/views/avatar/Avatar";
import Setting from "@/views/setting/Setting";
import Gamenav from "@/views/setting/Game_nav";
import Sentence from "@/views/sentence/Sentence";
export default {
  components: {
    Search_,
    NavCard_,
    Weather,
    Avatar,
    Setting,
    Sentence,
    Gamenav,
  },
  data() {
    return {
      // 是否展示快捷导航区
      show_nav_card: true,
      show_weather_card: true,
      show_sentence: true,
      // 屏幕宽度和高度
      screenWidth: "",
      screenHeight: "",
    };
  },
  methods: {
    // 获取图片地址
    _getImgUrl(id) {
      // 这里路径必须是拼接出来的，不能写死成：return require(pic_name)
      return require("../../public/img/ico_png/" + id + ".png");
      // return require(url);
    },
    show_card_method() {
      if (this.screenWidth < 750 || this.screenHeight < 640) {
        this.show_nav_card = false;
      } else this.show_nav_card = true;
      if (this.screenWidth < 700 || this.screenHeight < 300) {
        this.show_weather_card = false;
      } else this.show_weather_card = true;
      if (this.screenWidth < 200 || this.screenHeight < 400) {
        this.show_sentence = false;
      } else this.show_sentence = true;
    },
  },
  created() {
    this.show_card_method();
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    this.show_card_method();
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        this.screenHeight = document.body.clientHeight;
        this.show_card_method();
      })();
    };
  },
};
</script>

<style scoped>
#home {
  width: 100%;
  height: 100%;
  /* background-image: url(https://api.sunweihu.com/api/bing1/api.php); */
  background-image: url("//www.bing.com/th?id=OHR.PiedmontRegion_ZH-CN9956166156_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=HpEdgeAn");
  /* background-image: url("https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBUpVFY.img"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  /* position: relative; */
  position: relative;
}

/* vue 过渡动画效果 */
.transition_show-enter {
  opacity: 0;
}

.transition_show-enter-active {
  transition: opacity 1s;
}

.transition_show-leave-to {
  opacity: 0;
}

.transition_show-leave-active {
  transition: opacity 0.5s;
}

/* 过度动画效果结束 */
</style>