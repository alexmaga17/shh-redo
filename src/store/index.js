import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		posts: [],
		users: [],
		loggedUser: localStorage.loggedUser ? JSON.parse(localStorage.loggedUser): null,
		categories: [],
		search: '',
		filteredPosts: [],
		selectedChat:{},
	},
	getters: {
		getLoggedUser: (state) => state.loggedUser,
		getCategories: (state) => state.categories,
		getUsers: (state) => state.users,
		getPosts: (state) => state.posts
	},
	mutations: {
		loginSuccess(state, payload){
			state.loggedUser = payload;
		}
	},
	actions: {
		async login({ context, commit, state }, user) {
			const response = await axios.post('https://shhapi.herokuapp.com/users/login', {
				email: user.email,
				password: user.password
			});
			if (response.data.success == true) {
				commit('loginSuccess',response.data.user)
				localStorage.setItem('token', response.data.accessToken);
				localStorage.setItem('loggedUser', JSON.stringify(response.data.user));
			}
			return response;
		},
		async signup({ context, state }, user) {
			const response = await axios.post('https://shhapi.herokuapp.com/users', {
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
			const response = await axios.post('https://shhapi.herokuapp.com/posts', {
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
				return response;
			}
			
		},
		async loadCategories({ context, state }) {
			const response = await axios.get('https://shhapi.herokuapp.com/categories');

			if (response.data.success == true) {
				state.categories = response.data.categories;
			}
			return response;
		},
		async loadUsers({ context, state }) {
			const response = await axios.get('https://shhapi.herokuapp.com/users');
			console.log(response);
			if (response.data.success == true) {
				state.users = response.data.users;
			}
			return response;
		},
		async loadSingleUser({ context, state }, id) {
			const response = await axios.get(`https://shhapi.herokuapp.com/users/${id}`,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + localStorage.getItem('token'),
					}
				}
			);
			//console.log(response);
			if (response.data.success == true) {
				return response;
			}
		},

		async deleteUser({ context, state },id) {
			const response = await axios.delete(`https://shhapi.herokuapp.com/users/${id}`,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + localStorage.getItem('token'),
					}
				}
			);

			console.log(response);
			if (response.data.success == true) {
				console.log(response);
			}
			return response;
		},
		async loadPosts({ context, state }) {
			const response = await axios.get('https://shhapi.herokuapp.com/posts');
			console.log(response);
			if (response.data.success == true) {
				state.posts = response.data.posts;
			}
			return response;
		},
		async loadPostsByCategory({ context, state }, category) {
			const response = await axios.get(`https://shhapi.herokuapp.com/posts/filter/${category}`);
			console.log(response);
			if (response.data.success == true) {
				return response;
			}
		},
		async loadSinglePost({ context, state }, id) {
			const response = await axios.get(`https://shhapi.herokuapp.com/posts/${id}`);
			console.log(response);
			if (response.data.success == true) {
				return response;
			}
		},
		async commentPost({ context, state },newComment) {
			console.log(newComment);
			const response = await axios.put(`https://shhapi.herokuapp.com/posts/${newComment.id}/comments`,{
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
		async sendMessage({ context, state },message) {
			//console.log(message);
			const response = await axios.put(`https://shhapi.herokuapp.com/users/${message.id}/messages`,{
				id: message.id,
				message: message.message,
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
