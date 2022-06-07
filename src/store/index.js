import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		posts: [],
		users: [],
		loggedUser: localStorage.loggedUser ? JSON.parse(localStorage.loggedUser) : null,
		categories: [],
		search: '',
		filteredPosts: [],
	},
	getters: {
		getLoggedUser: (state) => state.loggedUser,
		getCategories: (state) => state.categories,
		getUsers: (state) => state.users,
		getPosts: (state) => state.posts
	},
	mutations: {},
	actions: {
		async login({ context, state }, user) {
			const response = await axios.post('http://127.0.0.1:3000/users/login', {
				email: user.email,
				password: user.password
			});
			if (response.data.success == true) {
				localStorage.setItem('token', response.data.accessToken);
				localStorage.setItem('loggedUser', JSON.stringify(response.data.user));
			}
			return response;
		},
		async signup({ context, state }, user) {
			const response = await axios.post('http://127.0.0.1:3000/users', {
				username: user.username,
				firstname: user.firstname,
				lastname: user.lastname,
				number: user.number,
				course: user.course,
				course_year: user.course_year,
				birthdate: user.birthdate,
				email: user.email,
				photo: user.photo,
				password: user.password,
				confirmPassword: user.confirmPassword,
			});
			if (response.data.success == true) {
				state.users.push(response.data.user);
			}
			return response;
		},
		async newPost({ context, state }, post) {
			const response = await axios.post('http://127.0.0.1:3000/posts', {
				category: post.category,
				small_description: post.small_description,
				big_description: post.big_description,
				faq: post.faq,
				post_photo: post.post_photo,
			},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + localStorage.getItem('token'),
					}
				}
			);
			if (response.data.success == true) {
				state.posts.push(response.data.post);
			}
			return response;
		},
		async loadCategories({ context, state }) {
			const response = await axios.get('http://127.0.0.1:3000/categories');

			if (response.data.success == true) {
				state.categories = response.data.categories;
			}
			return response;
		},
		async loadUsers({ context, state }) {
			const response = await axios.get('http://127.0.0.1:3000/users');
			console.log(response);
			if (response.data.success == true) {
				state.users = response.data.users;
			}
			return response;
		},
		async loadPosts({ context, state }) {
			const response = await axios.get('http://127.0.0.1:3000/posts');
			console.log(response);
			if (response.data.success == true) {
				state.posts = response.data.posts;
			}
			return response;
		},
		async loadPostsByCategory({ context, state }, category) {
			const response = await axios.get(`http://127.0.0.1:3000/posts/filter/${category}`);
			console.log(response);
			if (response.data.success == true) {
				return response;
			}
		},
		async loadSinglePost({ context, state }, id) {
			const response = await axios.get(`http://127.0.0.1:3000/posts/${id}`);
			console.log(response);
			if (response.data.success == true) {
				return response;
			}
		},
		async commentPost({ context, state },newComment) {
			console.log(newComment);
			const response = await axios.put(`http://127.0.0.1:3000/posts/${newComment.id}/comments`,{
				id: newComment.id,
				comment: newComment.comment,
			},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + localStorage.getItem('token'),
					}
				}
			);
			if (response.data.success == true) {
				return response;
			}
		},
	},

	modules: {},
});
