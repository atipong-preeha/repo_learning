<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" /> 
      <nav class="navbar navbar-expand-lg bg-primary">
        <ul class="navbar-nav">
          <ui class="nav-item">
            <RouterLink to="/">Home</RouterLink>
          </ui>
        </ul>
        <ul>
          <ui>
            <RouterLink to="/about">About</RouterLink>
          </ui>
        </ul>
      </nav>
    </div> -->

    <nav class="navbar navbar-dark navbar-expand-lg bg-primary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link active" aria-current="page" >{{ $t('navbar.homeLink') }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="'/'+$i18n.locale+'/about'" class="nav-link active" >{{ $t('navbar.aboutLink') }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="'/'+locale+'/contact'" class="nav-link active" >{{ $t('navbar.contactLink') }}</RouterLink>
            </li>
          </ul>
        </div>
        <div><TheLanguagePickerVue></TheLanguagePickerVue></div>
      </div>
    </nav>



  </header>
  <main>
    <RouterView />
  </main>
  
</template>


<script>
import TheLanguagePickerVue from '@/components/TheLanguagePicker.vue';
import { useI18n } from 'vue-i18n';


export default {
  components : {
    TheLanguagePickerVue : TheLanguagePickerVue
  },
  setup(){
    const { locale } = useI18n();
    return{
      locale
    };
  },


}
</script>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } 
}
</style>
