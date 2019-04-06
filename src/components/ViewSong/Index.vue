<template>
	<div v-if="$store.state.isUserLoggedIn">
		<v-layout>
			<v-flex xs6 class="ml-2">
				<song-meta-data 
					:song="song"/>
			</v-flex>

			<v-flex xs6 class="ml-2">
				<youtube-view
			:youtubeId="song.youtubeId"/>
			</v-flex>
		</v-layout>

		<br>

		<v-layout>
			<v-flex xs6 class="ml-2">
				<tab
				:tab="song.tab"/>
			</v-flex>

			<v-flex xs6 class="ml-2">
				<lyrics
				:lyrics="song.lyrics"/>
			</v-flex>
		</v-layout>
	</div>

	<div v-else>
		<access-denied/>
	</div>


</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetaData from '@/components/ViewSong/SongMetaData'
import YoutubeView from '@/components/ViewSong/YoutubeView'
import Lyrics from '@/components/ViewSong/Lyrics'
import Tab from '@/components/ViewSong/Tab'
import AccessDenied from '@/components/AccessDenied'

export default {
	data(){
		return {
			song: {}
		}
	},
	async mounted() {
		const songId = this.$store.state.route.params.songId
		this.song = (await SongsService.viewsong(songId)).data
	},
	components: {
		SongMetaData,
		YoutubeView,
		Lyrics,
		Tab,
		AccessDenied
	}
}
</script>

<style scoped>
	
</style>