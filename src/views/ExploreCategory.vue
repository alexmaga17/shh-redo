<template>
<div class="exploreContainer"> 
	<div class="bannerContainer">
    	<span>Fotografia</span>
    </div>
</div>
 
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	// name: 'ExploreCategory',
	// components:{
	// 	CategoriesBar,
	// 	AsideAccordion,
	// },
  data() {
    return {
		cardShadow:'3px -3px 28px -8px rgba(0, 0, 0, 0.1), inset -5px -23px 0px -13px',
		opacity: '',
      	categoryName: this.$route.params.categoryName,
     	postsFiltered:[],
    };
  },
  mounted() {
	  	console.log(this.categoryName);
		this.loadCategories();
		this.getPostsByCategory();
	},
	computed: {
		...mapGetters(["getCategories"])
	},
	methods: {
		...mapActions(["loadCategories","loadPostsByCategory"]),

    async getPostsByCategory(){
      const response = await this.loadPostsByCategory(this.categoryName);

      if(response.data.success == true){
        this.postsFiltered.push(response.data.posts);
      }
	  //console.log(response.data.posts);
	  console.log(this.postsFiltered);
    }
	},
};
</script>

<style scoped>
.exploreContainer{
	width:100%;
}
.bannerContainer {
  width: 100%;
  height: 210px;
  margin-top: 138px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  background: url(../../public/assets/photoBG.webp);
  background-size: cover;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px -250px 300px -90px inset,
    inset 0 0 0 2000px rgba(255, 186, 122, 0.92);
}

/* mudar barra de categorias e foto */

.bannerContainer span {
  color: white;
  font-family: "Gilroy", sans-serif;
  font-weight: 800;
  font-size: 100px;
  padding-left: 50px;
}

.postsContainer {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: minmax(110px, auto);
	gap: 20px;
	margin-top: 20px;
}

.cardContainer {
	display: flex;
	box-sizing: border-box;
	cursor: pointer;
}

.photoContainer {
	height: 110px;
	position: relative;
}

.photoContainer img {
	width: 160px;
	height: 110px;
	object-fit:cover;
}

.infoContainer {
	height: 100px;
	padding-left: 20px;
	padding-right: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
}

.topContainer {
	display: grid;
	grid-template-rows: auto;
	grid-template-columns: 1fr 10px 1fr 41% 1fr;
	margin-top: -7px;
}

.topContainer h1 {
	margin: 4px 0 0 0;
	font-size: 22px;
}

.topContainer h2 {
	margin: -4px 0;
	color: #b4b4b4;
	font-size: 10px;
}

.categoryNameContainer {
	display: flex;
	align-items: center;
	grid-column: 3/4;
}

.topContainer span {
	font-size: 12px;
	font-weight: 600;
}

.likesBookmarkContainer {
	display: flex;
	align-items: center;
	justify-content: center;
	grid-column: 5/6;
}

.likesContainer {
	position: relative;
}

.likesCounter {
	position: absolute;
	left: 32%;
	top: 7px;
	font-size: 10px !important;
}

.likesBookmarkContainer img {
	width: 27px;
	position: relative;
	z-index: -1;
}

.middleContainer {
	display: flex;
	margin: 4px 0 -1px 0;
}

.starsContainer {
	display: flex;
}

.star {
	width: 17px;
	height: 17px;
	margin: 0 -2px;
}

.faded {
	opacity: 31%;
}

.middleContainer span {
	font-weight: 700;
	padding-left: 8px;
}

.bottomContainer {
	font-size: 11px;
	width: 80%;
}
</style>
