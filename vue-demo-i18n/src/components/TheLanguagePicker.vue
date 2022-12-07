<template>
  <select @change="onChangeLocale">
    <option v-for="supportedLocale in SUPPORT_LOCALES" :key="'locale-' + supportedLocale" :value="supportedLocale"
      :selected="currentLocale === supportedLocale">
      {{ showOptionLang(supportedLocale) }}
    </option>
  </select>

  <!-- <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="locale in SUPPORT_LOCALES" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div> -->
</template>

<script>
import { useI18n } from 'vue-i18n'
import i18n from "@/i18n";
import { SUPPORT_LOCALES, loadLocaleMessages, setI18nLanguage } from '@/i18n';
import { useRouter } from 'vue-router';

export default {
  setup() {

    const { locale } = useI18n();
    const router = useRouter();
    //const currentLocale = i18n.global.locale;
    const currentLocale = locale;

    const onChangeLocale = (event) => {

      //alert('locale : '+locale.value);
      const newLocale = event.target.value;
      loadLocaleMessages(i18n, newLocale).then(() => {
        setI18nLanguage(i18n, newLocale);
        router.replace({ params: { locale: newLocale } }).catch((error)=>{
          console.log("error : "+error);
          router.push('/');
        });

      });


    };

    // console.log("SUPPORT_LOCALES: " + SUPPORT_LOCALES);

    return {
      SUPPORT_LOCALES,
      currentLocale,
      onChangeLocale,
      locale,

    };
  },



  methods: {
    showOptionLang(lang) {
      var showLang = this.locale;

      if (lang === "en") {
        showLang = "en";
      }

      if (lang === "th") {
        showLang = "ไทย";
      }

      if (lang === "cn") {
        showLang = "茶室";
      }

      return showLang;
    },
  },
};
</script>
