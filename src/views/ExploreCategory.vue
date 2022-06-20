<template>
	<div class="mainContainer">
		<CategoriesBar />
		<router-view></router-view>
		<div
			class="contentContainer"
			v-bind:class="{ contentContainerBanner: banner }"
		>
			<aside>
				<h4>Filtros</h4>
				<div class="filterContainer">
					<AsideAccordion>
						<template v-slot:title>
							<h5>Categorias</h5>
						</template>
						<template v-slot:content>
							<div class="categoryRadioContainer">
								<span class="radio radio1"></span
								><span class="filterCategoryName"
									>Fotografia</span
								>
							</div>
							<div class="categoryRadioContainer">
								<span class="radio radio2"></span
								><span class="filterCategoryName">Vídeo</span>
							</div>
							<div class="categoryRadioContainer">
								<span class="radio radio3"></span
								><span class="filterCategoryName">Desenho</span>
							</div>
							<div class="categoryRadioContainer">
								<span class="radio radio4"></span
								><span class="filterCategoryName"
									>Web Design</span
								>
							</div>
							<div class="categoryRadioContainer">
								<span class="radio radio5"></span
								><span class="filterCategoryName">Modelo</span>
							</div>
						</template>
					</AsideAccordion>

					<span class="divider"></span>
					<AsideAccordion>
						<template v-slot:title>
							<h5>Tempo de Entrega</h5>
						</template>
						<template v-slot:content> </template>
					</AsideAccordion>
					<span class="divider"></span>
					<AsideAccordion>
						<template v-slot:title>
							<h5>Tempo de Resposta</h5>
						</template>
						<template v-slot:content> </template>
					</AsideAccordion>
					<span class="divider"></span>
					<AsideAccordion>
						<template v-slot:title>
							<h5>Avaliação</h5>
						</template>
						<template v-slot:content> </template>
					</AsideAccordion>
					<span class="divider"></span>
					<AsideAccordion>
						<template v-slot:title>
							<h5>Muito Procurado</h5>
						</template>
						<template v-slot:content> </template>
					</AsideAccordion>
				</div>
			</aside>
			<div class="mainContentContainer">
				<div
				class="sortContainer"
				@click="toggleSortMenu()"
				:aria-expanded="isOpen"
      			:aria-controls="`collapse${_uid}`">
					<span>Ordenar por:</span>
					<div><span>Gostos &#40;ascendente&#41;</span></div>
				</div>
				<div class="sortMenuContent" v-show="isOpen" :id="`collapse${_uid}`">
					<div class="sortItemsContainer"><div><span>Alfabética</span></div><div><span>Alfabética (Descendente)</span></div></div>
				</div>
                    <div class="postsContainer">
                    <div
                        class="cardContainer"
                        v-for="(post, _id) in getPostsFiltered"
                        v-bind:key="_id"
                        v-bind:style="{ 'box-shadow': cardShadow + post.category.color_category }"
                        v-on:click="goToPost(post._id)"
                    >
                        <div class="photoContainer">
                            <img :src="post.post_photo" alt="" />
                        </div>
                        <div class="infoContainer">
                            <div class="topContainer">
                                <div>
                                    <h1>{{ post.user.firstname }}</h1>
                                </div>
                                <div class="categoryNameContainer">
                                    <span v-bind:style="{ color: post.category.color_category }">{{
                                        post.category.category
                                    }}</span>
                                </div>
                                <div class="likesBookmarkContainer">
                                    <div class="likesContainer">
                                        <span class="likesCounter">{{ post.gamification.likes.length }}</span>
                                        <img
                                            src="../../public/assets/noun-hearts-243868.svg"
                                            alt=""
                                            v-bind:style="{
                                                filter: post.category.second_color_category,
                                            }"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="../../public/assets/noun-bookmark-809338.svg"
                                            alt=""
                                            v-bind:style="{
                                                filter: post.category.second_color_category,
                                            }"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="middleContainer">
                                <div class="starsContainer">
                                    <img
                                        src="../../public/assets/noun-star-1187057.svg"
                                        alt=""
                                        class="star 1"
                                        :class="{ faded: post.overallRating < 1 }"
                                    />
                                    <img
                                        src="../../public/assets/noun-star-1187057.svg"
                                        alt=""
                                        class="star 2"
                                        :class="{ faded: post.overallRating < 2 }"
                                    />
                                    <img
                                        src="../../public/assets/noun-star-1187057.svg"
                                        alt=""
                                        class="star 3"
                                        :class="{ faded: post.overallRating < 3 }"
                                    />
                                    <img
                                        src="../../public/assets/noun-star-1187057.svg"
                                        alt=""
                                        class="star 4"
                                        :class="{ faded: post.overallRating < 4 }"
                                    />
                                    <img
                                        src="../../public/assets/noun-star-1187057.svg"
                                        alt=""
                                        class="star 5"
                                        :class="{ faded: post.overallRating < 5 }"
                                    />
                                </div>
                                <span>{{ post.overallRating }}</span>
                            </div>
                            <div class="bottomContainer">
                                {{ post.small_description }}
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	</div>
</template>

