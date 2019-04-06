<template>
	<v-layout v-if="$store.state.isUserLoggedIn">
		<v-flex xs6 offset-xs3>
			<panel title="Edit a Song">

					<v-text-field
						label="Title"
						v-model="song.title"
					>
					</v-text-field>

					<v-text-field
						label="Artist"
						v-model="song.artist"
					>
					</v-text-field>

					<v-text-field
						label="Album"
						v-model="song.album"
					>
					</v-text-field>

					<v-text-field
						label="Genre"
						v-model="song.genre"
					>
					</v-text-field>

					<v-text-field
						label="Album Image Online"
						v-model="song.albumImgUrl"
					>
					</v-text-field>

					<v-text-field
						label="Youtube ID"
						v-model="song.youtubeId"
					>
					</v-text-field>
					
					<v-text-field
						label="Lyrics"
						v-model="song.lyrics"
					>
					</v-text-field>

					<v-text-field
						label="Tab"
						v-model="song.tab"
					>
					</v-text-field>

					<v-btn
						class="blue-grey lighten-4
						"
						@click="editsong">
							Edit
					</v-btn>
			</panel>
		</v-flex>
	</v-layout>

	<v-layout v-else>
		<access-denied/>
	</v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import AccessDenied from '@/components/AccessDenied'

export default {
	data () {
		return {
			song: {},
			error: null	
		}
	},
	methods: {
		async editsong() {
			const songId = this.$store.state.route.params.songId
			try
			{
				this.song = await SongsService.editsong(this.song)
				
				this.$router.push({
					name: 'song',
					params: {
					songId: songId
					}
				})
			}
			catch(error){
				throw error
			}
		},	
	},
	async mounted () {
			try{
				const songId = this.$store.state.route.params.songId
				this.song = (await SongsService.viewsong(songId)).data
			}
			catch (err)
			{
				console.log(err)
			}
	},
	components : {
		AccessDenied
	}		
}
</script>

<style scoped>
	.error{
		color: red;
	}
	.danger-error{
		color: red;
	}
</style>