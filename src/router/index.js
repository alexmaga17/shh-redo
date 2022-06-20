import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Explore from '../views/Explore.vue';
import ExploreCategory from '../views/ExploreCategory.vue';
import Signup from '../views/Signup.vue';
import OfferHelp from '../views/OfferHelp.vue';
import EditProfile from '../views/EditProfile.vue';
import Post from '../views/Post.vue';
import Admin from '../views/Admin.vue';
import NewMessage from '../views/NewMessage.vue';
import Messages from '../views/Messages.vue';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/explore',
		name: 'explore',
		component: Explore,
		// children: [
		// 	{
		// 		path: ':categoryName',
		// 		name: 'exploreCategory',
		// 		component: ExploreCategory,
		// 	},
		// ],
	},
	{
		path: '/posts/:categoryName',
		name: 'exploreCategory',
		component: ExploreCategory,
	},
	{
		path: '/post/:id',
		name: 'Post',
		component: Post,
	},
	// {
	// 	path: '/category/:categoryName',
	// 	name: 'exploreCategory',
	// 	component: ExploreCategory,
	// },
	{
		path: '/signup',
		name: 'Signup',
		component: Signup,
	},
	{
		path: '/offerhelp',
		name: 'OfferHelp',
		component: OfferHelp,
	},
	{
		path: '/editprofile',
		name: 'EditProfile',
		component: EditProfile,
	},
	{
		path: '/admin',
		name: 'Admin',
		component: Admin,
	},
	{
		path: '/post/:id/newmessage',
		name: 'NewMessage',
		component: NewMessage,
	},
	{
		path: '/messages',
		name: 'Messages',
		component: Messages,
	}
];

const router = new VueRouter({
	routes,
});

export default router;
