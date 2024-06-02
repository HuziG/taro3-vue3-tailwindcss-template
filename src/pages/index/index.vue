<template>
  <SafeArea class="flex flex-col items-center justify-center">
    <view class="text-red-500"> 欢迎使用 NutUI 开发 Taro <Dongdong /> </view>
    <view>{{ count }}</view>
    <view>
      <nut-button type="primary" @click="handleClick"> Count++ </nut-button>
    </view>

    <view class="h-10"></view>

    <view>Store Count: {{ countStore.count }}</view>

    <view>
      <nut-button @click="countStore.increment"> Count++ </nut-button>
    </view>
  </SafeArea>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Dongdong } from '@nutui/icons-vue-taro'
import { SafeArea } from '@/components/SafeArea/index'
import { useCounterStore } from '@/store'

const count = ref(0)

const countStore = useCounterStore()

const handleClick = () => {
  count.value++
}
</script>
