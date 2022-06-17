<template>
    <div class="mainContainer">
        <div class="contentContainer">
            <aside>
                <h4>Contactos</h4>
                <div class="contactsContainer" v-for="(chat,index) in getLoggedUser.chats" v-bind:key="index">
                    <div class="contactContainer" @click="selectChat(chat)">
                        <div class="contactTop">
                            <div class="fotoContainer">	<img :src="chat.user.photo" id="profile" alt=""/>
                            </div>
                            <div class="nomeContainer"><span>{{chat.user.firstname}}</span></div>
                            <div class="categoriaContainer"><span>{{chat.user.course }}</span></div>
                            </div>
                        <div class="contactBottom"><span>Online há 3 dias</span></div>
                    </div>
                    <span class="divider"></span>
                </div>
            </aside>
            <div class="mainContentContainer">
                <div class="chatMainContainer">
                    <div class="chatHeader">
                        <div class="chatHeaderLeft">              
                        </div>
                        <div class="chatHeaderRight">
                        </div>
    
                    </div>
                    <div class="messagesContainer">
                        <Message/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Message from '../components/Message.vue';

    export default {
        name:'Messages',
        components:{ 
            Message 
        },
        data() {
            return {
                message:'',
            }
        },
        computed: {
            getLoggedUser(){
			    let user = this.$store.getters.getLoggedUser
			    return user;
		}
        },
        methods: {
            selectChat(chat) {
                this.$store.state.selectedChat = chat;
                console.log(this.$store.state.selectedChat);
            }
        },
    }
</script>

<style scoped>
.mainContainer {
	margin-top: 100px;
	font-family: 'Gilroy', sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
    background-color: white;
    min-height: 80vh;
}

.contentContainer{
    display:flex;
    width: 90%;
    max-width: 1300px;
    justify-content: space-between;
}

.headerContainer {
	font-weight: 900;
	font-size: 35px;
    margin-right: 900px;
}

aside{
    width:180px;
}

.divider {
	display: inline-block;
	background-color: #e4e4e4;
	width: 100%;
	height: 1px;
}

.contactContainer:first-child{
    margin-top:30px;
}

.contactContainer{
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-top: 7px;
}

.contactTop{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.categoriaContainer span{
    padding-bottom: 0;
    font-size:15px;
    font-weight: 800;
}

.fotoContainer img{
    width:55px;
    height:55px;
    border-radius: 50%;
}
.contactBottom{
    display:flex;
    align-items:flex-start
}

.contactBottom span{
    font-size:9px;
    color: #BDBDBD;
    font-weight: 600;
}

.nomeContainer span{
    font-size: 25px;
    font-weight: 800;
}

.mainContentContainer{
    width:76%;
}

.chatHeader{
    display:flex;
    align-items: flex-end;
    justify-content: space-between;
}

.chatHeaderLeft{
    display:flex;
    align-items: flex-end;
}


h2{
    font-size:60px;
    margin:0;
    height:60px;
    font-weight: 800;
}

h4{
    margin:0;
}

.inputContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom:32px;
    padding-left:5px;
    margin-top: 12px;

}

.inputContainer img{
    width:40px;
    height:40px;
    padding-left: 8px;
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

</style>