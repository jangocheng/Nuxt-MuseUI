<style scoped>
	#header {
		width: 100%;
		height: 60px;
		border-bottom: 1px solid #999;
	}

	.header-wrap {
		width: 1200px;
		line-height: 60px;
		height: 60px;
		margin: 0 auto;
	}

	.header-wrap a {
		margin-right: 30px;
		color: #000;
	}

	.header-wrap a:hover {
		color: #ff4081;
	}

	#header .nuxt-link-exact-active {
		color: #ff4081;
	}

</style>
<template>
	<div id="header">
		<div class="header-wrap">
			<!--<a href="javascripr:(void);"
			   :class="{'active-nav':item.path === activeName}"
			   @click="router(item.path)"
			   v-for="item in lists"
			   v-html="item.name"></a>-->
			<nuxt-link to="/"  active-class="router-link-active" tag="a">HOME</nuxt-link>
			<nuxt-link to="/about" active-class="router-link-active" tag="a">ABOUT</nuxt-link>


			<a href="javscript:;" @click="router('/login')" style="margin-left:1000px;">LOGIN</a>

		</div>
	</div>

</template>
<script>
	export default {
		data() {
			return {
				//activeName:window.sessionStorage.getItem("_activeName") || '/',
				lists:[
					{
						name:'HOME',
						path:'/'
					},
					{
						name:'ABOUT',
						path:'/about'
					}
				]
			}
		},
		computed: {},
		props: [],
		components: {},
		methods: {
			handleSelect(event) {
				//this.activeIndex = event || 1;
			},
			router(s) {
				//window.sessionStorage.setItem("_activeName",s)
				this.$router.push({path: s})
			}
		},
		mounted() {


		}

	}
</script>
