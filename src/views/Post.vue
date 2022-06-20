<template>
	<div class="mainContainer">
		<div class="mainContentContainer">
			<div
				class="category"
				id="category1"
				v-bind:style="{ 'border-color': post.category.color_category }"
			>
				<router-link
					:to="{ name: 'exploreCategory', params: { id: 0 } }"
					>{{ post.category.category }}</router-link
				>
			</div>
			<img id="photoContainer" :src="post.post_photo" alt="" />
			<div class="descriptionContainer">
				<h4>Descrição</h4>
				<p>{{ post.big_description }}</p>
			</div>
			<div class="divider"></div>
			<div class="faqContainer">
				<h4>Perguntas Frequentes</h4>
				<div class="questionContainer">
					<div
						class="filterHeader"
						@click="toggleAccordion()"
						:aria-expanded="isOpen"
						:aria-controls="`collapse${_uid}`"
					>
						<p>{{ post.faq }}</p>
						<img
							src="../../public/assets/noun-arrow-2601642.svg"
							alt=""
							:class="{ down: isOpen, up: !isOpen }"
						/>
					</div>
					<div
						class="filterContent"
						v-show="isOpen"
						:id="`collapse${_uid}`"
					>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Modi et iste, sapiente mollitia dolorem neque
							quaerat aliquam autem dicta ratione. Iste tempore
							nesciunt odit possimus enim doloribus nemo!
							Voluptate, excepturi?
						</p>
					</div>
				</div>
			</div>
			<div class="divider"></div>
			<div class="ratingContainer1">
				<h4>Avaliação</h4>
				<div class="ratingContainer2">
					<div class="starsContainer">
						<star-rating
                        class=""
                        :animate="true"
                        :active-on-click="true"
                        :star-size="18"
                        active-color="#000000"
						v-model="rating"
                     	></star-rating>
					</div>
					<span
						class="overallRating"
						v-bind:style="{ color: post.category.color_category }"
						>{{ post.overallRating }}</span
					>
					<span class="numRating"
						>{{ post.gamification.reviews.length }} Avaliações</span
					>
				</div>
				<div class="commentsContainer1">
					<h4>Comentários</h4>
					<div class="commentInput">
						<input type="text" name="comment" id="comment" placeholder="Faça um comentário" v-model="comment">
						<img src="../../public/assets/send.png" alt="" @click="makeComment">
					</div>
						<div v-if="post.comments.length > 0">
							<div v-for="(comment, id) in post.comments" :key="id" class="cardComments">
								<div class="commentsContainer2">
									<img :src="comment.user.photo" alt="">
									<div class="userInfoContainer">
										<h4>{{ comment.user.firstname }} {{ comment.user.lastname }} </h4>
										<h5>@{{ comment.user.username }}</h5>
									</div>	
								</div>	
								<div class="commentsContainer3">
									<h6>{{ comment.comment }}</h6>
								</div>
							</div>
						</div>
						<div v-else>
							<h5>Ainda não há comentários neste anúncio, sê o primeiro!</h5>
						</div>	
				</div>
			</div>
		</div>
		<aside>
			<div>
				<img
					:src="post.user.photo"
					id="profile"
					alt=""
					width="90"
					height="90"
				/>
				<h1>{{ post.user.firstname }} {{ post.user.lastname }}</h1>
			</div>
			<h2 v-bind:style="{ color: post.category.color_category }">
				{{ post.user.course }}
			</h2>
			<h2 v-bind:style="{ color: post.category.color_category }">{{ post.user.course_year }}º ANO</h2>
			<div class="divider"></div>
			<div class="ratingContainer">
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
				<span
					class="overallRating"
					v-bind:style="{ color: post.category.color_category }"
					>{{ post.overallRating }}</span
				>
				<span class="numRating"
					>{{ post.gamification.likes.length }} Avaliações</span
				>
			</div>
			<div class="btnClockContainer">
				<router-link
					:to="{
						name: 'NewMessage',
						params: { id: post.user._id },
					}"
					id="btnMessage"
					>Contactar {{ post.user.firstname }}</router-link
				>
				<img
					src="../../public/assets/noun-clock-1495285.svg"
					alt=""
					id="clock"
				/>
				<div>
					<span>Tempo de Resposta: No mesmo dia</span>
					<span>Tempo de Entrega: 2 a 3 dias</span>
				</div>
			</div>
		</aside>
	</div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';
import StarRating from "vue-star-rating";
export default {
	components: {
    	StarRating,
  	},
	data() {
		return {
			comment:'',
			rating:'',
			isOpen: false,
			post:{},
			// postInfo: this.$store.state.posts[this.$route.params.id],
			//comments:this.$store.state.posts.reviews[this.$route.params.id],
		};
	},
	mounted () {
		this.getPost();
		console.log(this.post);
	},
	computed: {
		...mapGetters(['getLoggedUser']),
		getLoggedUser(){
			let user = this.$store.getters.getLoggedUser
			return user;
		}
	},
	methods: {
		...mapActions(["loadSinglePost","commentPost"]),

		async getPost(){
			const response = await this.loadSinglePost(this.$route.params.id);
			//console.log(response);
			if(response.data.success == true){
				this.post = response.data.post;
			}
		},

		async makeComment(){
			if (this.getLoggedUser  == null){
				this.$swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Precisas de te autenticar para realizar comentários!',
					confirmButtonText: 'OK',
					confirmButtonColor: "#000000",
					color:"#000000"
					})
			}
			console.log(this.comment);
			const response = await this.commentPost({
				id:this.$route.params.id,
				comment: this.comment,
			});
			console.log(response);
			if(response.data.success == true){
				this.$swal.fire({
					title: 'Sucesso!',
					text: 'Comentário adicionado!',
					confirmButtonText: 'OK',
					confirmButtonColor: "#000000",
					color:"#000000"
				})
			}
		},

		toggleAccordion() {
			this.isOpen = !this.isOpen;
		},
	},
	// updated () {
	// 	this.getPost();
	// },
};
</script>

