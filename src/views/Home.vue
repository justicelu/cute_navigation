<template>
  <div id="home">
    <Weather></Weather>
    <!-- <div class="avatar_div">
      <el-avatar size="50" :src="_getImgUrl('bing')"></el-avatar>
    </div> -->
    <Search_></Search_>
    <transition name="transition_show">
      <NavCard_ v-show="show_card"></NavCard_>
    </transition>
  </div>
</template>

<script>
import Search_ from "@/views/search/Search";
import NavCard_ from "@/views/nav_card/NavCard";
import Weather from "@/views/weather/Weather";
export default {
  components: {
    Search_,
    NavCard_,
    Weather,
  },
  data() {
    return {
      // 是否展示快捷导航区
      show_card: true,
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
    show_nav_card_method() {
      if (this.screenWidth < 700 || this.screenHeight < 600) {
        this.show_card = false;
      } else this.show_card = true;
    },
  },
  created() {
    this.show_nav_card_method();
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    this.show_nav_card_method();
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        this.screenHeight = document.body.clientHeight;
        this.show_nav_card_method();
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
  background-image: url("https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBUpVFY.img");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  /* position: relative; */
}
.avatar_div {
  margin: 2% 2%;
  float: right;
  border-radius: 50%;
  /* box-shadow: 1px 1px 5px rgba(245, 242, 242, 0.329); */
  cursor: pointer;
}

/* vue 过渡动画效果 */
.transition_show-enter {
  opacity: 0;
}

.transition_show-active {
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