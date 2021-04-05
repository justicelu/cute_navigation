<template>
  <div name="ojbk" id="foot">
    <div id="music_detail">
      <el-avatar
        shape="square"
        :size="size"
        :src="squareUrl"
        class="music_detail_avatar pointer_"
      ></el-avatar>
      <div class="music_detail_text">
        <div class="music_detail_text_hidden">
          老男孩(电影原生,原声大碟,青春回忆)
        </div>
        <div class="music_detail_text2 pointer_">筷子兄弟</div>
      </div>
      <div class="el-icon-star-on music_detail_like pointer_"></div>
    </div>
    <div id="music_oking">
      <div class="music_oking_top">
        <div class="music_ok_item"><span class="el-icon-refresh"></span></div>
        <div class="music_ok_item">
          <span class="el-icon-d-arrow-left"></span>
        </div>
        <div class="music_ok_item_center">
          <div class="el-icon-video-pause"></div>
        </div>
        <div class="music_ok_item">
          <span class="el-icon-d-arrow-right"></span>
        </div>
        <div class="music_ok_item"><span class="el-icon-document"></span></div>
      </div>
      <div class="music_oking_bottom">
        <span>{{ time_all }}</span>
        <el-slider
          v-model="music_time"
          class="music_oking_bottom_slider"
          :show-tooltip="false"
        ></el-slider>
        <span>{{ time_now }}</span>
      </div>
    </div>
    <div id="music_setting">
      <div class="el-icon-bell music_setting_icon"></div>
      <el-slider
        v-model="value2"
        :show-tooltip="false"
        class="slider_sound"
      ></el-slider>
    </div>
  </div>
</template>

<script>
export default {
  name: "ojbk",
  data() {
    return {
      squareUrl: "https://api.sunweihu.com/api/bing1/api.php",
      value2: 59,
      time_all: "3:00",
      time_now: "1:00",
      music_time: 20,
    };
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style scoped >
#foot {
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f8;
  border-top: 1px solid #e1e1e1;
}
#music_detail {
  width: 200px;
  height: 100%;

  position: relative;
}
.music_detail_avatar {
  position: absolute;
  top: 9px;
  left: 6px;
}
.music_detail_text {
  position: absolute;
  top: 9px;
  left: 55px;
  font-size: 13px;
}
.music_detail_like {
  color: #dd001b;
  position: absolute;
  top: 9px;
  right: 5px;
  font-size: 17px;
  cursor: pointer;
}
.music_detail_text_hidden {
  max-width: 120px;
  /* background-color: wheat; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.music_detail_text2 {
  margin-left: 40px;
  width: 100px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  margin-top: 5px;
  font-size: 9px;
  /* color: rgb(85, 85, 85); */
}
#music_oking {
  width: calc(100% - 330px);
  height: 100%;
}
.music_oking_top {
  margin: 2px auto;
  width: 270px;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.music_ok_item {
  width: 20px;
  height: 20px;

  line-height: 20px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}
.music_ok_item span {
  transition: ease 0.2s;
}
.music_ok_item :hover {
  color: #dd001b;
}
.music_ok_item_center {
  margin-top: 1%;
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  background-color: rgba(192, 192, 192, 0.452);
  border-radius: 50%;
  transition: ease 0.3s;
}
.music_ok_item_center :hover {
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  background-color: rgba(192, 192, 192, 0.589);
  border-radius: 50%;
}
.music_oking_bottom {
  height: 40%;
  /* background-color: grey; */
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-20%);
}
.music_oking_bottom_slider {
  width: 320px;
  margin: 0 3%;
}
.music_oking_bottom span {
  color: #99999b;
  font-size: 10px;
}
#music_setting {
  width: 160px;
  height: 100%;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.music_setting_icon {
  margin-right: 4%;
  width: 30px;
  height: 30px;
  /* background-color: gold; */
  border-radius: 50%;
  line-height: 30px;
  text-align: center;
  font-size: 18px;
}
.slider_sound {
  width: 100px;
  height: 20px !important;
  transform: translateY(-45%);
}
</style>