<style scoped>
.mainContainer {
	margin-top: 71px;
	margin-right: 0;
	font-family: 'Gilroy', sans-serif;
	max-width: 1000px;
	margin-bottom: 70px;
}

aside {
	position: fixed;
	max-width: 550px;
	top: 30%;
	right: 50px;
	padding-right: 30px;
	width: 33%;
}

aside div:first-child {
	display: flex;
	align-items: center;
}

aside div:first-child h1 {
	font-weight: 800;
	font-size: 53px;
	margin: 10px 0;
	padding-left: 20px;
}

aside h2 {
	font-size: 16px;
	margin: 10px 0;
}

aside div:nth-child(5) {
	margin: 13px 0;
	display: flex;
}

aside img{
	border-radius:50%;
}

.ratingContainer {
	display: flex;
	align-items: center;
}

.overallRating {
	padding-left: 5px;
	font-size: 25px;
	font-weight: 700;
}

.numRating {
	padding-top:3px;
	font-size: 14px;
	font-weight: 700;
	color: #b4b4b4;
	padding-left: 10px;
}

#btnMessage {
	width: 50%;
	background-color: white;
	height: 55px;
	border: 0;
	outline: 3px solid black;
	outline-offset: -2px;
	color: black;
	font-family: 'gilroy', sans-serif;
	font-weight: 800;
	box-sizing: border-box;
	padding-top: 3px;
	margin-bottom: 1px;
	cursor: pointer;
	transition: all 0.08s ease-in-out;
	font-size: 15px;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
}

.divider {
	width: 100%;
	height: 1px;
	background-color: #bababa;
}

.star {
	width: 17px;
	height: 17px;
	margin: 0 -2px;
}

.mainContentContainer {
	margin-top: 170px;
	padding-left: 100px;
	max-width: 640px;
}

.category {
	border-bottom: 5px solid;
	line-height: 7px;
	margin: 19px 0;
	transition: all 0.06s ease-in;
	width: 110px;
}

.category a {
	text-decoration: none;
	color: black;
	font-weight: 700;
}

.category:hover {
	border-width: 0;
	transform: scale(1.2);
	transform-origin: left -20%;
}

#category1 {
	grid-column: 2/3;
}

.descriptionContainer {
	margin-top: 60px;
}

h4 {
	font-size: 20px;
}

.descriptionContainer p {
	font-weight: 400;
	font-size: 15px;
}

.up {
	transform: rotate(180deg);
}

.down {
	transform: rotate(0deg);
}

.filterHeader {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 10px 0 0 0;
	cursor: pointer;
}

h5 {
	margin: 0;
}

.filterHeader img {
	height: 27px;
}

.ratingContainer1 {
	display: flex;
	flex-direction: column;
}

.ratingContainer2 {
	display: flex;
}

.faded {
	opacity: 31%;
}

.btnClockContainer {
	display: flex;
}

.btnClockContainer span {
	padding-top:5px;
}

#clock {
	width: 40px;
	padding-left: 20px;
}

.btnClockContainer div {
	display: flex;
	flex-direction: column;
	font-weight: 700;
	font-size: 13px;
}

#photoContainer {
	display: flex;
	width: 700px;
	height: 500px;
	object-fit:cover;
}
.commentInput{
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-bottom:32px;
	padding-left:5px;
}

.commentInput img{
	width:30px;
	height:30px;
	padding-left: 8px;
}
.commentInput input {
	box-sizing: border-box;
	max-width: 500px;
	width: 100%;
	height: 43px;
	background-color: white;
	border: 0;
	color: black;
	font-family: 'gilroy', sans-serif;
	font-weight: 600;
	outline: 3px solid black;
	padding-left: 25px;
}
.cardComments {
	padding-top: 0px;
	padding-bottom: 10px;
	padding-left:10px;
}
.deleteContainer {
	display: flex;
	flex-direction: row;
	padding-left: 250px;
}
#deletebtn{
	border-radius: 0;
	width:27px;
	height:27px;
}

.commentsContainer2{
	display: flex;
	align-items: center;
}

.userInfoContrainer{
	display: flex;
	flex-direction: column;
}
.commentsContainer2 img{
	border-radius: 50%;
	width: 65px;
	height: 65px;
	
}
.commentsContainer2 h4{
	font-size: 95%;
	margin-left: 6px;
	margin-bottom: 0;
}
.commentsContainer2 h5{
	display: flex;
	color:#bababa;
	font-size: 75%;
	padding-left: 5px;
	margin-bottom: 15px;

}

.commentsContainer3 h6{
	font-family:'Gilroy', sans-serif;
	font-weight:540;
	font-size: 92.5%;
	margin-top:-5px;
	margin-left: 70px; 

}

</style>
