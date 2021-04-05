<template>
  <div name="index" id="index">
    <LeftSide></LeftSide>
    <router-view></router-view>
  </div>
</template>

<script>
import LeftSide from "@/views/music/pages/components/leftSide/LeftSide.vue";
export default {
  name: "index",
  components: {
    LeftSide,
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
#index {
  width: 100%;
  /* height: 70%; */
  background-color: rgb(119, 129, 128);
}
</style>
