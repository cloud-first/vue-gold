/**
 * Created by 严俊东 on 2017/3/23.
 */

import Vue from 'vue'

import {actionStart} from './actionStart.js'
import {getAccount} from './getAccount.js'
import {loginOut} from './loginOut.js'
import {setCookie} from './setCookie.js'
import {loginBySMS} from './loginBySMS.js'
import {sendSMSing} from './sendSMSing.js'

const vm = new Vue();
export  default  {
    _http: vm.$http,
    actionStart,
    getAccount,
    loginOut,
    setCookie,
    loginBySMS,
    sendSMSing
}