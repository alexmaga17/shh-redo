<template>
	<div v-if="getCategories.length > 0">
		<div class="container1">
			<video id="videoBG" poster="" autoplay muted loop>
				<source
					id="vid"
					v-bind:src="getCategories[randomID].video_category"
					type="video/webm"
				/>
			</video>
			<div class="textContainer">
				<div class="headerContainer1">
					<h1>{{ getCategories[randomID].header }}</h1>
					<span
						id="headerUnderline"
						:style="{
							'background-color': getCategories[randomID].color_category,
						}"
					></span>
				</div>
				<div class="exploreLinkContainer">
					<router-link to="#"
						>Ver todos os ajudantes
						<img
							src="../../public/assets/noun-arrow-1778571.svg"
							id="arrow"
							alt=""
							:class="getCategories[randomID].color_category"
					/></router-link>
				</div>
			</div>
		</div>
		<div class="container2">
			<div class="headerContainer2 header1">
				<h1>Eleva o teu projeto</h1>
				<span
					>Secalhar precisas de um website para exibir as tuas fotos, ou talvez
					queiras um vídeo promocional para o teu projeto. Os teus colegas
					ajudantes conseguem fazer isto e muito mais.</span
				>
			</div>
			<span class="ou">ou</span>
			<div class="headerContainer2 header2">
				<h1>Ajuda outros colegas</h1>
				<span
					>Secalhar precisas de um website para exibir as tuas fotos, ou talvez
					queiras um vídeo promocional para o teu projeto. Os teus colegas
					ajudantes conseguem fazer isto e muito mais.</span
				>
			</div>
			<div class="postsContainer">
				<div class="postsLeft">
					<div class="postContainer"><img src="../../public/assets/posts/post1.png" alt="" class="post">
					<div class="infoContainer"><span>+ info</span></div></div>
					<div class="postContainer"><img src="../../public/assets/posts/post2.png" alt="" class="post"></div>
					<div class="postContainer"><img src="../../public/assets/posts/post3.png" alt="" class="post"></div>
				</div>
				<div class="postsRight">
					<div class="postContainer"><img src="../../public/assets/posts/post1.png" alt="" class="post"></div>
					<div class="postContainer"><img src="../../public/assets/posts/post2.png" alt="" class="post"></div>
					<div class="postContainer"><img src="../../public/assets/posts/post3.png" alt="" class="post"></div>
				</div>
			</div>
		</div>
		<div class="container3">
			<h1>Categorias</h1>
			<div id="bannersContainer">
				<div class="bannerContainer">
					<router-link to="#">Fotografia</router-link>
				</div>
				<div class="bannerContainer">
					<router-link to="#">Vídeo</router-link>
				</div>
				<div class="bannerContainer">
					<router-link to="#">Desenho</router-link>
				</div>
				<div class="bannerContainer">
					<router-link to="#">Web Design</router-link>
				</div>
				<div class="bannerContainer">
					<router-link to="#">Modelo</router-link>
				</div>
			</div>
		</div>
		<div class="container4">
			<div class="contentContainer1">
				<h1>Queres te tornar num ajudante?</h1>
				<div class="routerContainer">
					<router-link to="OfferHelp">Começa já</router-link>
				</div>
				<div class="advantagesContainer">
					<span> <span class="plus">+ </span>Melhoras o teu currículo</span
					><span
						><span class="plus">+ </span>Praticas as tuas capacidades
					</span>
				</div>
			</div>
		</div>
		<div class="container5">
			<div class="contentContainer2">
				<h1>Ainda não criaste conta? Tu é que perdes...</h1>
				<h2>
					<router-link to="signup">Sign Up</router-link>
				</h2>
				<h2>
					<router-link to="#">Login</router-link>
				</h2>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: "Home",
	components: {},
	data() {
		return {
			randomID: 0,
		};
	},
	mounted() {
		this.loadCategories();
		this.randomID = Math.floor(Math.random() * (5 - 0)) + 0;
	},
	computed: {
		...mapGetters(["getCategories"])
	},
	methods: {
		...mapActions(["loadCategories"])
	},
};
</script>

