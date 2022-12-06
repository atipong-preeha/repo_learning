<template>
    <div class="navbar navbar-dark bg-primary fixed-top">
        <h1>Nav Bar </h1>
       <!-- <router-link><h1>Nav Bar </h1></router-link>  -->
       <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">      
          <router-link to="/hello"><a class="nav-link active" aria-current="page" href="#">Home</a></router-link>
        </li>
      </ul>
    </div>
</template>

<script>

import { RouterView , RouterLink} from 'vue-router';

export default {

}
</script>

