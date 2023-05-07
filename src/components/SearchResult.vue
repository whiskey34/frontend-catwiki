<template>
    <div class="search-results">
        <router-link to="/" >Back to home</router-link>
        <div v-if="breeds.length === 0">No results found</div>
        <div v-else>
            <div v-for="breed in breeds" :key="breed.id" class="row search-result-item">
                <div class="col-md-6 search-result-item-image">
                    <img class="img-result" v-if="breed.imageData" :src="breed.imageData.url" alt="cat-img">
                    <!-- <img src="" alt="cat-img"> -->
                </div>
                <div class="col-md-6 search-result-item-info">
                    <h2>{{ breed.name }}</h2>
                    <p>{{ breed.description }}</p>
                    <p>Temperament: {{ breed.temperament }}</p>
                    <p>Origin: {{ breed.origin }}</p>
                    <p>Life span: {{ breed.life_span }}</p>
                    <p>Adaptability: {{ breed.adaptability }}</p>
                    <p>Affection level: {{ breed.affection_level }}</p>
                    <p>Child friendly: {{ breed.child_friendly }}</p>
                    
                </div>
                <div class="other-photos">
                    <h3>Other photos</h3>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        breeds: [],
      };
    },
    // async created() {
    //   const query = this.$route.query.breed;
    //   const response = await axios.get(`http://localhost:5000/breed/${query}`);
    //   this.breeds = response.data;
    // },

    // mounted() {
    //     const breedName = this.$route.params.breedName;
    //     const query = this.$route.query.breed;
    //     axios.get(`http://localhost:5000/breed/${query}`)
    //     .then(response => {
    //         // console.log('Image Data :', response.data);
    //         this.breeds = response.data;
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });
    // },

    methods: {
        async getImageData(imageId) {
            const url = `https://api.thecatapi.com/v1/images/${imageId}`;
            const response = await axios.get(url);
            return response.data;
        }
    },

    mounted() {
        const query = this.$route.query.breed;
        axios.get(`http://localhost:5000/breed/${query}`)
            .then(response => {
            console.log('Breed data:', response.data);
            this.breeds = response.data;
            this.breeds.forEach(async breed => {
                if (breed.reference_image_id) {
                const imageData = await this.getImageData(breed.reference_image_id);
                breed.imageData = imageData;
                console.log('Image data for breed', breed.name, ':', imageData);
                }
            });
            })
            .catch(error => {
            console.error(error);
            });
    },


    
   

    

  };
</script>
  

<style scoped>
.search-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-left: 94px;
  margin-right: 94px; */
}

.search-result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1160px;
  /* margin: 20px 0; */
  padding: 20px;
  /* border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); */

  margin-top: 20px;
  margin-left: 96px;
  margin-right: 96px;

}

.img-result {
    width: 520px;
    height: 520px;
    border-radius: 28px;
}

</style>