<style scoped>
.container1 {
	margin-top: 71px;
	height: 91vh;
	display: flex;
	align-items: center;
	background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
}

#videoBG {
	position: fixed;
	z-index: -1;
	width: 100%;
	height: auto;
}

.headerContainer1 {
	display: flex;
	width: 70%;
	margin-left: 3%;
	position: relative;
}

.headerContainer1 h1 {
	margin: 0;
	padding: 0;
	font-family: "gilroy", sans-serif;
	color: white;
	font-weight: 1000;
	font-size: 116px;
	line-height: 100%;
	z-index: 1;
}

#headerUnderline {
	height: 30px;
	position: absolute;
	bottom: -4px;
	left: 6px;
	width: 500px;
	z-index: 0;
}

.exploreLinkContainer {
	margin-left: 3.5%;
	padding-top: 25px;
}

.exploreLinkContainer a {
	text-decoration: none;
	color: white;
	font-family: "Gilroy", sans-serif;
	font-weight: 700;
	font-size: 20px;
	display: flex;
	align-items: center;
}

#arrow {
	width: 43px;
	padding-left: 8px;
}

.container2 {
	height: 75vh;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position:relative;

}

.headerContainer2 {
	max-width: 830px;
	text-align: center;
	z-index:2;
	pointer-events: none; 
}

.headerContainer2 h1 {
	font-size: 84px;
	font-family: "Gilroy", sans-serif;
	font-weight: 900;
	text-align: center;
	line-height: 88.5%;
	margin-bottom: 20px;
}

.headerContainer2 span {
	font-family: "Gilroy", sans-serif;
	font-weight: 600;
	color: #b4b4b4;
}

.ou {
	font-family: "Gilroy", sans-serif;
	margin-top: 20px;
	font-weight: 900;
	font-size: 30px;
}

.header2 h1 {
	margin-top: 10px;
}

.container3 {
	height: 95vh;
	background-color: white;
	position: relative;
}

.container3 h1 {
	color: black;
	font-family: "Gilroy", sans-serif;
	font-size: 84px;
	font-weight: 900;
	padding-left: 1%;
	margin: 0;
	position: relative;
	z-index: 1;
}

#bannersContainer {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	gap: 10px;
	width: 100%;
	height: 90%;
	position: absolute;
	top: 76px;
}

.bannerContainer {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	position: relative;
}

.bannerContainer:first-child {
	min-height: 100%;
	background: url(../../public/assets/photoBG.webp);
	background-size: cover;
	background-position: center;
	box-shadow: rgba(0, 0, 0, 0.2) 0px -250px 300px -90px inset,
		inset 0 0 0 2000px rgba(255, 186, 122, 0.92);
}

.bannerContainer:nth-child(2) {
	min-height: 100%;
	background: url(../../public/assets/videoBG.webp);
	background-size: cover;
	background-position: center;
	box-shadow: rgba(0, 0, 0, 0.2) 0px -250px 300px -90px inset,
		inset 0 0 0 2000px rgba(255, 139, 160, 0.92);
}

.bannerContainer:nth-child(3) {
	min-height: 100%;
	background: url(../../public/assets/drawBG.webp);
	background-size: cover;
	background-position: center;
	box-shadow: rgba(0, 0, 0, 0.2) 0px -250px 300px -90px inset,
		inset 0 0 0 2000px rgba(255, 153, 245, 0.92);
}

.bannerContainer:nth-child(4) {
	min-height: 100%;
	background: url(../../public/assets/codingBG.webp);
	background-size: cover;
	background-position: center;
	box-shadow: rgba(0, 0, 0, 0.2) 0px -250px 300px -90px inset,
		inset 0 0 0 2000px rgba(150, 236, 255, 0.92);
}

.bannerContainer:nth-child(5) {
	min-height: 100%;
	background: url(../../public/assets/modelBG.webp);
	background-size: cover;
	background-position: center;
	box-shadow: rgba(0, 0, 0, 0.3) 0px -250px 300px -90px inset,
		inset 0 0 0 2000px rgba(173, 255, 144, 0.92);
}

