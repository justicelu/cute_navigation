<template>
  <div name="sentence">
    <div class="sentence_box">
      <div class="sentence_msg">{{ msg }}</div>
      <div class="sentence_from">
        {{ "—— \xa0\xa0" + from }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sentence.",
  data() {
    return {
      msg: "你所期待的一切终将遇见ヾ(≧▽≦*)o",
      from: "今天记得午休",
    };
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style scoped >
.sentence_box {
  position: absolute;
  bottom: 3%;
  left: 48%;

  transform: translateX(-50%);
}
.sentence_msg {
  font-size: 14px;
}
.sentence_from {
  margin-top: 10px;
  text-align: right;
  font-size: 9px;
  transform: translateX(30%);
}
</style>
