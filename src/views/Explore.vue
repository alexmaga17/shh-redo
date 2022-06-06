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
				<PostCards />
			</div>
		</div>
	</div>
</template>

<script>
import CategoriesBar from '../components/CategoriesBar.vue';
import AsideAccordion from '../components/AsideAccordion.vue';
import PostCards from '../components/PostCards.vue';

export default {
	name: 'Explore',
	components: {
		CategoriesBar,
		AsideAccordion,
		PostCards,
	},
	data() {
		return {
			posts: this.$store.state.posts,
			arrayCategories: this.$store.state.arrayCategories,
			banner: false,
			isOpen: false
		};
	},
	methods: {
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
	},
};
</script>

<style scoped>
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
}
</style>
