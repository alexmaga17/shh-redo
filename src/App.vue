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
//import Help from './components/Help.vue';

export default {
	name: 'app',
	components: {
		NavBar,
		Footer,
		//Help, // register component
	},
};
</script>
<style>
body {
	margin: 0;
	padding: 0;
}
</style>
