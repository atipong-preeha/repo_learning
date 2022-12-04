import { createRouter, createWebHistory, RouterView } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import i18n from "@/i18n";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/locale?',
    //   component: RouterView,
    //   beforeEnter(to,from,next){
    //     const paramLocale = to.params.locale;

    //     console.log("i18n.global.locale.value "+i18n.global.locale.value)

    //     if(!i18n.global.availableLocales.includes(paramLocale)){
    //       return next(i18n.global.locale.value)
    //     }

    //     if(i18n.global.lcoale.value === paramLocale){
    //       i18n.global.lcoale.value = paramLocale;
    //     }
    //     console.log("xxxxxxxxxx")
    //     return next();

    //   },
    //   children:[
    //     {
    //       path: '/home',
    //       name: 'home',
    //       component: HomeView,
    //     }
    //   ]

    // },

    {
      path: "/locale?",
      component:RouterView,
      beforeEnter(to, from, next) {
       // const paramLocale = to.params.locale;

        //console.log("i18n.global.locale.value "+i18n.global.locale.value)

        // if (!i18n.global.availableLocales.includes(paramLocale)) {
        //   return next(i18n.global.locale.value);
        //   // return next('xxxxx');
        // }

        // if (i18n.global.lcoale.value === paramLocale) {
        //   i18n.global.lcoale.value = paramLocale;
        // }
        console.log(to.params);

        return next();
      },
      children: [
        {
          path: '/',
          name : "home",
          component: HomeView,
        },
      ],
    },

    {
      path: "/home",
      name: "home",
      component: HomeView,
    },

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
