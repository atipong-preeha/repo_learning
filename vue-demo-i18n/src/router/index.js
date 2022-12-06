import { createRouter, createWebHistory ,RouterView} from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelloView from "../views/HelloView.vue";
import i18n from "@/i18n";
import { SUPPORT_LOCALES, loadLocaleMessages, setI18nLanguage } from '@/i18n';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: "/:locale?",
        component: RouterView,

        children: [
            {
              path: "/home",
              name: "home",
              component: HomeView,
              alias: "",
            },
            {
              path: "/about",
              name: "about",
              // route level code-splitting
              // this generates a separate chunk (About.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import("../views/AboutView.vue"),
            },
            {
              path: "/hello",
              name: "hello",
              component: HelloView,
            },
          ],
    }
  ],
});

// navigation guards
router.beforeEach(async (to, from, next) => {
  const paramsLocale = to.params.locale;


  console.log("paramsLocale"+paramsLocale);
  // use locale if paramsLocale is not in SUPPORT_LOCALES
  if (!SUPPORT_LOCALES.includes(paramsLocale)) {
    return next(`/${i18n.global.locale.value}`);
  }

  // load locale messages
  if (!i18n.global.availableLocales.includes(paramsLocale)) {
    await loadLocaleMessages(i18n, paramsLocale);
  }

  // set i18n language
  setI18nLanguage(i18n, paramsLocale);

  return next();
});

export default router;
