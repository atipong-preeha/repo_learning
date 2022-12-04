<template>
    <select @change="onChangeLocale">
        <option v-for="supportedLocale in SUPPORT_LOCALES" :key="'locale-' + supportedLocale" :value="supportedLocale"
            :selected="(locale === supportedLocale)">{{ supportedLocale }}</option>
    </select>

</template>

<script>

import { useI18n } from 'vue-i18n';
import { SUPPORT_LOCALES, loadLocaleMessages, setI18nLanguage } from '@/i18n';

export default ({

    setup() {
        const i18n = useI18n();
        const { locale } = i18n;
        const onChangeLocale = (event) => {
            const newLocale = event.target.value;
            loadLocaleMessages(i18n,newLocale).then(() => {
                //setI18nLanguage(i18n,newLocale);
                i18n.locale.value = newLocale;
            });
        }

        return {
            SUPPORT_LOCALES,
            locale,
            onChangeLocale,   
        }

    },


})




</script>
