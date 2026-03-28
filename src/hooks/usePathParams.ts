import Taro from '@tarojs/taro'

export default function usePathParams() {
  const router = Taro.getCurrentInstance()
  const params = router?.router?.params || {}
  return params
}
