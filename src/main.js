import "./assets/all.scss";

// 匯入 bootstrap
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// 匯入 createApp、createPinia
import { createApp } from "vue";
import { createPinia } from "pinia";

// 匯入 axios、VueAxios
import axios from "axios";
import VueAxios from "vue-axios";

// 匯入 VueLoading
import { LoadingPlugin } from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

// 匯入 VeeValidate 元件和功能
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
// 匯入 VeeValidate 全部的驗證規則
import * as AllRules from "@vee-validate/rules";
// 匯入 VeeValidate i18n
import { localize, setLocale } from "@vee-validate/i18n";
// 匯入 VeeValidate 繁體中文語系檔
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

// 匯入 CKEditor
import CKEditor from "@ckeditor/ckeditor5-vue";

// 匯入 根節點 root、路由配置
import App from "./App.vue";
import router from "./router";

// 將 AllRules 轉為陣列 forEach 將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
// 設定預設語系
setLocale("zh_TW");

// 建立 app 實體
const app = createApp(App);
// 建立 pinia 實體
const pinia = createPinia();

// app plugin
app.use(pinia);
app.use(VueAxios, axios);
app.use(LoadingPlugin);
app.use(CKEditor);
app.use(router);

// app component
// VeeValidate
app.component("VField", Field);
app.component("VForm", Form);
app.component("ErrorMessage", ErrorMessage);

// app 掛載至根節點
app.mount("#app");
