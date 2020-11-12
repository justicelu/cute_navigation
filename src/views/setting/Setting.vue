<template>
  <div name="Setting">
    <div class="setting_box">
      <el-button
        @click="get_bgIMG()"
        class="setting_btn"
        size="medium"
        :icon="ico"
        circle
      ></el-button>
    </div>
  </div>
</template>


<script>
export default {
  name: "Setting",
  data() {
    return {
      time_out: "",
      ico: "el-icon-star-on",
      last_select_num: -1,
      str: [
        "https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture",
        "https://api.newview.top/wallpaper/?cid=&freq=0&resolution=__85",
        "http://api.btstu.cn/sjbz/?lx=dongman",
        "https://api.sunweihu.com/api/bing1/api.php",
        "http://api.btstu.cn/sjbz/?lx=suiji",
        "https://bing.ioliu.cn/v1/rand?w=1900&h=1200",
        "https://unsplash.it/1600/900?random",
        "https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture",
        "https://api.ixiaowai.cn/gqapi/gqapi.php",
        "http://api.btstu.cn/sjbz/?lx=meizi",
        "https://acg.xydwz.cn/api/api.php",
        "https://i.xinger.ink:4443/images.php",
        "https://bing.ioliu.cn/v1/rand?w=1600&h=900",
        "https://api.vvhan.com/api/acgimg",
        "http://api.nmb.show/xiaojiejie1.php",
        "https://api.nmb.show/1985acg.php",
        "http://api.nmb.show/xiaojiejie2.php",
      ],
    };
  },
  methods: {
    get_bgIMG() {
      let odk = Math.floor(Math.random() * this.str.length);

      if (odk !== this.last_select_num) {
        // 稍微优化了一下壁纸更换效果 有了过渡效果
        let img = new Image();
        img.src = this.str[odk];
        this.ico = "el-icon-more";
        img.onload = this.change_bgIMG(img, odk);
        // this.$message("当前的壁纸网站是第 :  " + odk + " 个 ");
      } else {
        this.get_bgIMG();
      }
    },
    change_bgIMG(img, odk) {
      document.getElementById("home").style.backgroundImage =
        "url(" + img.src + ")";
      // this.$message("当前的壁纸网站是第 :  " + odk + " 个 ");
      // clearTimeout(this.time_out);
      this.time_out = setTimeout((this.ico = "el-icon-star-on"), 2000);
      this.ico = "el-icon-star-on";
      this.last_select_num = odk;
    },
    // 实现数组的更换效果,为更换背景功能提供每次都是不同的数字的技术支持
    // limit_six_no_reapet_methods(array, num) {
    //   // 这里会产生一个随机数 x
    //   let x;
    //   let i,
    //     flag = true;
    //   for (i; i < array.length; i++) {
    //     if (array[i] === num) {
    //       //
    //     }
    //   }
    // },
    // 获取图片地址
    _getImgUrl(id) {
      // 这里路径必须是拼接出来的，不能写死成：return require(pic_name)
      return require("../../../public/img/ico_png/" + id + ".png");
      // return require(url);
    },
  },
  computed: {},
  created() {},
};
</script>

<style scoped >
.setting_box {
  position: absolute;
  bottom: 3%;
  left: 2.5%;
  /* padding: 10px; */
  /* background-color: tomato; */
  border-radius: 50%;
}
.setting_btn {
  /* padding: 10px; */
  width: 45px;
  height: 45px;
  border: unset;
  /* background-color: rgba(255, 255, 255, 0.075); */
  background-color: transparent;
  /* background-color: #fff; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