<script>
import CategoriesBar from '../components/CategoriesBar.vue';
import AsideAccordion from '../components/AsideAccordion.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'Explore',
	components: {
		CategoriesBar,
		AsideAccordion,
	},
	data() {
		return {
            cardShadow:'3px -3px 28px -8px rgba(0, 0, 0, 0.1), inset -5px -23px 0px -13px',
		    opacity: '',
      	    categoryName: this.$route.params.categoryName,
			banner: false,
			isOpen: false
		};
	},
    mounted () {
        console.log(this.$route.params.categoryName);
		this.getPostsByCategory();
		this.loadCategories();
    },
    computed: {
        ...mapGetters(["getPosts","getCategories"]), 	
		getPostsFiltered(){
			let getPostsFiltered = this.$store.getters.getPostsFiltered
			return getPostsFiltered;
		}
    },
	methods: {
        ...mapActions(["loadCategories","loadPostsByCategory","loadPosts"]),
        async getPostsByCategory(){
            const response = await this.loadPostsByCategory(this.categoryName);
            if(response.data.success == true){
                //this.postsFiltered.push(response.data.posts);
		        console.log(response.data.posts);
            }
	        //console.log(response.data.posts);
	         //console.log(this.postsFiltered);
        },
        goToPost(postID) {
		    this.$router.push({ name: 'Post', params: { id: postID } });
	    },
		checkBanner() {
			if (
				this.$route.matched[this.$route.matched.length - 1].instances
					.default === this
			) {
				this.banner = false;
			} else {
				this.banner = true;
			}
		},
		toggleSortMenu(){
			this.isOpen = !this.isOpen;
		}
	},
	created() {
		this.checkBanner();
	},
	updated() {
		this.checkBanner();
		this.getPostsByCategory();
		
	},
};
</script>

<style scoped>
<<<<<<< HEAD
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
=======
.mainContainer {
	display: flex;
	flex-direction: column;
	align-items: center;
	/* height: 1000px; */
	min-height: 100vh;
	margin-bottom: 60px;
}

.contentContainer {
	width: 90%;
	max-width: 1300px;
	display: flex;
	margin-top: 180px;
	justify-content: space-between;
}

.contentContainerBanner {
	margin-top: 0px;
}

aside {
	font-family: 'Gilroy', sans-serif;
	width: 180px;
}

aside h4 {
	color: rgba(0, 0, 0, 0.34);
	font-weight: 800;
}

.categoryRadioContainer {
	margin: 0 0 9px 10px;
	display: flex;
	align-items: center;
}

.radio {
	display: inline-block;
	width: 13px;
	height: 13px;
	cursor: pointer;
}

.radio1 {
	background-color: #ffba7a;
}

.radio2 {
	background-color: #ff8ba0;
}

.radio3 {
	background-color: #ff99f5;
}

.radio4 {
	background-color: #58d9f5;
}

.radio5 {
	background-color: #adff90;
}

.filterCategoryName {
	margin-left: 12px;
	margin-top: 2px;
	font-size: 13px;
	font-weight: 600;
}

.divider {
	display: inline-block;
	background-color: #e4e4e4;
	width: 100%;
	height: 1px;
}

.mainContentContainer {
	width: 78%;
	font-family: 'Gilroy', sans-serif;
}

.sortContainer {
	display: flex;
	align-items: center;
}

.sortContainer > span {
	font-weight: 600;
	font-size: 13px;
}

.sortContainer div span {
	font-weight: 700;
	font-size: 13px;
}

.sortContainer div {
	background-color: black;
	color: white;
	margin-left: 20px;
	cursor: pointer;
	padding: 8px 20px;
}

.sortMenuContent{
	background-color:black;
	color:white;
	height: 40px;
	margin-top: 10px;
	width:90%;
	margin-left:98px;
	display: flex;
	align-items:center;
	justify-content: center;
}

.sortItemsContainer{
	display: flex;
>>>>>>> 1cf7496ad29c2a339f91aea8028e48f9781bad44
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
