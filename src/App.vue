<template>
	<div id="app">
		<NavBar />
		<router-view />
		<!-- <Help /> -->
		<Footer />
	</div>
</template>

<script type="text/javascript">
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import VueSweetalert2 from 'vue-sweetalert2';
//import Help from './components/Help.vue';

export default {
	name: 'app',
	components: {
		NavBar,
		Footer,
		VueSweetalert2
		//Help, // register component
	},
};
</script>
<style>
body {
	margin: 0;
	padding: 0;
	font-family: 'Gilroy', sans-serif;
}
</style>
