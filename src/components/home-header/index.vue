<template>
  <view
    id="workbench-header"
    class="fixed top-0 left-0 right-0 z-10 flex items-center justify-between bg-white px-2 pb-4"
    :style="{ paddingTop: capsuleTop + 'px' }"
  >
    <view class="flex items-center" :style="{ height: capsuleHeight + 'px' }">
      <view class="px-2 flex items-center">
        <image :src="miniAppLogo" class="w-8 h-8 rounded-full" />
        <text class="font-bold ml-3">手作收藏夹</text>
      </view>
    </view>
  </view>

  <view :style="{ height: headerPlaceholderHeight + 'px' }"></view>
</template>

<script lang="ts" setup>
import miniAppLogo from '@/assets/logo.png'
import Taro from '@tarojs/taro'
import { nextTick, ref, computed, onMounted } from 'vue'

const props = defineProps<{
  capsuleTop: number
  capsuleHeight: number
}>()

// 运行时测量 Header 的高度，用于给 fixed header 预留占位，避免遮挡网格内容
const headerMeasuredHeight = ref<number | null>(null)
const headerPlaceholderHeight = computed(() => {
  // 兜底：使用胶囊信息推导一个接近的值，避免首帧测量前为 0
  if (headerMeasuredHeight.value !== null) return headerMeasuredHeight.value
  return props.capsuleTop + props.capsuleHeight + 16
})

const measureHeaderHeight = async () => {
  // 确保 DOM 已更新后再测量
  await nextTick()

  try {
    Taro.createSelectorQuery()
      .select('#home-header')
      .boundingClientRect(rect => {
        const target = Array.isArray(rect) ? rect[0] : rect
        const height = (target as any)?.height
        if (typeof height === 'number' && height > 0) {
          headerMeasuredHeight.value = height
        }
      })
      .exec()
  } catch (e) {
    // 测量失败时继续使用兜底值
    console.warn('measureHeaderHeight failed', e)
  }
}

onMounted(() => {
  measureHeaderHeight()
})
</script>
