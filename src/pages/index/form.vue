<template>
  <nut-config-provider>
    <nut-form class="custom-form">
        <nut-form-item class="custom-form-item" label="用户类型">
            <nut-radio-group v-model="basicData.type" direction="horizontal">
              <nut-radio class="custom-radio" label="1">我要卖药材</nut-radio>
              <nut-radio class="custom-radio" label="2">我要收购药材</nut-radio>
            </nut-radio-group>
        </nut-form-item>
        <nut-form-item class="custom-form-item" label="姓名">
            <nut-input class="nut-input-text" v-model="basicData.name"  placeholder="请输入姓名" type="text" />
        </nut-form-item>
        <nut-form-item class="custom-form-item" label="联系电话">
            <nut-input  class="nut-input-text" v-model="basicData.mobile"  placeholder="请输入手机号"   type="text" />
        </nut-form-item>
        <nut-form-item class="custom-form-item" label="需求">
            <nut-textarea  class="nut-textarea-text"  v-model="basicData.desc" placeholder="请输入需求" type="text" />
        </nut-form-item>
        <nut-row class="custom-form-item">
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
  </nut-config-provider>
</template>

<script>
import { ref,reactive } from 'vue';
import { request } from '@tarojs/taro';
import Taro from '@tarojs/taro';
import { navigateTo } from '@tarojs/router'
import { createApp } from 'vue';
import { ConfigProvider,Form, FormItem,Row, Col,Button  } from '@nutui/nutui-taro';

const app = createApp();
app.use(ConfigProvider);
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
          url: `${API_BASE_URL}/customers`,
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
            'Authorization': `Bearer ${TOKEN}`
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
.custom-form {
  width: 100%;
  height: 100vh;
  background: url('./bk1.png');
  background-image: url('./bk1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.custom-form-item  {
  background-image: url('./bk1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
}

.nut-form-item__label {
  color: #ffffff;
}

.custom-radio .nut-radio__label {
  color: #ffffff;
}

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
  font: #ccc;
}

.image-preview {
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-top: 10px;
}
</style>
