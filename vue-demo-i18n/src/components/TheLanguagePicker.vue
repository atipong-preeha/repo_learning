<template>
    <!-- <select @change="onChangeLocale">
        <option v-for="supportedLocale in SUPPORT_LOCALES" :key="'locale-' + supportedLocale" :value="supportedLocale"
            :selected="(locale === supportedLocale)">{{ showOptionLang(supportedLocale) }}</option>
    </select> -->

   <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>

</template>

<script>

import { useI18n } from 'vue-i18n';
//import { SUPPORT_LOCALES, loadLocaleMessages, setI18nLanguage , setupI18n} from '@/i18n';
import { setupI18n } from '@/i18n';

export default ({

    setup() {
        //const i18n = useI18n();
        //const { i18n  } = setupI18n();
        //const { locale , loadLocaleMessages , SUPPORT_LOCALES, setupI18n } = i18n;
        const i18n = setupI18n(); 
        const { locale , loadLocaleMessages , SUPPORT_LOCALES } = i18n;

        const onChangeLocale = (event) => {
            const newLocale = event.target.value;
            loadLocaleMessages(i18n,newLocale).then(() => {
                i18n.locale.value = newLocale;
            });
            // loadLocaleMessages(i18n,newLocale);
            // //setI18nLanguage(i18n,newLocale);
            // console.log("newLocal"+newLocale);
            // i18n.locale.value = newLocale;

        }

        return {
            SUPPORT_LOCALES,
            locale,
            onChangeLocale   
        }

    },

    methods: {
        showOptionLang(lang){
            var showLang = this.locale;

            if(lang === 'en'){
                showLang = 'en';
            }

            if(lang === 'th'){
                showLang = 'ไทย';
            }

            if(lang === 'cn'){
                showLang = '茶室';
            }

            return showLang;
        }
    }


})




</script>
