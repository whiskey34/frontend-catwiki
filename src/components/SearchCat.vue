<template>
    <div class="search-box">
        <form action="" role="search">
            <input type="search" class="form-control search-form" name="searchbar" placeholder="Enter your breed" v-model="query" @keyup.enter="search">
            <button type="submit" class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </div>
</template>


<script>
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
    name: 'SearchCat',
    props: {
        msg: String
    },

    data() {
      return {
        query: '',
      }
    },

    methods: {
      async search() {
        try {
          // const response = await axios.get(`/search?q=${this.query}`)
          const response = await axios.get('/api/searchable-breeds', {
            params: {
              q: this.query
            }
          });
          console.log(response.data)
          // handle the response data here
        } catch (error) {
          console.log(error)
        }

        const query = this.searchQuery.trim();
        if (query.length > 0) {
          this.$emit('search', query);
          this.searchQuery = '';
        }

        this.$emit('search', this.query);
      },
    },
}
</script>


<style scoped>
.search-box {
  /* margin: 30px auto; */
  /* margin-right: 200px; */
  width: 400px;
  height: 60px;
  position: absolute;
  width: 394.62px;
  height: 69.67px;
  left: 104px;
  top: 313.03px;
}

form {
  display: flex;
  flex-direction: row;
}

.search-form {
    width: 100%;
    padding: 10px 35px 10px 15px;
    border: none;
    border-radius: 100px;
    outline: none;
}

.search-btn {
  background: transparent;
  border: none;
  outline: none;
  margin-left: -33px;
}

</style>