<template>
  <div name="Music" id="music_all">
    <div id="shadedow">
      <div id="music">
        <Head></Head>
        <!-- 路由占位符 -->
        <router-view></router-view>
        <Foot></Foot>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/views/music/pages/components/head/Head.vue";
import Foot from "@/views/music/pages/components/foot/Foot.vue";
export default {
  name: "Music",
  components: {
    Head,
    Foot,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style scoped >
#music_all {
  width: 100%;
  height: 100%;
  background-image: url("https://api.sunweihu.com/api/bing1/api.php");
}
#shadedow {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.411);
}
#music {
  transform: translateY(-50%);
  margin: 0 auto;
  position: relative;
  top: 50%;
  left: 0;
  z-index: 999;
  width: 770px;
  height: 500px;
  /* 渐变色背景 */
  /* background-image: linear-gradient(to right, #7A88FF, #7AFFAF); */
  background-color: #ffffff;
}
</style>
