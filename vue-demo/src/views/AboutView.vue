<template>
  <div class="about">
    <h1>This is an about page</h1>
    <LogInVue/>
    <LogIn2Vue />
  </div>
  <div>
  
</div>
</template>

<script>
import LogInVue from '@/components/LogIn.vue';
import LogIn2Vue from '@/components/LogIn2.vue';

export default {

    components: {
        LogInVue: LogInVue,
        LogIn2Vue: LogIn2Vue,
    }

}

</script>

<style>

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
