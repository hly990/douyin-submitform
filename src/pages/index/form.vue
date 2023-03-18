<template>
   <nut-form>
      <nut-form-item label="用户类型">
          <nut-radio-group v-model="basicData.type" direction="horizontal">
            <nut-radio label="1">我要卖药材</nut-radio>
            <nut-radio label="2">我要收购药材</nut-radio>
          </nut-radio-group>
      </nut-form-item>
      <nut-form-item label="姓名">
          <nut-input v-model="basicData.name"  class="nut-input-text" placeholder="请输入姓名" type="text" />
      </nut-form-item>
      <nut-form-item label="联系电话">
          <nut-input v-model="basicData.mobile"  class="nut-input-text" placeholder="请输入手机号"   type="text" />
      </nut-form-item>
      <nut-form-item label="需求">
          <nut-textarea  v-model="basicData.desc" placeholder="请输入需求" type="text" />
      </nut-form-item>
      <nut-row>
        <nut-col :span="8">
          <div class="flex-content">&nbsp;&nbsp;</div>
        </nut-col>
        <nut-col :span="8">
          <nut-button type="default" size="large" @click="handleSubmit">提交</nut-button>
        </nut-col>
        <nut-col :span="8">
          <div class="flex-content">&nbsp;&nbsp;</div>
        </nut-col>
      </nut-row>
  </nut-form>
   
</template>

<script>
import { ref,reactive } from 'vue';
import { request } from '@tarojs/taro';
import Taro from '@tarojs/taro';
import { navigateTo } from '@tarojs/router'
import { createApp } from 'vue';
import { Form, FormItem,Row, Col,Button  } from '@nutui/nutui-taro';

const app = createApp();
app.use(Form);
app.use(FormItem);
app.use(Row);
app.use(Col);
app.use(Button);


export default {
  setup() {
    const basicData = reactive({
      type: '',
      name: '',
      mobile: '',
      desc: ''
    });
    const handleSubmit = async () => {
      // TODO: 添加逻辑以将表单数据发送到服务器
      console.log('Type:', basicData.type);
      console.log('Name:', basicData.name);
      console.log('Mobile:', basicData.mobile);
      console.log('Description:', basicData.desc);

      try {
        // 设置 Bearer Token
        const token = 'ea61c17529764c6fa21ca260f8ebf1b29d14487406cee70286f7e9b958b07c3d12f9f670d895c0b8fb19ce636c3b9847ea51a830156b2cadfee092f5c2133765124bb1d32c7c2308c725e17aecf7dd54c72ecda48fcd364801bd943ab217dd501a08241cab001e425b75815ef1f31981511f1b49fa09dce86c560a6ba4c8aed7';

        //数据校验
        if (!basicData.name) {
          Taro.showToast({ title: '姓名不能为空', icon: 'none' });
          return;
        }

        if (!basicData.mobile) {
          Taro.showToast({ title: '手机号不能为空', icon: 'none' });
          return;
        }

        if (!isValidPhone(basicData.mobile)) {
          Taro.showToast({ title: '请输入有效的手机号', icon: 'none' });
          return;
        }

        const response = await request({
          url: 'http://localhost:1337/api/customers',
          method: 'POST',
          data: {
            data: {
                    type: basicData.type,
                    name: basicData.name,
                    mobile: basicData.mobile,
                    desc: basicData.desc,
                  },
          },
          header: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        // 提交成功后导航到成功页面
        Taro.navigateTo({ url: '/pages/index/result' });
        console.log('Form submitted successfully:', response);
        //清空form
        resetForm();
      } catch (error) {
        console.error('Error submitting form:', error);
      }

    };

    const isValidPhone = (phone) => {
      const pattern = /^1[3456789]\d{9}$/;
      console.log("into isValidPhone."+pattern.test(phone));
      return pattern.test(phone);
    }

    const resetForm = async () => {
      basicData.type='';
      basicData.name='';
      basicData.mobile='';
      basicData.desc='';
    }

    return {
            basicData,
            handleSubmit
          }
  },
};
</script>

<style>
.form-page {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
}

input,
textarea {
  border: 1px solid #ccc;
  padding: 5px;
}

.image-preview {
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-top: 10px;
}
</style>
