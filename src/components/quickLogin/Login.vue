<template>
  <div class="hello">
    <div class="top-header border-bottom">
      <div class="top-back">
        <a @click="$router.go(-1)"></a>
      </div>
      <h2 class="f36" v-text="'回到上一页'"></h2>
      <div class="top-right"></div>
    </div>
    <h1>快速登入(开发模式)</h1>
    <br>
    <h3 v-if=" phone.toString().length !=11">手机号位数不对，当前位数: {{phone.toString().length}}</h3>
    手机号码: <input class="can-login" :class="{'error': phone.toString().length==11}" type="number" v-model="phone">
    <button type="button" @click="add">+</button>
    <hr>
    <ul>
      <li v-for="item in list" style="display: block;margin-bottom: 10px">
        <a v-text="item" @click="phone=item"></a>
        <button type="button" @click="remove(item)">x</button>
      </li>
    </ul>
    <button type="button" @click="sendSMSing"> 快速登入</button>
    <button type="button" @click="loginOut"> 退出登入</button>
    <hr>
    <h3>当前账号: {{account.mobilePhone}}</h3>
    <ul>
      <li v-for="(value, key) in account" style="display: block">
        <span v-text="key"></span>:<span v-text="value"></span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import loginHttp from './http'

  const store = require('./store.js').store;
  export default {
    name: 'hello',
    data () {
      return {
        list: [
          12345678910,
          45646452112
        ],
        phone: 12345678999,
        account: {}
      }
    },
    watch: {
      list(val, oldVal){
        localStorage.setItem('list', JSON.stringify({list: this.list}))
      }
    },
    created: function () {
      this.getAccount();
      if (localStorage.getItem('list')) {
        this.list = JSON.parse(localStorage.getItem('list')).list
      } else {
        localStorage.setItem('list', JSON.stringify({list: this.list}))
      }
    },
    methods: {
      loginOut(){
        loginHttp.loginOut().then(() => {
          this.getAccount();
        })
      },
      sendSMSing() {
        this.account = {}
        loginHttp.actionStart().then(() => {
          loginHttp.sendSMSing({phone: this.phone}).then((resp) => {
            if (resp.responseStatus.code == "00") {
              console.log("发送验证码成功")
              this.loginBySMS();
            } else {
              console.log("发送失败")
            }
          })
        })
      },
      loginBySMS(){
        let promotion_user_id = store.get('promotion_user_id');
        if (promotion_user_id == "" || promotion_user_id == undefined) {
          promotion_user_id = 0;
        }
        let params = {
          promotionUserId: promotion_user_id,
          phone: this.phone,
          verifyCode: 1111,
        };
        loginHttp.loginBySMS(params).then((resp) => {
          if (resp.responseStatus.code == "00") {
            store.remove('promotion_user_id');
            loginHttp.setCookie('telephone', this.phone, 300);
            console.log("验证验证码成功（登入成功）！");
            this.getAccount();
          } else {
            console.log("登入失败，看返回的提示吧，心累 ~ /(ㄒoㄒ)/~~");
          }
        })
      },
      getAccount(){
        loginHttp.getAccount().then((resq) => {
          if (resq.responseStatus.code == '00') {
            this.account = resq.userInfo;
          } else {
            this.account = {};
          }
        });
      },
      add(){
        if (this.list.every(v => {
            return v != this.phone
          })) {
          console.log("不和任何一个相等");
          this.list.push(this.phone)
        } else {
          console.log("有相等")
        }
      },
      remove(del){
        this.list.map((v, i) => {
          if (v == del) {
            this.list.splice(i, 1)
          }
        })
      }

    }
  }
</script>
<style scoped>
  @import "~css/fost-base.css";

  button {
    border: 1px solid #c700c7;
  }

  .can-login {

    border: 5px solid red;
  }

  .error {
    border: 5px solid green;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
