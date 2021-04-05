<template>
  <div name="ojbk" id="LeftSide">
    <div class="all_marang">
      <!-- 头部 -->
      <div id="Side_Head">
        <div :class="[Side_Head_item, head_active == 1 ? 'head_active' : '']">
          发现音乐
        </div>
        <div class="Side_Head_item">视频</div>
        <div class="Side_Head_item">直播</div>
        <div class="Side_Head_item">私人FM</div>
      </div>
      <!-- 创建的歌单 -->
      <div>
        <div class="side_little_title">我创建的歌单</div>
        <div>
          <div class="my_music_item">
            <i class="el-icon-goblet-square-full"></i>
            <span class="my_music_item_text">我喜欢的音乐</span>
          </div>
          <div class="my_music_item">
            <i class="el-icon-goblet-square-full"></i>
            <span class="my_music_item_text">我喜欢的音乐</span>
          </div>
          <div class="my_music_item">
            <i class="el-icon-goblet-square-full"></i>
            <span class="my_music_item_text">我喜欢的音乐</span>
          </div>
          <div class="my_music_item">
            <i class="el-icon-goblet-square-full"></i>
            <span class="my_music_item_text">我喜欢的音乐</span>
          </div>
          <div class="my_music_item">
            <i class="el-icon-goblet-square-full"></i>
            <span class="my_music_item_text">我喜欢的音乐</span>
          </div>
          <div class="my_music_item">
            <i class="el-icon-goblet-square-full"></i>
            <span class="my_music_item_text">我喜欢的音乐</span>
          </div>
          <div class="my_music_item">
            <i class="el-icon-goblet-square-full"></i>
            <span class="my_music_item_text">我喜欢的音乐</span>
          </div>
        </div>
      </div>

      <!-- 收藏的歌单 -->
      <div id="Side_Body">
        <div class="side_little_title">我收藏的歌单</div>
        <div>
          <div class="my_music_item">
            <i class="el-icon-goblet-square-full"></i>
            <span class="my_music_item_text">我喜欢的音乐</span>
          </div>
          <div class="my_music_item">
            <i class="el-icon-goblet-square-full"></i>
            <span class="my_music_item_text">我喜欢的音乐</span>
          </div>
          <div class="my_music_item">
            <i class="el-icon-goblet-square-full"></i>
            <span class="my_music_item_text">我喜欢的音乐</span>
          </div>
          <div class="my_music_item">
            <i class="el-icon-goblet-square-full"></i>
            <span class="my_music_item_text">我喜欢的音乐</span>
          </div>
          <div class="my_music_item">
            <i class="el-icon-goblet-square-full"></i>
            <span class="my_music_item_text">我喜欢的音乐</span>
          </div>
          <div class="my_music_item">
            <i class="el-icon-goblet-square-full"></i>
            <span class="my_music_item_text">我喜欢的音乐</span>
          </div>
          <div class="my_music_item">
            <i class="el-icon-goblet-square-full"></i>
            <span class="my_music_item_text">我喜欢的音乐</span>
          </div>
          <div class="my_music_item">
            <i class="el-icon-goblet-square-full"></i>
            <span class="my_music_item_text">我喜欢的音乐</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ojbk",
  data() {
    return {
      head_active: 1,
    };
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style scoped >
#LeftSide {
  width: 150px;
  height: 395px;
  background-color: #ffffff;
  overflow-y: scroll;
}
/* 可以滚动但是不显示进度条 */
::-webkit-scrollbar {
  width: 0;
  height: 0;
  background-color: transparent;
}
.all_marang {
  margin: 5px 10px;
}
#Side_Head {
  width: 100%;
  height: 140px;
}
.Side_Head_item {
  height: 20px;
  line-height: 20px;
  background-color: white;
  padding: 5px 10px;
  margin: 5px 0;
  border-radius: 5px;
  font-size: 13px;
}
.Side_Head_item:hover {
  background-color: #f6f6f6;
}
.head_active {
  margin: 5px 0;
  font-size: 15px;
  font-weight: bold;
  height: 20px;
  line-height: 20px;
  background-color: #f6f6f6;
  padding: 5px 10px;

  border-radius: 5px;
}
/* 我创建的歌单区 */
.side_little_title {
  font-size: 11px;
  color: #a6a6a6;
  margin-top: 10px;
}
.my_music_item {
  margin-top: 10px;
  font-size: 14px;
}
.my_music_item_text {
  margin-left: 5px;
}
/* 我收藏的歌单区 */
</style>
