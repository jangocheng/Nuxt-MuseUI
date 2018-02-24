<template>
	<div>
		<my-header/>
		<section class="container">
			<img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
			<h1 class="title">
				USERS
			</h1>
			<ul class="users">
				<li v-for="(user, index) in users" :key="index" class="user">
					<nuxt-link :to="{ name: 'id', params: { id: index }}">
						{{ user.name }}
					</nuxt-link>
				</li>
			</ul>
		</section>
		<my-footer/>
	</div>

</template>

<script>
import axios from '~/plugins/axios'
import MyFooter from '~/components/Footer.vue'
import MyHeader from '~/components/Header.vue'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },
  head () {
    return {
      title: 'NUXT-HOME'
    }
  },
	components:{
		MyFooter,MyHeader
	}
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
