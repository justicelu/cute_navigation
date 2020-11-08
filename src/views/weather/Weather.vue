<template>
  <div name="Weather">
    <div class="weather_box">
      <span
        class="weather_box_image"
        :style="'background-image:' + 'url(' + getImgUrl(weather_icon) + ')'"
      ></span>
      <span class="weather_box_p">{{ weather_temperature + " ­°C" }}</span>
      <div class="time_block">
        <!-- {{ weather_icon }} -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Weather",
  data() {
    return {
      weather_icon: "qing",
      weather_data: {},
      weather_temperature: 0,
      // time_block_num: "1 2   :   0 0   :   1 1",
      dateNow: 0,
    };
  },
  methods: {
    // 获取天气状况
    async get_this_weather() {
      // 没有请求方法就是直接发送 axios 也就是 http 请求
      const { data: res } = await this.$http(
        "http://wthrcdn.etouch.cn/weather_mini?citykey=101180901"
      );
      this.weather_data = res.data.forecast[0];
      let high = res.data.forecast[0].high.match(/\d+(.\d+)?/g)[0];
      let low = res.data.forecast[0].low.match(/\d+(.\d+)?/g)[0];
      // 计算平均温度
      // this.weather_temperature = (parseInt(arr1) + parseInt(arr2)) / 2;
      this.weather_temperature = low + "~" + high;
      // console.log(parseInt(arr1));
      // console.log(this.weather_data);
      // console.log(arr1);
      // console.log(arr2);
      console.log(this.weather_temperature);
    },
    // 获取图片地址
    getImgUrl(id) {
      // 这里路径必须是拼接出来的，不能写死成：return require(pic_name)
      return require("../../../public/img/weather_ico/" + id + ".png");
      // return require(url);
    },
  },
  computed: {},
  created() {
    this.get_this_weather();
  },
  mounted() {
    // 时钟效果
    function time_ok(x) {
      return x > 10 ? x : "0" + x;
    }
    function block() {
      var timeInMs = Date.now();

      var date = new Date();
      var dateNow = new Array();
      dateNow[0] = date.getHours();
      dateNow[1] = date.getMinutes();
      dateNow[2] = date.getSeconds();
      var block = document.querySelector(".time_block");
      block.innerHTML =
        time_ok(dateNow[0]) +
        " : " +
        time_ok(dateNow[1]) +
        " : " +
        time_ok(dateNow[2]);
    }
    block(); //先调用一下以免卡时间
    setInterval(block, 1000); //这里调用的函数不需要括号,直接写函数名字即可
    //
  },
};
</script>
<style scoped >
.weather_box {
  width: 110px;
  height: 35px;
  float: left;
  margin: 2% 0 0 2%;
  /* background-color: turquoise; */
  position: relative;
}
.weather_box_image {
  display: inline-block;
  width: 35px;
  height: 35px;
  background-size: cover;
  background-position: center;
}
.weather_box_p {
  position: absolute;
  top: 4px;
  left: 42px;
  display: inline-block;
  width: 65x;
  height: 35px;
  text-align: 35px;
  line-height: 35px;
  color: gainsboro;
}
.time_block {
  position: absolute;
  top: 45px;
  left: 10%;
  font-size: 16px;
  font-family: "Microsoft Yahei";
  color: rgb(56, 55, 55);
}
</style>
