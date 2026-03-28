<template>
  <view
    :class="icon"
    :style="{
      width: props.size + 'rpx',
      height: props.size + 'rpx',
      backgroundColor: props.color
    }"
  />
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 48
  },
  color: {
    type: String,
    default: "#333"
  }
});
</script>
