<template>
  <div name="Head" id="head">
    <div id="icon_title">
      <span
        class="el-icon-picture-outline-round icon_title_item icon_title_item1"
      >
      </span>
      <span class="icon_text icon_title_item icon_title_item2">网易云音乐</span>
    </div>
    <div id="function">
      <span
        class="el-icon-arrow-left function_item function_item_cricle"
      ></span>
      <span
        class="el-icon-arrow-right function_item function_item_cricle"
      ></span>

      <span class="function_item function_searchbox"
        ><span class="el-icon-search function_searchbox_icon"></span
        ><input type="text" class="function_searchbox_input"
      /></span>

      <span
        class="el-icon-microphone function_item function_item_cricle"
      ></span>
    </div>
    <div id="my">
      <el-avatar size="small" fit="full" :src="circleUrl" class="my_item">
      </el-avatar>
      <span class="my_item1 my_name">今天记得午休</span>
      <span class="el-icon-umbrella my_item"></span>
      <span class="el-icon-message my_item"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      circleUrl: "https://api.sunweihu.com/api/bing1/api.php",
    };
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style scoped >
#head {
  width: 100%;
  height: 45px;
  background-color: #dd001b;
}
#icon_title {
  float: left;
  width: 17%;
  height: 100%;
  margin-left: 1%;
  cursor: pointer;
}
.icon_title_item {
  /* width: 100%; */
  line-height: 100%;
  font-size: 18px;
  height: 70%;
  display: inline-block;
  margin-top: 9%;
  margin-left: 3%;
  color: aliceblue;
  font-family: Arial, Helvetica, sans-serif;
  /* background-color: antiquewhite; */
}
.icon_title_item1 {
  font-size: 22px;
}
.icon_title_item2 {
  transform: translateY(-2px);
}
#function {
  float: left;
  margin-left: 8%;
  width: 40%;
  height: 100%;
  /* background-color: aquamarine; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.function_item {
  line-height: 25px;
  text-align: center;
  display: inline-block;
  height: 60%;
  font-size: 16px;
  margin-left: 1%;
  cursor: pointer;
}
.function_item_cricle {
  width: 25px;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.849);
  background-color: rgba(0, 0, 0, 0.116);
}
.function_searchbox {
  /* background-color: darkcyan; */
  width: 200px;
  text-align: left;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.116);
}
.function_searchbox_icon {
  display: inline-block;
  margin-left: 3%;
  line-height: 20px;
  text-align: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.884);
  cursor: default;
}
.function_searchbox_input {
  transform: translateY(-1px);
  background-color: rgba(255, 255, 255, 0);
  border: none;
  text-indent: 0.3em;
  color: aliceblue;
  line-height: 20px;
}
#my {
  float: right;
  width: 30%;
  height: 100%;
  /* background-color: rgb(145, 137, 128); */
  display: flex;
  align-items: center;
  justify-content: center;
}
.my_item {
  margin-left: 7%;
  color: rgb(235, 235, 235);
  font-size: 18px;
}
.my_item1 {
  margin-left: 3%;
}
.my_name {
  color: whitesmoke;
  font-size: 13px;
}
.pointer {
  cursor: pointer;
}
</style>
