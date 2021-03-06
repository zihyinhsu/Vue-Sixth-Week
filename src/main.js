import { createApp } from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// 匯入 vee-validate 主套件
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'

// 匯入 vee-validate 相關規則
import AllRules from '@vee-validate/rules'

// 匯入多國語系的功能
import {
  localize, setLocale
} from '@vee-validate/i18n'

// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'

// 定義驗證規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true // 調整為輸入字元立即進行驗證
})

// 設定預設語系
setLocale('zh_TW')

const app = createApp(App).use(router)
app.use(VueAxios, axios)
app.component('FormView', Form)
app.component('FieldView', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
