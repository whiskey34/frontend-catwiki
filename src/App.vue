<template>
  
    <!-- <nav>
      <div class="logo">
        <img :src="require('@/assets/images/CatwikiLogo.svg')" alt="Logo-Catwiki">
      </div>
    </nav>
    <main>

      <HomeView/>
    </main> -->
    
    <div class="app" id="app">
      <nav>
        <div class="logo">
          <img :src="require('@/assets/images/CatwikiLogo.svg')" alt="Logo-Catwiki">
        </div>
      </nav>
      <!-- router to home view, etc etc .... -->
      <router-view/>

      <FooterWeb/>

    </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HomeView from './components/HomeView.vue';
import FooterWeb from '@/components/FooterWeb.vue';


export default {
  name: 'App',
  components: {
    FooterWeb,
  }
}
</script>

<style scoped>
/*=== used fonts ===*/
@import url('https://fonts.googleapis.com/css?family=Lato|Montserrat|Open+Sans|Oswald|Raleway&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mystery+Quest&display=swap');
/* font-family: 'Lato', sans-serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Oswald', sans-serif;
font-family: 'Raleway', sans-serif; */

:root {
    --black-color: #000;
    --gun-metal: #2B2D42;
    --bright-color: #edf6f9;
    --white: #fff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    background-color: var(--white);
    font-family: 'Lato', sans-serif;
    font-size: .9rem;
    color: var(--gun-metal);
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  margin-top: 10px;
  margin-left: 96px;
  display: inline-block;
  height: 50px;
}

@media screen and (max-width: 600px) {
  nav {
    flex-direction: column;
  }

  /* nav ul {
    flex-direction: column;
  }

  nav li {
    margin: 10px 0;
  } */
}


</style>
