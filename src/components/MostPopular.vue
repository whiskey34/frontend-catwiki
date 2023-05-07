<template>
    <div>
        <!-- <ul>
            <li v-for="breed in mostBreed" :key="breed.id">
                <img :src="breed.imageUrl" alt="Breed Image">
                <p>{{ breed.name }}</p>
            </li>
        </ul> -->

        <div v-if="loading">
            <p>Loading</p>
        </div>
        
        <!-- <div class="" v-else v-for="breed in mostBreed" :key="breed.id">
            <p>{{ breed.name }}</p>
            <img :src="breed.imageUrl" alt="cat images">
        </div> -->
        <!-- <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-4">
            <div v-for="breed in mostBreed" :key="breed.id" class="col">
                <div class="card h-100 border-0">
                    <img :src="breed.imageUrl" class="card-img-top" alt="cat images" style="height: 230px; object-fit: cover;">
                    <div class="card-body p-0">
                        <p class="card-text m-0 py-2 px-3 bg-dark text-white">{{ breed.name }}</p>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- <p>mostBreed : {{ mostBreed }}</p> -->

        <div class="row gx-3" v-if="!loading">
            <div class="col-6 col-sm-4 col-md-3 col-lg-3" v-for="breed in mostBreed" :key="breed.id">
                <a :href="'/cats/description/' + breed.id">
                    <div class="card border-0" @mouseover="onMouseOver" @mouseout="onMouseOut">
                        <img :src="breed.imageUrl" class="card-img-top" alt="Breed Image">
                        <div class="card-img-overlay d-flex align-items-end">
                            <div class="card-text p-2 text-white bg-transparent">{{ breed.name }}</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div v-else>
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'MostPopular',
    props: {
        msg: String
    },

    data() {
        return {
            mostBreed: [],
            loading: true,
        }
    },


    mounted() {
    axios
        .get('http://localhost:5000/breed/most-searched-breeds')
        .then(response => {
        const mostBreed = response.data.mostBreed.map(breed => {
            return {
            name: breed.name,
            imageUrl: breed.image.url
            };
        });
        // this.mostSearchedBreeds = mostBreed;
        // console.log(mostBreed); // add this line to log mostBreed variable
        this.mostBreed = mostBreed;
        this.loading = false; // Set loading to false when data is loaded
        // console.log(this.mostSearchedBreeds);
        })
        .catch(error => {
            console.log(error);
        });
    },

    methods: {
        onMouseOver(event) {
        event.target.style.transform = 'translateY(-5px)';
        event.target.style.transition = 'all 0.3s ease-in-out';
        },

        onMouseOut(event) {
        event.target.style.transform = 'translateY(0)';
        }
    }
    


}
</script>

<style scoped>
/* .card {
  width: 100%;
  overflow: hidden;
} */
.card {
    position: relative;
    border-radius: 24px;
    width: 220px;
    height: 220px;
}

img {
    border-radius: 24px;
    width: 220px;
    height: 220px;
}

.card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.card-img-top {
  height: 220px;
  object-fit: cover;
}

@media (min-width: 576px) {
  .card-img-top {
    height: 150px;
  }
}

@media (min-width: 768px) {
  .card-img-top {
    height: 180px;
  }
}

@media (min-width: 992px) {
  .card-img-top {
    height: 200px;
  }
}

@media (min-width: 1200px) {
  .card-img-top {
    height: 230px;
  }
}

.row {
  /* margin-left: 25px;
  margin-right: 15px; */
  margin-top: 10px;
}
</style>