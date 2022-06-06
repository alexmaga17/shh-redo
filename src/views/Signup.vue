<template>
	<div class="mainContainer">
		<div class="container">
			<div class="headerContainer"><h1>Signup</h1></div>
			<div class="formContainer">
				<form @submit.prevent="addUser()">
					<div class="inputContainer">
						<label for="firstName">Primeiro Nome</label>
						<br />
						<input type="text" id="firstName" v-model="firstname" />
					</div>
					<div class="inputContainer">
						<label for="lastName">Apelido</label>
						<br />
						<input
							type="text"
							id="lastName"
							v-model="lastname"
						/>
					</div>
					<div class="inputContainer">
						<label for="username">Username</label>
						<br />
						<input
							type="text"
							id="username"
							v-model="username"
						/>
					</div>
					<div class="inputContainer">
						<label for="number">Número de aluno</label>
						<br />
						<input type="text" id="number" v-model="number" />
					</div>
					<div class="inputContainer">
						<label for="course">Curso que frequenta</label>
						<br />
						<select name="course" id="course" v-model="course">
  							<option value="TSIW">TSIW</option>
  							<option value="Design">Design</option>
 							<option value="Fotografia">Fotografia</option>
  							<option value="Multimédia">Multimédia</option>
							<option value="TCAV">TCAV</option>
						</select>
					</div>
					<div class="inputContainer">
						<label for="course">Ano que frequenta</label>
						<br />
						<select name="year" id="year" v-model="course_year">
  							<option value="1">1º</option>
  							<option value="2">2º</option>
 							<option value="3">3º</option>
						</select>
					</div>
					<div class="inputContainer">
						<label for="nif">NIF</label>
						<br />
						<input type="text" id="nif" v-model="nif" />
					</div>
					<div class="inputContainer">
						<label for="birthDate">Data de Nascimento</label>
						<br />
						<input type="date" id="birthDate" v-model="birthdate" />
					</div>
					<div class="divider"></div>
					<div class="inputContainer">
						<label for="email">E-mail</label>
						<br />
						<input type="email" id="email" v-model="email" />
					</div>
					<div class="inputContainer">
						<label for="photo">Foto de perfil</label>
						<br />
						<input type="text" id="photo" v-model="photo" />
					</div>
					<div class="inputContainer">
						<label for="password">Palavra-passe</label>
						<br />
						<input
							type="password"
							id="password"
							v-model="password"
						/>
					</div>
					<div class="inputContainer">
						<label for="confirmPassword"
							>Confirmar Palavra-passe</label
						>
						<br />
						<input
							type="password"
							id="confirmPassword"
							v-model="confirmPassword"
						/>
						<span class="pwLength">
							A tua palavra-passe deve conter entre 8 e 16
							caracteres.
						</span>
					</div>
					<div class="divider divider2"></div>
					<div class="submitContainer">
						<router-link v-on:click.native="addUser" to="#" >Criar Conta</router-link>
						<p>
							Ao criares conta estás a concordar com os termos de
							utilização e de privacidade
						</p>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	name: 'Signup',
	components: {},
	data() {
		return {
				firstname: '',
				lastname: '',
				username:'',
				number: '',
				course:'',
				course_year:'',
				birthdate: '',
				email: '',
				nif: '',
				photo:'',
				password: '',
				confirmPassword: '',

		};
	},
	created() {

	},
	computed: {
		...mapGetters(['getUsers']),
	},
	methods: {
		...mapActions(['signup']),

		async addUser() {
			const response = await this.signup({
				username: this.username,
				firstname: this.firstname,
				lastname: this.lastname,
				number: this.number,
				course: this.course,
				course_year: this.course_year,
				birthdate: this.birthdate,
				email: this.email,
				photo: this.photo,
				password: this.password,
				confirmPassword: this.confirmPassword,
			});
			console.log(response);
			if(response.data.success == true){
				this.$router.push('/');
			}
		},

	},
};
</script>

<style scoped>
.mainContainer {
	font-family: 'Gilroy', sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 240px;
	margin-bottom: 150px;
	height: 155vh;
}

.container {
	display: flex;
	justify-content: center;
	width: 90%;
}

h1 {
	font-weight: 900;
	margin: 0;
	font-size: 70px;
}

.formContainer {
	margin-left: 60px;
}

.formContainer input {
	box-sizing: border-box;
	max-width: 500px;
	width: 100%;
	height: 45px;
	background-color: black;
	border: 0;
	color: white;
	font-family: 'gilroy', sans-serif;
	font-weight: 600;
	outline: none;
	padding-left: 20px;
}

.formContainer select {
	box-sizing: border-box;
	max-width: 500px;
	width: 100%;
	height: 45px;
	background-color: black;
	border: 0;
	color: white;
	font-family: 'Gilroy', sans-serif;
	font-weight: 600;
	outline: none;
	padding-left: 20px;
}

.formContainer label {
	font-size: 11px;
	font-weight: 700;
}

.inputContainer {
	margin-bottom: 30px;
}
.divider {
	width: 100%;
	height: 1px;
	background-color: #e4e4e4;
	margin: 50px 0 30px 0;
}

.divider2 {
	margin-bottom: 50px;
}

.submitContainer {
	width: 100%;
	display: flex;
}

.submitContainer p {
	font-size: 9px;
	font-weight: 700;
	width: 40%;
	padding-left: 40px;
}

.submitContainer a {
	width: 50%;
	background-color: white;
	height: 45px;
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
	font-size: 20px;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
}

.pwLength {
	font-weight: 700;
	font-size: 12px;
}
</style>
