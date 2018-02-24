<style scoped>
	#login {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #eeeeee;
	}

	.login-wrap {
		width: 1200px;
		height: 380px;
		position: absolute;
		top: -100px;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
	}

	.login-form {
		position: absolute;
		right: 0;
		top: 0;
		width: 300px;
		height: 330px;
		background: #ffffff;
		box-shadow: 2px 2px 2px #dddddd;
		box-sizing: border-box;
		padding: 20px 15px;
	}
	.login-form button{
		width: 100%;
		margin-top:10px;
	}
	h4{
		margin: 0 0 20px 0;
		width: 100%;
		height: 50px;
		line-height: 50px;
		border-bottom:2px solid #dddddd;
		font-size: 16px;
		text-align: center;
	}


</style>
<template>
	<div id="login">
		<div class="login-wrap">
			<div class="login-form animated jackInTheBox">
				<h4>Login-Admin</h4>

				<mu-text-field label="User" hintText="请输入用户名"/>
				<mu-text-field label="Password"  type="password" hintText="请输入用户密码"/>

				<mu-flat-button
						label="LOGIN" class="demo-flat-button"
						@click="goHome"
						backgroundColor="#eeeeee" secondary/>

			</div>
		</div>
		<div style="position: fixed;bottom: 0;left: 0;width: 100%;">
			<my-footer/>
		</div>

	</div>
</template>
<script>

	import MyFooter from '~/components/Footer.vue'
	export default {
		data() {
			return {

			}
		},
		head (){
			return {title: "NUXT"}
		},
		methods: {
			goHome () {
				this.$router.push({path:"/"})
			}

		},
		components:{
			MyFooter
		}
	}
</script>