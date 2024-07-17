import { createRouter, createWebHashHistory } from "vue-router";
import Swal from "sweetalert2";
import isUserSignIn from "@/utils/validators/isUserSignIn";

// 1. 定義基本路由 baseRoutes
const baseRoutes = [
  {
    path: "/",
    redirect: "sign-in",
    meta: { navbarType: "frontend" },
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("@/views/front/UserSignUp.vue"),
    meta: {
      title: "註冊",
    },
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("@/views/front/UserSignIn.vue"),
    meta: {
      title: "登入",
    },
  },
  {
    path: "/metawall",
    name: "metawall",
    redirect: "metawall/all",
    component: () => import("@/views/front/UserHome.vue"),
    meta: {
      title: "動態牆",
      requiresAuth: true,
    },
    children: [
      {
        path: "all",
        name: "all",
        component: () => import("@/components/front/UserMetawall.vue"),
        meta: {
          title: "動態牆",
        },
      },
      {
        path: "user/:id",
        name: "user",
        component: () => import("@/components/front/UserUserWall.vue"),
        meta: {
          title: "個人牆",
        },
      },
    ],
  },
  {
    path: "/member",
    name: "member",
    redirect: "member/profile",
    component: () => import("@/views/front/UserMember.vue"),
    meta: {
      title: "個人設定",
      requiresAuth: true,
    },
    children: [
      {
        path: "profile",
        name: "profile",
        component: () => import("@/components/front/UserProfile.vue"),
        meta: {
          title: "個人資料",
        },
      },
      {
        path: "name",
        name: "name",
        component: () => import("@/components/front/UserUpdateName.vue"),
        meta: {
          title: "修改匿稱",
        },
      },
      {
        path: "password",
        name: "password",
        component: () => import("@/components/front/UserUpdatePassword.vue"),
        meta: {
          title: "重設密碼",
        },
      },
    ],
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      title: "控制頁面",
      requiresAuth: true,
    },
    children: [
      {
        path: "new-post",
        name: "new-post",
        component: () => import("@/components/front/UserNewPost.vue"),
        meta: {
          title: "張貼動態",
        },
      },
      {
        path: "following-list",
        name: "following-list",
        component: () => import("@/components/front/UserFollowingList.vue"),
        meta: {
          title: "我的追蹤名單",
        },
      },
      {
        path: "liked-posts",
        name: "liked-posts",
        component: () => import("@/components/front/UserLikedPosts.vue"),
        meta: {
          title: "我的按讚貼文",
        },
        children: [
          {
            path: "post/:id",
            name: "liked-post",
            component: () => import("@/components/front/UserLikedPost.vue"),
            meta: {
              title: "指定按讚貼文",
            },
          },
        ],
      },
      {
        path: "edit-posts/:userId",
        name: "edit-posts",
        component: () => import("@/components/front/UserEditPosts.vue"),
        meta: {
          title: "編輯貼文",
        },
        children: [
          {
            path: ":postId",
            name: "edit-post",
            component: () => import("@/components/front/UserEditPost.vue"),
            meta: {
              title: "指定編輯貼文",
            },
          },
        ],
      },
      {
        path: "order",
        name: "order",
        component: () => import("@/components/front/UserOrder.vue"),
        meta: {
          title: "確認訂單",
        },
      },
      {
        path: "payment",
        name: "payment",
        component: () => import("@/components/front/UserPayment.vue"),
        meta: {
          title: "確認付款",
        },
      },
      {
        path: "payment-result/:id",
        name: "payment-result",
        component: () => import("@/components/front/UserPaymentResult.vue"),
        meta: {
          title: "付款結果",
        },
      },
    ],
  },
  {
    path: "/callback",
    name: "callback",
    component: () => import("@/components/front/UserCallback.vue"),
  },
  {
    // 匹配任意路徑 -> 404 頁面
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/front/NotFound.vue"),
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

// 4. 全域前置守衛 router.beforeEach
// 每次路由切換前驗證，如果目標路由 requiresAuth 為 true 且用戶未登入，彈出提醒框並將用戶導向登入頁面
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isUserSignIn()) {
    Swal.fire({
      title: "請先登入",
      icon: "error",
      confirmButtonText: "OK",
    });
    next({ name: "sign-in" });
  } else {
    next();
  }
});

// 5. 導出 Vue Router 實例
export default router;
