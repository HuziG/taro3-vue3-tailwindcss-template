import { ref } from "vue";
import Taro, { useDidShow, useLoad } from "@tarojs/taro";

/**
 * 胶囊按钮位置信息接口
 */
export interface CapsuleInfo {
  /** 胶囊按钮的上边界坐标 */
  top: number;
  /** 胶囊按钮的右边界坐标 */
  right: number;
  /** 胶囊按钮的下边界坐标 */
  bottom: number;
  /** 胶囊按钮的左边界坐标 */
  left: number;
  /** 胶囊按钮的宽度 */
  width: number;
  /** 胶囊按钮的高度 */
  height: number;
}

/**
 * 自定义导航栏配置信息
 */
export interface NavBarConfig {
  /** 导航栏高度（包含状态栏） */
  navBarHeight: number;
  /** 状态栏高度 */
  statusBarHeight: number;
  /** 胶囊按钮顶部距离 */
  capsuleTop: number;
  /** 胶囊按钮高度 */
  capsuleHeight: number;
  /** 胶囊按钮宽度 */
  capsuleWidth: number;
  /** 胶囊按钮右边距 */
  capsuleRight: number;
  /** 胶囊按钮与状态栏的间距 */
  capsuleMarginTop: number;
}

/**
 * 获取小程序胶囊按钮位置信息和自定义导航栏配置
 * @returns { capsuleInfo, navBarConfig }
 */
export default function useCapsule() {
  const capsuleInfo = ref<CapsuleInfo>({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const navBarConfig = ref<NavBarConfig>({
    navBarHeight: 0,
    statusBarHeight: 0,
    capsuleTop: 0,
    capsuleHeight: 0,
    capsuleWidth: 0,
    capsuleRight: 0,
    capsuleMarginTop: 0,
  });

  useDidShow(() => {
    try {
      // 获取胶囊按钮位置信息
      const menuButtonInfo = Taro.getMenuButtonBoundingClientRect();
      const systemInfo = Taro.getSystemInfoSync();

      // 保存胶囊按钮信息
      capsuleInfo.value = {
        top: menuButtonInfo.top,
        right: menuButtonInfo.right,
        bottom: menuButtonInfo.bottom,
        left: menuButtonInfo.left,
        width: menuButtonInfo.width,
        height: menuButtonInfo.height,
      };

      // 计算导航栏配置
      const statusBarHeight = systemInfo.statusBarHeight || 0;
      const capsuleTop = menuButtonInfo.top;
      const capsuleHeight = menuButtonInfo.height;
      const capsuleMarginTop = capsuleTop - statusBarHeight;

      // 导航栏高度 = 状态栏高度 + 胶囊按钮高度 + 胶囊按钮上下间距 * 2
      const navBarHeight =
        statusBarHeight + capsuleHeight + capsuleMarginTop * 2;

      navBarConfig.value = {
        navBarHeight,
        statusBarHeight,
        capsuleTop,
        capsuleHeight,
        capsuleWidth: menuButtonInfo.width,
        capsuleRight: systemInfo.screenWidth - menuButtonInfo.right,
        capsuleMarginTop,
      };
    } catch (error) {
      console.error("获取胶囊按钮信息失败:", error);
    }
  });

  return {
    capsuleInfo,
    navBarConfig,
  };
}
