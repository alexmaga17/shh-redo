<template>
	<div class="mainContainer">
		<div>
			<div class="headerContainer">
				<img
					src="../../public/assets/noun-sending-email-1259870.svg"
					alt=""
					id="paperPlane"
				/>
				<div>
					<h1>Escreve uma mensagem para {{ user.firstname }}</h1>
					<h2>
						Lembra-te que deves ser sempre respeitoso com qualquer
						um dos ajudantes.
					</h2>
				</div>
			</div>
			<textarea name="message" id="messageTA" v-model="messageContent"></textarea>
			<div class="btnContainer">
				<router-link v-on:click.native="newMessage(user._id)" to="#" id="btnMessage">Enviar Mensagem</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'NewMessage',
	data() {
		return {
			user:{},
			messageContent:'',
		};
	},
	mounted () {
		this.getUser();
		console.log(this.user);
		//console.log(this.getLoggedUser);
	},
	computed: {
		...mapGetters(["getLoggedUser"]),
	},
	methods: {
		...mapActions(["loadSingleUser","sendMessage"]),

		async getUser(){
			const response = await this.loadSingleUser(this.$route.params.id);
			//console.log(response);
			if(response.data.success == true){
				this.user = response.data.user;
			}
		},
        async newMessage(id){
			if(this.getLoggedUser._id === id){
				this.$swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Não podes enviar mensagens a ti próprio! :)',
					confirmButtonText: 'OK',
					confirmButtonColor: "#000000",
					color:"#000000"
				})
			}else{
				const response = await this.sendMessage({
					id:id,
					message:this.messageContent,
				});
				console.log(response);
			}	
        } 
	},
};
</script>

<style scoped>
.mainContainer {
	margin-top: 71px;
	font-family: 'Gilroy', sans-serif;
	display: flex;
	justify-content: center;
}

.mainContainer > div {
	width: 70%;
	margin-top: 70px;
	margin-bottom: 70px;
}

.headerContainer {
	display: flex;
}

.headerContainer div {
	display: flex;
	flex-direction: column;
}

h1 {
	margin: 10px 0 0 0;
}

h2 {
	margin: 0 0 10px 0;
	font-weight: 600;
	color: #949494;
	font-size: 15px;
}

#paperPlane {
	width: 130px;
}

h1 {
	font-weight: 800;
	font-size: 45px;
}

textarea {
	width: 100%;
	height: 300px;
}

#btnMessage {
	width: 30%;
	max-width: 250px;
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
	margin-top: 30px;
	cursor: pointer;
	transition: all 0.08s ease-in-out;
	font-size: 15px;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
