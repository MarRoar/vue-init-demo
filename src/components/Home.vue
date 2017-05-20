<template>
	<div id="home">
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
		<p>home</p>
	</div>
</template>
<script>
	export default {
		mounted () {
			this.$http.get('./src/data/test.data').then(function (res) {
				console.log(res);
			}).catch(function (err) {
				console.log("err", err)
			})
			// this.$http({

			// 	method: 'get',
			// 	url: 'data/test.data',
			// 	headers: {'X-Requested-With': 'XMLHttpRequest'},
			// 	data: {
			// 		firstName: 'Fred',
			// 		lastName: 'Flintstone'
			// 	}
			// }).then(function (res) {
			// 	console.log(res);
			// }).catch(function(err) {
			// 	console.log(err);
			// });
		}
	}

</script>