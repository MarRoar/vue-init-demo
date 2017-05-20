<template>
	<div id="footer">
		<router-link to="/user" tag="li" active-class="active">
			<a href="">用户</a>
		</router-link>
		<router-link to="/mine" tag="li" active-class="active">
			<a href="">我的</a>
		</router-link>
	</div>
</template>
<style scoped>
	#footer {
		width: 100%;
		height: 50px;
		background-color: #fff;
		line-height: 50px;
		/*display: fixed;*/
		position: fixed;
		bottom: 0px;
		background-color: #ccc;
	}
	#footer li {
		float: left;
		width: 45%;
		text-align: center;
	}
	#footer li a {
		display: inline-block;
		width: 50px;
	}
	#footer .active a {
		border-bottom: 3px solid pink;
	}
</style>