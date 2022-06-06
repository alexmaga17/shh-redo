<template>
    <div class="mainContainer">
        <div class="container">
            <div class="headerContainer">
                <h1>Mensagens</h1>
            </div>
            <div class="assideContainer">
                <h4>Contactos</h4>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Messages',
        components:{},
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

.headerContainer {
	font-weight: 900;
	font-size: 35px;
    margin-right: 900px;
}
</style>