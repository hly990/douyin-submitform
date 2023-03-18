<template>
  <view class="container">
    <view class="success-wrapper">
      <view class="icon-wrapper">
        <icon type="success" size="60" color="#4CAF50"></icon>
      </view>
      <text class="success-text">表单提交成功！</text>
     
    </view>
  </view>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    
  },
});
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f5f4;
}

.success-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f5f4;
  /* border-radius: 8px; */
  padding: 24px;
  /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1); */
}

.icon-wrapper {
  margin-bottom: 16px;
}

.success-text {
  font-size: 18px;
  font-weight: bold;
  color: #4CAF50;
  margin-bottom: 24px;
}

.button-wrapper {
  width: 100%;
}
</style>
