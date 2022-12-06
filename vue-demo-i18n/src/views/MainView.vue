<template>
    <hearder>
       
            <NavBarItemVue></NavBarItemVue>

    </hearder>

    <main>
        <div class="container d-flex">
            <HelloItemItemVue></HelloItemItemVue>
        </div>
       <router-view></router-view>
    </main>

    <footer>
       
            <FooterItemVue></FooterItemVue>
    
    </footer>

</template>

<script>

import NavBarItemVue from '@/components/NavBarItem.vue';
import HelloItemItemVue from '@/components/HelloItemItem.vue';
import FooterItemVue from '@/components/FooterItem.vue';

export default {

    components: {
        NavBarItemVue,
        HelloItemItemVue,
        FooterItemVue
    }

}
</script>

<style>

</style>