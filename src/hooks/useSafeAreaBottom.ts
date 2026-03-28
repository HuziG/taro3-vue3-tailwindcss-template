import { ref } from 'vue'
import Taro, { useLoad } from '@tarojs/taro'

/**
 * 获取屏幕高度和安全区域底部的高度
 * @returns { screenHeight, safeAreaBottom }
 */
export default function useSafeAreaBottom() {
  const screenHeight = ref(0)
  const safeAreaBottom = ref(0)
  const safeAreaTop = ref(0)

  useLoad(() => {
    const sizeInfo = Taro.getSystemInfoSync()
    safeAreaTop.value = sizeInfo.safeArea?.top ? sizeInfo.safeArea.top : 0
    screenHeight.value = sizeInfo.screenHeight
    safeAreaBottom.value = sizeInfo.safeArea?.bottom
      ? sizeInfo.screenHeight - sizeInfo.safeArea.bottom
      : 0
  })

  return {
    screenHeight,
    safeAreaBottom,
    safeAreaTop,
  }
}
