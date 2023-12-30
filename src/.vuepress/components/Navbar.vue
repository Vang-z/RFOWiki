<script setup lang="ts">
import {ref, onMounted, nextTick, reactive} from "vue";
import {useRouter} from "vue-router";
import {Notification} from "@arco-design/web-vue";
import axios from "axios";
import {SpeedInsights} from "@vercel/speed-insights/vue"


const visible = ref(false);
const countDown = ref(60);
const form = reactive({
  account: null,
  password: null,
  password2: null,
  captcha: null,
});

const HOST = `https://api.rfo.wiki/api`;
// const HOST = `http://127.0.0.1:3000/api`;

const handleClick = () => {
  visible.value = true;
  form.account = null;
  form.password = null;
  form.password2 = null;
  form.captcha = null;
};

const handleRegister = () => {
  const account = form.account;
  const password = form.password;
  const password2 = form.password2;
  const captcha = form.captcha;
  if (!account || !password || !password2 || !captcha) {
    Notification.error({
      content: "注册失败，请核对注册信息👻",
      position: "bottomRight",
      duration: 5000
    });
    return;
  } else if (password.length < 6) {
    Notification.error({
      content: "注册失败，密码长度不少于6位👻",
      position: "bottomRight",
      duration: 5000
    });
    return;
  } else if (password !== password2) {
    Notification.error({
      content: "注册失败，密码与重复密码不一致👻",
      position: "bottomRight",
      duration: 5000
    });
    return;
  }

  let formData = new FormData();
  formData.append("username", btoa(account));
  formData.append("password", btoa(password));
  formData.append("captcha", btoa(captcha));
  axios({
    method: 'post',
    url: `${HOST}/v1/account`,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    data: formData
  }).then(res => {
    console.log(res)
    if (res.status === 201) {
      Notification.success({
        content: "注册成功，今天，也是充满希望的一天🌈",
        position: "bottomRight",
        duration: 5000
      });
      visible.value = false;
    } else if (res.status === 400) {
      Notification.error({
        content: "注册失败，请核对注册信息👻",
        position: "bottomRight",
        duration: 5000
      });
    } else {
      console.error(res);
      Notification.error({
        content: "未知错误，请联系管理员处理👻",
        position: "bottomRight",
        duration: 5000
      });
    }
  }).catch(err => {
    console.log(err)
    if (err.response.status === 400) {
      Notification.error({
        content: "注册失败，验证码错误或过期👻",
        position: "bottomRight",
        duration: 5000
      });
    } else if (err.response.status === 409) {
      Notification.error({
        content: "注册失败，该账号已注册，请直接登陆👻",
        position: "bottomRight",
        duration: 5000
      });
    } else {
      console.error(err);
      Notification.error({
        content: "未知错误，请联系管理员处理👻",
        position: "bottomRight",
        duration: 5000
      });
    }
  });
};

const handleSendCaptcha = () => {
  const qq = form.account;
  if (!qq) {
    Notification.error({
      content: "验证码发送失败，请确保账号对应的QQ等级大于48级👻",
      position: "bottomRight",
      duration: 5000
    });
    return;
  }

  axios({
    method: 'get',
    url: `${HOST}/v1/account/captcha/${btoa(qq)}`,
  }).then(res => {
    if (res.status === 200) {
      Notification.success({
        content: "验证码发送成功，请登录账号对应的QQ邮箱查收🌈",
        position: "bottomRight",
        duration: 5000
      });
      if (countDown.value == 60) {
        countDown.value--;
        const countDownInterval = setInterval(() => {
          countDown.value--;
          if (countDown.value <= 0) {
            countDown.value = 60;
            clearInterval(countDownInterval);
          }
        }, 1000);
      }
    } else if (res.status === 400) {
      Notification.error({
        content: "验证码发送失败，请确保账号对应的QQ等级大于48级👻",
        position: "bottomRight",
        duration: 5000
      });
    } else {
      console.error(res);
      Notification.error({
        content: "未知错误，请联系管理员处理👻",
        position: "bottomRight",
        duration: 5000
      });
    }
  }).catch(err => {
    if (err.response.status === 400) {
      Notification.error({
        content: "验证码发送失败，请确保账号对应的QQ等级大于48级👻",
        position: "bottomRight",
        duration: 5000
      });
    } else {
      console.error(err);
      Notification.error({
        content: "未知错误，请联系管理员处理👻",
        position: "bottomRight",
        duration: 5000
      });
    }
  });
}

