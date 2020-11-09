<template>
  <div id="app">
    <transition name="transition_show_all">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
/* vue 过渡动画效果 */
.transition_show_all-enter {
  opacity: 0;
}

.transition_show_all-enter-active {
  transition: opacity 1s;
}

.transition_show_all-leave-to {
  opacity: 0;
}

.transition_show_all-leave-active {
  transition: opacity 0.1s;
}

/* 过度动画效果结束 */
</style>
