<template>
    <div class="messagesContainer2">
        <div class="nameContainer">
            <h1>{{ selectedChat.user.firstname }} {{ selectedChat.user.lastname }}</h1>
            <h3>{{ selectedChat.user.course }}</h3>
        </div>
        <div v-for="(message,index) in selectedChat.messages" v-bind:key="index">
            <div class="messageContainer" :style="[message.type == 'received' ? {'background-color': '#000'} : {'background-color': '#E4E4E4'}]">
                <div class="messageHeader">
                    <h2
                    v-if="message.type == 'sent'"
                    style="color: #000"
                    >Eu</h2>
                    <h2 v-else style="color: #FFFFFF">{{selectedChat.user.username}}</h2>
                    <h3>{{message.time}}</h3>
                </div>
                <div class="messageContent" :style="[message.type == 'sent' ? {'color': '#000000'} : {'color': '#FFFFFF'}]">
                    {{message.message}}
                </div>
            </div>
        </div>
        <div class="inputContainer">
            <input type="text" name="message" id="message" placeholder="Escreve uma mensagem..." v-model="messageContent">
            <button @click="newMessage(selectedChat.user._id)">Enviar</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';
export default {
    name:"Message",
    data() {
        return {
            messageContent: '',
            chat:{},
        }
    },
    mounted () {
        getLoggedUser();
    },
    computed: {
        ...mapGetters(["getLoggedUser"]),
        selectedChat() {
            return this.$store.state.selectedChat;
        } 
               
    },
    methods: {
        ...mapActions(["sendMessage"]),

        async newMessage(id){
            const response = await this.sendMessage({
                id:id,
                message:this.messageContent,
            });
            this.$store.state.selectedChat.messages.push({
                type:'sent',
                message:this.messageContent,
                time: new Date()
            })
            console.log(response);
        }
    },
}
</script>

<style scoped>
    .messageContainer{
        background-color: #E4E4E4;
        padding:30px 40px 30px 40px;
        margin-top: 30px;
    }

    h2{
        font-weight: 800;
        font-size:18px;
        margin:0;
    }

    h3{
        font-weight: 700;
        font-size:14px;
        color:#848484;
        margin:0;
    }

    .inputContainer{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-bottom:32px;
        padding-left:5px;
        margin-top: 17px;

    }
    .inputContainer button {
	width: 10%;
	background-color: white;
    width: 120px;
    height: 54px;
	outline: 4px solid black;
	outline-offset: -2px;
	color: black;
	font-family: 'gilroy', sans-serif;
	font-weight: 700;
	box-sizing: border-box;
	padding-top: 3px;
	margin-left: 12px;
	margin-top:0px;
	margin-bottom: 1px;
	cursor: pointer;
	transition: all 0.08s ease-in-out;
	font-size: 20px;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
    }

    .inputContainer input {
        box-sizing: border-box;
        max-width: 500px;
        width: 100%;
        height: 50px;
        background-color: white;
        border: 0;
        color: black;
        font-family: 'gilroy', sans-serif;
        font-weight: 600;
        outline: 4px solid black;
        padding-left: 25px;
    }

    .nameContainer{
        display: flex;
        align-items: center;
        margin:0;
    }

    .nameContainer h3{
        margin-top:13px;
        margin-left: 4px;
    }

</style>