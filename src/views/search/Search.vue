<template>
  <div id="Search_">
    <!-- 最大的搜索基本框 -->
    <div class="search_box">
      <!-- placeholder就是不输入就是默认灰色文字,输入就会消失 -->
      <!-- spellcheck="false"去除检查拼写 -->
      <!-- 在最左边的搜索图标盒子 -->
      <div
        class="search_select_box left"
        @click="show_select_api"
        :style="'background-image:' + 'url(' + _getImgUrl(search_id) + ')'"
      >
        <!-- 切换不同搜索引擎的切换盒子 -->
        <transition name="transition_show">
          <div class="select_api_div" v-show="show_select_api_div">
            <div
              v-for="(item, i) in search_api"
              :key="item.url + i"
              class="li_select_api_div"
              @click.stop="click_li_select_spi_event(item)"
            >
              <!-- 给@click 事件 .stop 阻止冒泡事件的产生  -->
              <img :src="_getImgUrl(item.id)" width="100%" height="100%" />
            </div>
          </div>
        </transition>
      </div>
      <!-- 右边的搜索框 -->
      <div class="right">
        <input
          type="text"
          placeholder="开启慵懒散漫快乐生活(〃ω〃)"
          spellcheck="false"
          name="q"
          class="searck_input_key"
          autocomplete="off"
          autofocus
          v-model="searchInput"
          @keyup.enter="searchKey"
        />
        <!-- 将原先的静态搜索框优化为现在的可跳转搜索框 -->
        <input
          type="submit"
          value=""
          class="search_ok_button"
          @click="searchKey"
          :style="'background-image:' + 'url(' + _getImgUrl(sousuoIMG) + ')'"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search_",
  data() {
    return {
      // 默认的搜索图标
      sousuoIMG: "sousuo",
      // 默认的搜索引擎接口
      search_id: "bing",
      search_Logo: " #/img/ico_png/bing.png",
      // 正在使用的搜索接口
      searching_API: "https://cn.bing.com/search?q=",
      // 搜索框内容
      searchInput: "",
      // 是否展示切换搜索引擎
      show_select_api_div: false,
      // 现有的搜索引擎数据源
      search_api: [
        {
          id: "bing",
          name: "必应搜索",
          url: "#/img/ico_png/bing.png",
          api: "https://cn.bing.com/search?q=",
        },
        {
          id: "baidu",
          name: "百度搜索",
          url: "#/img/ico_png/baidu.png",
          api:
            "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=",
        },
        {
          id: "sougou",
          name: "搜狗搜索",
          url: "#/img/ico_png/sougou.png",
          api: "https://www.sogou.com/web?query=",
        },
        {
          id: "miji",
          name: "秘迹搜索",
          api: "https://mijisou.com/?q=",
        },
      ],
    };
  },
  methods: {
    // 切换搜索引擎接口事件
    click_li_select_spi_event(info) {
      this.$message.success({
        duration: 1000,
        message: "正在使用的搜索接口为 :  " + info.name,
      });
      // this.$message.success("正在使用的搜索接口为 :  " + info.name, 1500);
      this.searching_API = info.api;
      this.search_id = info.id;
      this.show_select_api_div = !this.show_select_api_div;
    },
    // 获取图片地址
    _getImgUrl(id) {
      // 这里路径必须是拼接出来的，不能写死成：return require(pic_name)
      return require("../../../public/img/ico_png/" + id + ".png");
      // return require(url);
    },
    show_select_api() {
      this.show_select_api_div = true;
      this.$message.warning({
        duration: 1000,
        message: "正在执行切换搜索引擎操作!",
      });
    },

    searchKey() {
      // if (event.keyCode == 13) {
      // 进行百度搜索跳转
      // window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + otext.value
      // bing
      if (this.searchInput.trim().length > 0) {
        // window.location.href = this.searching_API + this.searchInput;  在当前界面打开
        // 创建新标签页,并在新的窗口打开搜索内容,原小导航仍旧保留
        window.open(this.searching_API + this.searchInput, "_blank");
        // 打开后我们就清空搜索内容吧
        this.searchInput = "";
      } else {
        this.searchInput = "";
      }
    },
    // },
  },
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style scoped lang="sass">
.search_box
  width: 400px
  height: 45px
  background-color: rgb(255, 255, 255)
  border-radius: 8px
  margin: 0 auto
  margin-top: 12%

.search_select_box
  display: inline-block
  width: 39px
  height: 39px
  margin-top: 3px
  margin-left: 3px
  border-radius: 8px
  background-size: cover
  background-position: center
  cursor: pointer
  padding: 3px
  box-sizing: border-box
  box-shadow: 1px 1px 5px gainsboro

.select_api_div
  padding: 1px
  width: 200px
  /* height: 60px; */
  transform: translate(-8px, 40px)
  background-color: whitesmoke
  border-radius: 8px
  z-index: 10
  /* transform: translateZ(100); */

/* vue 过渡动画效果 */
.transition_show-enter
  opacity: 0

  &-active
    transition: opacity 1s

.transition_show-leave-to
  opacity: 0

.transition_show-leave-active
  transition: opacity 1s

/* 过度动画效果结束 */
.li_select_api_div
  display: inline-block
  width: 40px
  height: 40px
  /* background-color: gold; */
  margin: 5px

.searck_input_key
  margin-right: 10px
  transition: 0.5
  /* width: 355px; */
  width: 300px
  height: 45px
  border: 0
  border-radius: 8px
  outline: none
  text-align: left
  text-indent: 1em
  line-height: 45px
  font-size: 18px
  /*background-color: bisque; */
  background-color: rgba(255, 255, 255, 0)
  color: black
  -webkit-transition: 0.5
  -moz-transition: 0.5
  -ms-transition: 0.5
  -o-transition: 0.5

.search_ok_button
  /* object-fit: cover; */
  border: 0em
  background: rgba(255, 255, 255, 0)
  float: right
  border-radius: 8px
  margin-top: 2.5px
  margin-right: 2.5px
  width: 40px
  height: 40px
  -webkit-border-radius: 8px
  -moz-border-radius: 8px
  -ms-border-radius: 8px
  -o-border-radius: 8px
  // background-image: url(#/img/ico_png/sousuo.png)
  background-size: cover
  background-position: center
  cursor: pointer
  /*鼠标移上去变小手,变小手*/
  opacity: 0.9
  justify-content: center
  align-items: center
  transition: 0.5
  -webkit-transition: 0.5
  -moz-transition: 0.5
  -ms-transition: 0.5
  -o-transition: 0.5
</style>
