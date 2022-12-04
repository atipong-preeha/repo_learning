<script>
//import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'

import TheLanguagePickerVue from './components/TheLanguagePicker.vue';

export default {
  components : {
    TheLanguagePickerVue : TheLanguagePickerVue
  }
}

</script>

<template>
  <hearder>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
    <a class="navbar-brand" href="#">Vue Demo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">      
          <router-link to="/home"><a class="nav-link active" aria-current="page" href="#">Home</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about"><a class="nav-link" href="#">About</a></router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <TheLanguagePickerVue></TheLanguagePickerVue>&nbsp;&nbsp;
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
      </div>
    </nav>
  </hearder>

  <main>
    <RouterView></RouterView>
  </main>

  <footer>
    <div class="navbar navbar-expand-md navbar-dark fixed-bottom bg-dark">
      <div>footer</div>
    </div>
  </footer>

</template>

<style scoped>

</style>
