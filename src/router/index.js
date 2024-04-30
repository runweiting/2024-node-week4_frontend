import { createRouter, createWebHashHistory } from "vue-router";

// 1. 定義基本路由 baseRoutes
const baseRoutes = [
  {
    path: "/",
    redirect: "home",
    component: () => import("@/views/front/UserNavbar.vue"),
    meta: { navbarType: "frontend" },
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/front/UserHome.vue"),
        meta: {
          title: "全體動態牆",
        },
      },
      {
        path: "member",
        name: "member",
        meta: {
          title: "個人設定",
        },
        children: [
          {
            path: "my-posts",
            name: "my-posts",
            meta: {
              title: "我的貼文牆",
            },
          },
          {
            path: "settings",
            name: "settings",
            meta: {
              title: "修改個人資料",
            },
          },
          {
            path: "logout",
            name: "logout",
            meta: {
              title: "登出",
            },
          },
        ],
      },
      {
        path: "dashboard",
        name: "dashboard",
        // component: () => import("@/views/front/"),
        meta: {
          title: "控制頁面",
        },
        children: [
          {
            path: "new-post",
            name: "new-post",
            component: () => import("@/views/front/UserNewPost.vue"),
            meta: {
              title: "張貼動態",
            },
          },
          {
            path: "profile",
            name: "profile",
            // component: () => import("@/components/front/"),
            meta: {
              title: "個人資料",
            },
          },
          {
            path: "following-list",
            name: "following-list",
            // component: () => import("@/components/front/"),
            meta: {
              title: "追蹤名單",
            },
          },
          {
            path: "liked-articles",
            name: "liked-articles",
            // component: () => import("@/components/front/"),
            meta: {
              title: "按讚貼文",
            },
          },
        ],
      },
      {
        // 匹配任意路徑 -> 404 頁面
        path: "/:pathMatch(.*)*",
        component: () => import("@/views/front/NotFound.vue"),
      },
    ],
  },
];
// 2. 建立 VueRouter 實體物件
const router = createRouter({
  // 網址路徑模式：使用 URL Hash(#錨點)
  // 可藉由 #/切換至不同 # 位置，避免引發網頁重新讀取
  history: createWebHashHistory(),
  routes: baseRoutes,
  // scrollBehavior 定義路由的滾動行為
  // 接收三個參數：to 表示目標路由，from 表示當前路由，savedPosition 表示從緩存中獲取的滾動位置
  scrollBehavior(to, from, savedPosition) {
    // 如果存在 savedPosition，將頁面滾動到 savedPosition 的位置
    if (savedPosition) {
      return savedPosition;
    }
    // 如果目標路由有 hash，將頁面滾動到 hash 所在的位置
    if (to.hash) {
      return { selector: to.hash };
      // 其他情況將頁面滾動到頂部
    }
    return { top: 0 };
  },
  // linkActiveClass 用於開啟 <RouterLink> 的默認樣式 .active (Bootstrap樣式)
  linkActiveClass: "active",
});

// 5. 導出 Vue Router 實例
export default router;
