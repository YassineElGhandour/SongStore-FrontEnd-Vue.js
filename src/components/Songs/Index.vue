<template>
	<v-layout v-if="$store.state.isUserLoggedIn">
		<v-flex xs6 offset-xs3>
			<song-search-panel/>
			<songs-panel class="mt-2"/>
		</v-flex>
	</v-layout>

	<v-layout v-else>
		<access-denied/>
	</v-layout>
</template>

<script>
import SongsPanel from '@/components/Songs/SongsPanel'
import SongsService from '@/services/SongsService'
import AccessDenied from '@/components/AccessDenied'
import SongSearchPanel from '@/components/Songs/SongSearchPanel'

export default {
	data() {
		return {
			songs: [		
			]
		}
	},
	components : {
		SongsPanel,
		AccessDenied,
		SongSearchPanel
	},
	methods: {
		navigateTo(route) {
			this.$router.push(route)
		}
	},
	async mounted () {
		this.songs = (await SongsService.index()).data
	}
		
}
</script>

<style scoped>
	.song{
		padding: 20px;
		height: 330px;
		overflow: hidden;
	}
	.song-title{
		font-size: 30px;
	}
	.song-artist{
		font-size: 24px;
	}
	.song-genre{
		font-size: 18px;
	}
	.album-image{
		width: 70%;
	}
</style>