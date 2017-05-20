import Home from './components/Home.vue'
import Follow from './components/Follow.vue'

export default [
	{
		path: '/home', component: Home
	},
	{
		path: '/follow', component: Follow
	},
	{
		path: '/user', component: Home
	},
	{
		path: '/mine', component: Follow
	},
	{
		path: '', redirect: '/home'
	}
]