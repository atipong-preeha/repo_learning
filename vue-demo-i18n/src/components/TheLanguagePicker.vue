<template>
  <select @change="onChangeLocale">
    <option
      v-for="supportedLocale in SUPPORT_LOCALES"
      :key="'locale-' + supportedLocale"
      :value="supportedLocale"
      :selected="currentLocale === supportedLocale"
    >
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
import i18n from "@/i18n";
import { SUPPORT_LOCALES, loadLocaleMessages, setI18nLanguage } from '@/i18n';

export default {
  setup() {

    const currentLocale = i18n.global.locale;

    const onChangeLocale = (event) => {
        const newLocale = event.target.value;
        loadLocaleMessages(i18n,newLocale);
        setI18nLanguage(i18n,newLocale);
        
    };

    console.log("SUPPORT_LOCALES: " + SUPPORT_LOCALES);

    return {
      SUPPORT_LOCALES,
      currentLocale,
      onChangeLocale,
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
