<!--
 * @Author: your name
 * @Date: 2022-09-30 10:27:31
 * @LastEditors: your name
 * @LastEditTime: 2022-09-30 14:31:18
 * @Description: 
-->
<template>
  <view class="content">
    <uni-nav-bar
      dark
      :fixed="true"
      shadow
      background-color="#007AFF"
      status-bar
      left-text="返回"
      :title="title"
      @clickLeft="back"
    />
    <text>23323</text>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
const titleText:String = '223'
const back =()=>{
  console.log('返回')
}
</script>

<style>
/* .status_bar {
  height: var(--status-bar-height);
  width: 100%;
} */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
