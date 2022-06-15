<template>
    <div class="mainContainer">
        <div class="container">
            <div class="headerContainer">
                <h1>Página de Administrador</h1>
            </div>
            <div v-if="getLoggedUser.user_type == 'admin'" class="tableContainer">
                <table id="table">
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>EMAIL</th>
                        <th>NR ALUNO</th>
                        <th>DATA NASCIMENTO</th>
                        <th>PASSWORD</th>
                        <th>AÇÕES POSSIVEÍS</th>
                    </tr>
                    <tr v-for="(user, index) in getUsers" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ user.firstname }} {{ user.lastname }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.number }}</td>
                        <td>{{ user.birthdate }}</td>
                        <td>{{ user.password }}</td>
                        <td><router-link class="submitContainer" v-on:click.native="removeUser(user._id)" to="#" ><img 
                        src="../../public/assets/delete.png" 
                        alt=""
                        :style="{ 'width':'30px','heigth':'30px', 'align-items':'center'}"
                        ></router-link></td>
                    </tr>
                </table>
            </div>
            <div v-else-if="getLoggedUser.user_type == 'user' || getLoggedUser == null">
              <h1>UPS, parece que não tens permissões para aceder aqui!</h1>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
    export default {
        name:'Admin',
        data() {
            return {
            }
        },
        mounted () {
          this.loadUsers();
        },
        updated () {
            this.loadUsers();
        },
        computed: {
            ...mapGetters(['getUsers', 'getLoggedUser']),
        },
        methods: {
            ...mapActions(['loadUsers','deleteUser']),

            async removeUser(id) {
                const response = await this.deleteUser(id);
                console.log(response);
                if (response.data.success == true) {
                    this.$swal.fire({
                        title: 'Sucesso!',
                        text: 'Utilizador Removido da aplicação!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: "#000000",
                        color: "#000000"
                    })
                }
            },
        },
    }
</script>

<style lang="css" scoped>

.mainContainer {
	margin-top: 100px;
	font-family: 'Gilroy', sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
    background-color: white;
}

.headerContainer {
	font-weight: 900;
	font-size: 20px;
    margin-right: 900px;
}

#table {
  font-family: 'Gilroy', sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#table td, #table th {
  border: 1px solid #ddd;
  padding: 8px;
}

#table tr:nth-child(even){background-color: #f2f2f2;}

#table tr:hover {background-color: #bababa;}

#table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: black;
  color: white;
}

</style>