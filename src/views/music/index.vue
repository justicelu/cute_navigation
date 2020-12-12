<template>
  <div name="Music" id="music_all">
    <div id="music">
      <Head></Head>
      <!-- 路由占位符 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Head from "@/views/music/pages/components/head/Head.vue";
export default {
  name: "Music",
  components: {
    Head,
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
  background-color: rgb(83, 75, 64);
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
  background-color: #d9d9d9;
}
</style>
