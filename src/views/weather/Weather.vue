<template>
  <div name="Weather">
    <div class="weather_box">
      <transition name="el-fade-in-linear">
        <div class="little_msg_p" v-if="show_odk">{{ little_msg }}</div>
      </transition>
      <transition name="el-fade-in-linear">
        <div v-show="show_odk1">
          <span
            class="weather_box_image"
            :style="
              'background-image:' + 'url(' + getImgUrl(weather_icon) + ')'
            "
          ></span>
          <span class="weather_box_p">{{ weather_temperature + " ­°C" }}</span>
          <div class="time_block"></div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
</script>
<script>
export default {
  name: "Weather",
  data() {
    return {
      show_odk: true,
      show_odk1: false,
      // 温馨提示
      tittle: "多喝养生茶",
      weather_icon: "qing",
      weather_data: {},
      weather_temperature: 0,
      dateNow: 0,
    };
  },
  methods: {
    // 获取天气状况
    async get_this_weather() {
      // 没有请求方法就是直接发送 axios 也就是 http 请求  这里发送的是成都的
      // 城市代码 :   洛阳 101180901  成都
      const { data: res } = await this.$http(
        "http://wthrcdn.etouch.cn/weather_mini?citykey=101270101"
      );
      this.weather_data = res.data.forecast[0];
      let high = res.data.forecast[0].high.match(/\d+(.\d+)?/g)[0];
      let low = res.data.forecast[0].low.match(/\d+(.\d+)?/g)[0];
      // 计算平均温度
      console.log(res);
      // this.weather_temperature = (parseInt(arr1) + parseInt(arr2)) / 2;
      this.weather_temperature = low + "~" + high;
      // console.log(parseInt(arr1));
      this.tittle = res.data.ganmao;
      // console.log(res.data);
      this.weather_icon = this.get_weather_str(res.data.forecast[0].type);

      // console.log(this.get_weather_str(res.data.forecast[0].type));

      this.$message.warning(this.tittle);
      // console.log(arr1);
      // console.log(arr2);
      // console.log(this.weather_temperature);
    },
    // 根据获取的不同天气状况匹配不同的字段 比如 晴 就要匹配 qing 方便之后图片名的查找
    // 当然天气状况应该还有很多,但是这里先不不补全,主要我也不知道那么多......
    get_weather_str(str) {
      switch (str) {
        case "晴":
          return "qing";
        case "多云":
          return "duoyun";
        case "阴":
          return "yin";
        case "霾":
          return "mai";
        case "阵雨":
        case "小雨":
          return "xiaoyu";
      }
    },
    // 获取图片地址
    getImgUrl(id) {
      // 这里路径必须是拼接出来的，不能写死成：return require(pic_name)
      return require("../../../public/img/weather_ico/" + id + ".png");
      // return require(url);
    },
  },
  computed: {
    little_msg() {
      var hour = new Date().getHours();
      if (hour > 6 && hour < 11) {
        return "早安安";
      } else if (hour > 11 && hour < 15) {
        return "午好";
      } else if (hour > 15 && hour < 18) {
        return "下午好";
      } else return "晚好";
    },
  },
  created() {
    // this.$store.state.weather_block_use = true;
    // this.$message.info(this.$router.path);
    this.get_this_weather();
    setTimeout(() => (this.show_odk = false), 3000);
    setTimeout(() => (this.show_odk1 = true), 3200);
  },
  mounted() {
    // if (this.$store.state.weather_block_use === true) {
    //   // 时钟效果;
    //   function time_ok(x) {
    //     return x >= 10 ? x : "0" + x;
    //   }
    //   function block() {
    //     var timeInMs = Date.now();
    //     var date = new Date();
    //     var dateNow = new Array();
    //     dateNow[0] = date.getHours();
    //     dateNow[1] = date.getMinutes();
    //     dateNow[2] = date.getSeconds();
    //     var block = document.querySelector(".time_block");
    //     // 用 Html 写入无法读取 特殊字符,用 Text 写入就可以
    //     let time_str =
    //       time_ok(dateNow[0]) +
    //       " : " +
    //       time_ok(dateNow[1]) +
    //       " : " +
    //       time_ok(dateNow[2]);
    //     block.innerText = time_str ? time_str : "00 : 00 : 00";
    //   }
    //   block(); //先调用一下以免卡时间
    //   let time_back = setInterval(block, 1200); //这里调用的函数不需要括号,直接写函数名字即可
    //   //
    // }
  },
};
</script>
<style scoped >
#Weather {
  width: 150px;
  height: 40px;
}
.weather_box {
  width: 120px;
  height: 35px;
  float: left;
  margin: 2% 0 0 2%;
  /* background-color: turquoise; */
  position: relative;
}
.weather_box_image {
  position: absolute;
  top: 0px;
  left: 0px;
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
  width: 75x;
  height: 35px;
  text-align: 35px;
  line-height: 35px;
  font-size: 1em;
  color: rgb(255, 255, 255);
}
.time_block {
  position: absolute;
  top: 120%;
  left: 15%;
  font-size: 17px;
  font-family: "Microsoft Yahei";
  color: rgb(31, 30, 30);
  /* font-family: Segoe UI, Segoe UI Midlevel, Segoe WP, Arial, Sans-Serif; */
}
.little_msg_p {
  font-size: 22px;
  color: #ffffff;
  font-family: Segoe UI, Segoe UI Midlevel, Segoe WP, Arial, Sans-Serif;
}
</style>
