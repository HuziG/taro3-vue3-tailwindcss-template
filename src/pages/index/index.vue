<template>
  <HomeHeader :capsuleTop="capsuleTop" :capsuleHeight="capsuleHeight" />

  <view class="p-4">
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
    <view class="text-2xl font-bold">hello</view>
  </view> 
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useCounterStore } from '@/store'
import { HomeHeader } from '@/components'
import useCapsule from '@/hooks/useCapsule'

const { capsuleInfo } = useCapsule()
const capsuleTop = computed(() => capsuleInfo.value.top)
const capsuleHeight = computed(() => capsuleInfo.value.height)

const count = ref(0)

const countStore = useCounterStore()

const handleClick = () => {
  count.value++
}
</script>
