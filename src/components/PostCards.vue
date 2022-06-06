<template>
	<div class="postsContainer">
		<div
			class="cardContainer"
			v-for="(post, _id) in getPosts"
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
						<h2>#1</h2>
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
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'PostCard',
	data() {
		return {
			// posts: this.$store.state.posts,
			cardShadow:
				'3px -3px 28px -8px rgba(0, 0, 0, 0.1), inset -5px -23px 0px -13px',
			opacity: '',
		};
	},
	mounted () {
		this.loadPosts();
		this.loadCategories();
	},
	computed: {
		...mapGetters(["getPosts", "getCategories"])
	},
	methods: {
		...mapActions(["loadPosts","loadCategories"]),
		
		goToPost(postID) {
			this.$router.push({ name: 'Post', params: { id: postID } });
		},
	},
};
</script>

<style scoped>
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
