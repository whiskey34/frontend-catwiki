<template>
    <div class="body-top-ten">
        <h1>Top 10 Most Searched Breeds</h1>
        <div class="ten-container">
            <div v-for="(breed, index) in topTen" :key="index" class="row">
                <div class="col-md-4">
                    <img :src="breed.imageUrl" alt="Breed Image" class="top-cat-img"/>
                </div>
                <div class="col-md-6">
                    <!-- <router-link to="/search"></router-link> -->
                    <h3 class="name-top-breed">{{ index + 1 }}. {{ breed.name }}</h3>
                    <p class="text-top-breed">{{ breed.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: "TopTenBreeds",
  data() {
    return {
      topTen: [],
    };
  },
  mounted() {
    fetch("http://localhost:5000/breed/top-ten-breeds")
      .then((response) => response.json())
      .then((data) => {
        this.topTen = data.topTen;
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
}

.top-cat-img {
    width: 250px;
    height: 250px;
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
}

.body-top-ten {
    margin-left: 96px;
    margin-right: 96px;
    padding: 20px;
    /* border: 3px #0000; */
}

.name-top-breed {
    font-size: 32px;
    font-weight: 500;
    color: #291507;

    margin-bottom: 10px;
}

.text-top-breed {
    font-size: 19px;
    font-family: 'montserrat';
}
</style>