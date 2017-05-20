import getters from './getter.js'
const state = {
	header: true
}

const mutations = {
	showHeader () {
		state.header = true;
	},
	hideHeader () {
		state.header = false;
	},
}

export default {
	state,
	mutations,
	getters
}