<template>
  <view :style="safeAreaStyle">
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import Taro from '@tarojs/taro'
import { onMounted, ref } from 'vue'

const safeAreaStyle = ref({})

onMounted(() => {
  Taro.getSystemInfo({
    success: (res) => {
      if (res.safeArea) {
        const { top, bottom, left, right } = res.safeArea
        safeAreaStyle.value = {
          paddingTop: `${top}px`,
          paddingBottom: `${res.windowHeight - bottom}px`,
          paddingLeft: `${left}px`,
          paddingRight: `${res.windowWidth - right}px`,
        }
      }
    },
  })
})
</script>

<style scoped>
view {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
