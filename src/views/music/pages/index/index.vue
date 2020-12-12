<template>
  <div name="index">
    <!-- <div id="leftBody">  </div>
<div id="rightBody"></div>
<div id="foot"></div> -->
  </div>
</template>

<script>
export default {
  name: "index",
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
#leftBody {
  position: absolute;
  top: 10vh;
  left: 0;
  height: 75vh;
  width: 20vw;
  background-color: cadetblue;
}
#rightBody {
  position: absolute;
  top: 10vh;
  left: 20vw;
  height: 75vh;
  width: 80vw;
  background-color: rgb(163, 191, 192);
}
#foot {
  position: absolute;
  top: 85vh;
  left: 0;
  width: 100vw;
  height: 15vh;
  background-color: chocolate;
}
</style>
