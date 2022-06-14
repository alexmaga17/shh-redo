<template>
	<div>
		<div  v-if="getLoggedUser != null" class="container">
			<div class="topContainer">
				<img
					:src="getLoggedUser.photo"
					id="profile"
					alt=""
					width="100"
					height="100"
				/>
				<h1>Olá {{ getLoggedUser.firstname }}!</h1>
			</div>
			<div class="secondContainer">
				<h4>Informações do Utilizador</h4>
				
				<div class="editContainer">
					<div class="infoContainer nameContainer">
						<span>Primeiro Nome</span>
						<span class="value">{{ getLoggedUser.firstname }}</span>
					</div>
					<div class="infoContainer surnameContainer">
						<span>Apelido</span>
						<span class="value">{{ getLoggedUser.lastname }}</span>
					</div>
					<div class="infoContainer courseContainer">
						<span>Curso</span>
						<span class="value">{{ getLoggedUser.course }} {{ getLoggedUser.course_year }}ºano</span>
					</div>
					<div class="infoContainer numberContainer">
						<span>Número de aluno</span>
						<span class="value">{{ getLoggedUser.number }}</span>
					</div>
					<div class="infoContainer dobContainer">
						<span>Data de Nascimento</span>
						<span class="value">{{ getLoggedUser.birthdate }}</span>
					</div>
					<div class="infoContainer emailContainer">
						<span>Email</span>
						<span class="value">{{ getLoggedUser.email }}</span>
					</div>
				</div>
			</div>

			<div class="thirdContainer">
				<h4>Editar Palavra-passe</h4>
				<div class="divider"></div>
				<div class="formContainer">
					<form>
						<div class="passContainer">
							<label for="actualPass">Palavra-passe atual</label>
							<input type="password" name="" placeholder="Palavra-passe atual" v-model="password" />
							<br>
							<label for="newPass">Palavra-passe Nova</label>
							<input type="password" name="" placeholder="Palavra-passe atual" v-model="newPassword" />
						</div>	
					</form>
				</div>
				<div class="submitContainer">
					<button @click="checkPass()">Editar</button>
				</div>
			</div>
		</div>
		<div v-else>
			<h1>Não estás logado!</h1>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'EditProfile',
	data() {
		return {
			password:'',
			newPassword: '',
		};
	},
	computed: {
		//...mapGetters(['getLoggedUser']),
		getLoggedUser(){
			let user = this.$store.getters.getLoggedUser
			return user;
		}
	},
	methods: {
		checkPass() {
			if(this.password == this.getLoggedUser.password){
				this.getLoggedUser.password = this.newPassword;
				alert('PASSWORD ALTERADA!')
			}
		}
	},
};
</script>

<style scoped>
.container {
	height: 121vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 70px;
	background-color: black;
	font-family: 'Gilroy', sans-serif;
	color: white;
}

.topContainer {
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 44px;
	font-weight: 800;
	object-fit: cover;
}

img{
	width: 150px;
	height: 150px;
	border-radius: 50%;
	object-fit: cover;
}

.topContainer h1 {
	margin-top: 20px;
	margin-bottom: 20px;
}

.secondContainer {
	width: 70%;
}

.secondContainer h4 {
	padding-left: 30px;
}

.infoContainer {
	display: flex;
	flex-direction: column;
}

.infoContainer span:first-child {
	font-size: 12px;
}

.value {
	font-weight: 700;
	font-size: 21px;
}

.divider {
	width: 100%;
	height: 0px;
	background-color: #bababa;
}

.passContainer input {
	box-sizing: border-box;
	max-width: 500px;
	width: 100%;
	height: 45px;
	background-color:white;
	border: 0;
	color: black;
	font-family: 'gilroy', sans-serif;
	font-weight: 600;
	outline: none;
	padding-left: 20px;
}
.submitContainer button {
	width: 10%;
	background-color: black;
	height: 37px;
	border: 0;
	outline: 3px solid white;
	outline-offset: -2px;
	color: white;
	font-family: 'gilroy', sans-serif;
	font-weight: 700;
	box-sizing: border-box;
	padding-top: 3px;
	margin-left: 30px;
	margin-top:15px;
	margin-bottom: 1px;
	cursor: pointer;
	transition: all 0.08s ease-in-out;
	font-size: 20px;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
}

.editContainer {
	margin-top: 50px;
	margin-bottom: 0;
	padding-left: 50px;
	padding-bottom: 0;
	display: grid;
	width: 50%;
	grid-template-columns: 1.9fr 1.5fr 2fr 2fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}

.thirdContainer {
	width: 70%;
}

.thirdContainer h4 {
	padding-left: 30px;
}

.dobContainer {
	grid-row: 3/4;
}

.nifContainer {
	grid-row: 5/6;
}
.numberContainer {
	grid-row: 3/4;
	grid-column: 4/5;
}

.emailContainer {
	grid-row: 1/2;
	grid-column: 4/5;
}

.formContainer input {
	box-sizing: border-box;
	max-width: 300px;
	width: 30%;
	height: 20px;
	background-color: white;
	border: 0;
	color: black;
	font-family: 'gilroy', sans-serif;
	font-weight: 600;
	outline: none;
	padding-left: 20px;
	margin-top: 15px;
}
</style>