.bannerContainer a {
	text-decoration: none;
	color: white;
	font-family: "Gilroy", sans-serif;
	margin-bottom: 85px;
	font-size: 23px;
	font-weight: 700;
	border-bottom: 4px solid;
	border-color: white;
	line-height: 23px;
	transition: all 0.06s ease-in;
}

.bannerContainer a:hover {
	border-width: 0;
	transform: scale(1.3);
	transform-origin: center 80%;
}

.container4 {
	height: 450px;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
}

.contentContainer1 {
	height: 58%;
	max-width: 1000px;
	padding: 0 min(80px, 10%);
	display: grid;
	grid-template-columns: 1fr 1.5fr;
	grid-template-rows: 1fr 1.5fr;
}

.contentContainer1 h1 {
	grid-row: 1/2;
	grid-column: 1/3;
	margin: 0;
	color: white;
	font-family: "Gilroy", sans-serif;
	font-size: 82px;
	font-weight: 800;
	line-height: 94%;
}

.routerContainer {
	grid-row: 2/3;
	grid-column: 1/2;
	display: flex;
	justify-content: center;
	align-items: center;
}

.routerContainer a {
	color: white;
	text-decoration: none;
	font-family: "gilroy", sans-serif;
	border: 4px solid white;
	width: 240px;
	height: 57px;
	font-size: 30px;
	font-weight: 700;
	display: flex;
	justify-content: center;
	align-items: center;
}

.advantagesContainer {
	grid-row: 2/3;
	grid-column: 2/3;
	display: flex;
	flex-direction: column;
}

.advantagesContainer span {
	color: white;
	font-family: "gilroy", sans-serif;
	font-size: 32px;
	font-weight: 700;
}

.plus {
	font-weight: 1000 !important;
	font-size: 50px !important;
}

.container5 {
	height: 130px;
	background-color: white;
	display: flex;
	justify-content: center;
}

.contentContainer2 {
	width: 93%;
	height: 100%;
	display: flex;
	align-items: center;
}

.contentContainer2 h1 {
	margin: 0 auto 0 0;
	font-family: "Gilroy", sans-serif;
	font-size: 33px;
}

.contentContainer2 h2 a {
	color: black;
	text-decoration: none;
	font-family: "Gilroy", sans-serif;
	margin-right: 50px;
}


.postsContainer{
	height: 100%;
	display:flex;
	justify-content: space-between;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 0;
}

.postsLeft{
	display:grid;
	grid-template-rows: 2fr 0.5fr 2fr 0.5fr 2fr;
	height:100%;
	transform:translate(-130px)
}

.postsRight{
	display:grid;
	grid-template-rows: 2fr 0.5fr 2fr 0.5fr 2fr;
	height:100%;
	transform:translate(130px)
}

.post{
	height: 100px;
	cursor:pointer;
	opacity:0.5;
	transition: opacity 70ms ease-in-out;
	box-shadow: 5px 10px 27px 0px rgba(0,0,0,0.10);
}

.post:hover{
	opacity:1;
	transition: opacity 70ms ease-in-out;
}

.postContainer{
	display: flex;
	align-items: center;
	position:relative;
}

.infoContainer{
	position: absolute;
	top:55%;
	left:0;
	background-color: black;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items:center;
	color: white;
	height:40px;
	font-family: "Gilroy", sans-serif;
	cursor:pointer;
}

.postsLeft .postContainer:nth-child(2){
	grid-row: 3/4;
	transform:translate(-50px)

}

.postsLeft .postContainer:nth-child(3){
	grid-row: 5/6;
	transform:translate(-20px)
}

.postsRight .postContainer:nth-child(2){
	grid-row: 3/4;
	transform:translate(50px)
}

.postsRight .postContainer:nth-child(3){
	grid-row: 5/6;
	transform:translate(20px)
}

@media (min-aspect-ratio: 16/9) {
    #videoBG {
        width:100%;
        height: auto;
    }
}

@media (max-aspect-ratio: 16/9) {
    #videoBG { 
        width:auto;
        height: 100%;
    }
}

@media (max-width: 767px) {
    #videoBG {
        display: none;
    }
}
</style>
