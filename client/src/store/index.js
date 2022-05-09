// [IMPORT] //
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		nodeENV: 'development',
		isHomePage: false,
		
		loading: false,
		
		showIntro: true,
		showMenu: false,
		showNavBar: true,
		showNavBarLogo: true,
		showFooter: true,

		admin: {
			logged: false,
			decoded: {}
		},
	},

	// Syncrous //
	mutations: {
		isLoading(state) { state.loading = true },

		isNotLoading(state) { state.loading = false },
	},

	// Asyncronous //
	actions: {},

	getters: {},
	
	modules: {},
});
