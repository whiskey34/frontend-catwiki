<template>
<div class="content">
    <div class="box-1">
        <div class="row">
            <div class="col-md-3">
                <div class="brand-name">
                    <p>CatWiki</p>
                </div>
                <img :src="require('@/assets/images/catwiki-logo-1.png')" alt="cat logo" class="brand-cat">
                <div class="text-promo">
                    <p>Get to know more about your cat breed</p>
                </div>
                <div class="search-place">
                    <SearchCat @search="searchHandler" />
                </div>
            </div>
        </div>
    </div>

    <div class="box-2">
        

        <div class="text-most-searched">
            <p>Most Searched Breeds</p>
            <hr class="most-line">
        </div>
    
            
        <div class="container">
            <div class="row">
                <div class="col-md-4 text-start second-title">
                    <p>66+ Breeds For you to discover</p>
                </div>
                <div class="col-md-4 text-end see-more">
                    <a href="" class="small-text">SEE MORE <i class=" fas fa-light fa-arrow-right-long" style="color: #291507;"></i></a>
                </div>
            </div>
        </div>
        
        <!-- calling most searched cats breed api from backend -->
        <MostPopular/>
    </div>

    <div class="lower-content">
        <FactCat/>
    </div>

    
</div>
</template>

<script>
import SearchCat from '@/components/SearchCat.vue';
import MostPopular from '@/components/MostPopular.vue';
import FactCat from '@/components/FactCat.vue';



// import axios from "axios";



export default {
    
    name: 'HomeView',
    props: {
        msg: String
    },

    components : {
        SearchCat,
        MostPopular,
        FactCat,
        
    },

    // get data and emit to searchCat component:
    methods: {
        
        searchHandler(query) {
            console.log('Query:', query);
            const encodedQuery = encodeURIComponent(query);
            console.log('Encoded query:', encodedQuery);
            // this.$router.push(`/search?breed=${encodedQuery}`);
            this.$router.push({ name: 'search', query: { breed: query } })
        },  
    },
}

</script>

<style scoped>

/* font */
@import url('https://fonts.googleapis.com/css2?family=Mystery+Quest&display=swap');

/*=== colors var ===*/
:root {
    --black-color: #000;
    --gun-metal: #2B2D42;
    --bright-color: #edf6f9;
    --white: #fff;
}



.content {
    background-color: var(--white);
    margin: 30px auto;
    width: 1160px;
}

/* for box-1 */

.box-1 {
    position: absolute;
    width: 1160px;
    height: 538.19px;
    left: 96px;
    top: 99px;
    background: #C4C4C4;
    border-radius: 42px 42px 0px 0px;

    background-image: url('~@/assets/images/HeroImagemd.png');
    /* background-repeat: no-repeat; */
    background-size: contain;
}

.brand-name {
    position: absolute;
    width: 207px;
    height: 87px;
    left: 104px;
    top: 110.55px;

    font-family: 'Mystery Quest';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 87px;

    color: #FFFFFF;
}

.brand-cat {
    position: absolute;
    width: 97px;
    height: 77px;
    left: 28.73%;
    right: 58.65%;
    top: 18.36%;
    bottom: 86.48%;
}

.text-promo {
    position: absolute;
    width: 371.3px;
    height: 58px;
    left: 104px;
    top: 212.75px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;

    color: #FFFFFF;
}

/* for box-2 */

.box-2 {
    position: absolute;
    width: 1160px;
    height: 686.4px;
    left: 96px;
    top: 584.97px;
    padding: 107px;

    background: #E3E1DC;
    border-radius: 0px 0px 42px 42px;
}

.text-most-searched {
    position: absolute;
    width: 205px;
    height: 22px;
    /* left: 98px; */
    top: 32.21px;
    margin-top: 30px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */


    color: #291507;
}

.second-title {
    /* position: absolute; */
    width: 536.93px;
    height: 118px;
    /* margin-left: 75px; */
    margin-top: 50px;

    font-family: 'Montserrat';
    font-weight: bold;
    font-weight: 700;
    font-size: 51px;
    line-height: 59px;

    color: #291507;
}


.see-more {
    font-size: 16px;
    /* color: #979797; */
    margin-top: 190px;
    
}

.small-text {
    font-size: 14px;
    margin-bottom: 0;

    text-decoration: none;
    color: rgba(41, 21, 7, 0.6);
}

.lower-content {
    margin-top: 1350px;
    margin-left: 120px;
}

.most-line {
    border: none;
    border-top: 2px solid #4D270C;
    margin: 10px 0;
    width: 50px;
}

/* mobile styles */

</style>

