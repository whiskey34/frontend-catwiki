<template>
    <footer class="footer-web">
        <img :src="require('@/assets/images/CatwikiLogo.svg')" alt="footer-logo" class="footer-logo">
        
        <p class="footer-text">&copy; created by <a href="https://github.com/whiskey34">whiskey34</a> with <span class="heart">&hearts;</span> - devChallenge.io {{ currentYear }}</p>
        
    </footer>
</template>


<script>
export default {
  name: "FooterWeb",


  
  computed: {
    currentYear() {
      const currentDate = new Date();
      return currentDate.getFullYear();
    }
  }

};
</script>

<style scoped>
.heart {
  color: red;
  font-size: 24px;
}

.footer-web {
    /* position: absolute; */
    background: #000000;
    width: 1148px;
    height: 72.09px;

    border-radius: 42px 42px 0px 0px;
    margin-top: 100px;
    padding: 10px;
}

.footer-text {
    color: white;
    font-weight: 400;
    font-size: 18px;
    font: Montserrat;

    /* display: inline-block; */
    vertical-align: middle;
    /* margin-left: 10px; */
    margin-right: 10px;
    float: right;
}

.footer-text a{
    font-weight: bold;
    color: white;
}

.footer-logo {
    /* display: inline-block; */
    vertical-align: middle;
    float: left;
    margin-right: 10px;
    margin-left: 10px;
}
</style>