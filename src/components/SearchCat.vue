<template>
    <!-- <div class="search-box">
        <form action="" role="search">
            <input type="search" class="form-control search-form" name="searchbar" placeholder="Enter your breed" v-model="query" @keyup.enter="search">
            <button type="submit" class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </div> -->

  <!-- <div>
    <input type="text" placeholder="Search cat breed" v-model="searchQuery" />
    <button @click="search">Search</button>
  </div> -->

  <form @submit.prevent="submitForm" class="search-box">
    <input type="text" class="form-control search-form" v-model="searchQuery" placeholder="Enter breed name" />
    <!-- <button type="submit" class="search-btn">Search</button> -->
    <button type="submit" class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
  </form>

   
</template>


<script>
// import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.css'


export default {
    name: 'SearchCat',
    props: {
        msg: String
    },


  data() {
    return {
      searchQuery: '',
    };
  },

  methods: {

    submitForm() {
      this.$emit('search', this.searchQuery);
    },

  },

  
    


}
</script>


<style scoped>
.search-box {
  width: 300px;
  height: 60px;
  position: relative;
  border-radius: 24px;
  margin-top: 340px;
  margin-left: 100px;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.search-form {
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 24px;
  padding-left: 15px;
  padding-right: 50px;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
}

.search-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  outline: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.search-btn i {
  font-size: 20px;
  color: #444;
}

@media only screen and (max-width: 768px) {
  .search-box {
    width: 100%;
    height: 50px;
    margin-top: 340px;
    margin-left: 100px;
  }
}

</style>