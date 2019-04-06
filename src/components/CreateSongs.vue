<template>

	<v-layout v-if="$store.state.isUserLoggedIn">
		<v-flex xs6 offset-xs3>
			<panel title="Create a Song">
				<form
					name="create-songs-form"
					autocomplete="off">
					<v-text-field
						label="Title"
						required
						:rules="[required]"
						v-model="song.title"
					>
					</v-text-field>

					<v-text-field
						label="Artist"
						required
						:rules="[required]"
						v-model="song.artist"
					>
					</v-text-field>

					<v-text-field
						label="Album"
						required
						:rules="[required]"
						v-model="song.album"
					>
					</v-text-field>

					<v-text-field
						label="Genre"
						required
						:rules="[required]"
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

					<div class="danger-error" v-if="error">
					{{ error }}
					</div>

					<v-btn
						class="blue-grey lighten-4
						"
						@click="createsongs">
							Create
					</v-btn>

				</form>
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
			song: {
				title: null,
				artist: null,
				album: null,
				genre: null,
				albumImgUrl: null,
				youtubeId: null,
				lyrics: null,
				tab: null,
			}, 
			error: null,
			required: (value) => !!value || 'Required'	
		}
	},
	methods: {
		async createsongs() {
			this.error = null
			const areAllFielsFilledIn = Object
				.keys(this.song)
				.every(key => !!this.song[key])
				
			if(!areAllFielsFilledIn){
				this.error = 'Please fill all the requirements'
				return
			}
				try
				{
					const response = await SongsService.createsongs(
						this.song
					)
					this.$router.push({name: 'songs'})
				}
				catch(error){
					this.error = error.response.data.error
				}
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