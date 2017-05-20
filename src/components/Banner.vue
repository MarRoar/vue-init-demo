<template>
	<div id="banner">
		<router-link to="/home" tag="li" active-class="active">
			<a href="">首页</a>
		</router-link>
		<router-link to="/follow" tag="li" active-class="active">
			<a href="">关注</a>
		</router-link>
	</div>
</template>
<style scoped>
	#banner {
		width: 100%;
		height: 50px;
		background-color: #fff;
		line-height: 50px;
		margin-bottom: 10px;
		position: fixed;
		top: 0px;
	}
	#banner li {
		float: left;
		width: 45%;
		text-align: center;
	}
	#banner li a {
		display: inline-block;
		width: 50px;
	}
	#banner .active a {
		border-bottom: 3px solid pink;
	}
</style>