const hookMenu = () => {
  const Win: any = window;
  clearInterval(Win.RegisterTimer);
  Win.RegisterTimer = setInterval(() => {
    const navRegisterElms = document.querySelectorAll('[aria-label="注册账号"]') as HTMLElement[];
    if (!navRegisterElms.length) return;
    navRegisterElms.forEach(navRegisterElm => {
      navRegisterElm.onclick = (event) => {
        event.preventDefault();
        handleClick();
      };
    })
  }, 100);
};


onMounted(() => {
  nextTick(() => {
    hookMenu();
  });
  const router = useRouter();
  router.afterEach(() => {
    nextTick(() => {
      hookMenu();
    });
  });
});

</script>

<template>
  <a-modal v-model:visible="visible" hide-cancel="hide-cancel" ok-text="注册" width="360px">
    <SpeedInsights/>
    <template #title>
      注册账号
    </template>
    <a-space direction="vertical">
      <a-space>
        <a-input-number v-model="form.account" :style="{width:'320px'}" placeholder="账号" hide-button allow-clear>
          <template #prefix>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"
                 class="arco-icon arco-icon-user" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter">
              <path d="M7 37c0-4.97 4.03-8 9-8h16c4.97 0 9 3.03 9 8v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3Z"></path>
              <circle cx="24" cy="15" r="8"></circle>
            </svg>
          </template>
        </a-input-number>
      </a-space>
      <a-space>
        <a-input-password v-model="form.password" :style="{width:'320px'}" placeholder="密码" hide-button allow-clear>
          <template #prefix>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"
                 class="arco-icon arco-icon-lock" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter">
              <rect x="7" y="21" width="34" height="20" rx="1"></rect>
              <path d="M15 21v-6a9 9 0 1 1 18 0v6M24 35v-8"></path>
            </svg>
          </template>
        </a-input-password>
      </a-space>
      <a-space>
        <a-input-password v-model="form.password2" :style="{width:'320px'}" placeholder="确认密码" hide-button
                          allow-clear>
          <template #prefix>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"
                 class="arco-icon arco-icon-lock" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter">
              <rect x="7" y="21" width="34" height="20" rx="1"></rect>
              <path d="M15 21v-6a9 9 0 1 1 18 0v6M24 35v-8"></path>
            </svg>
          </template>
        </a-input-password>
      </a-space>
      <a-space>
        <a-input v-model="form.captcha" :style="{width:'320px', paddingRight: '0'}" placeholder="邮箱验证码">
          <template #prefix>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"
                 class="arco-icon arco-icon-email" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter">
              <rect x="6" y="8" width="36" height="32" rx="1"></rect>
              <path d="m37 17-12.43 8.606a1 1 0 0 1-1.14 0L11 17"></path>
            </svg>
          </template>
          <template #suffix>
            <a-button :style="{width:'100px'}" type="primary" @click="handleSendCaptcha" :loading="countDown != 60">
              {{ countDown == 60 ? "获取验证码" : countDown }}
            </a-button>
          </template>
        </a-input>
      </a-space>
      <a-divider :style="{margin: '2px 0'}"/>
      <a-button :style="{float:'right'}" type="primary" @click="handleRegister">
        注册
      </a-button>
    </a-space>
  </a-modal>
</template>

<style lang="scss">
.arco-btn-primary {
  background-color: rgb(242, 109, 109) !important;
}

.arco-btn-primary:hover {
  background-color: rgba(193, 87, 87) !important;
}

.arco-input-wrapper:focus-within, .arco-input-wrapper.arco-input-focus {
  border-color: rgb(242, 109, 109) !important;
}

.arco-modal-body {
  padding-bottom: 12px;
}

.arco-modal-footer {
  display: none;
}

.arco-notification {
  padding-top: 12px;
  padding-bottom: 9px;
}
</style>