<template>
	<panel title="Youtube Video">
		<youtube
		:video-id="youtubeId"
		:player-width="500"
		:player-height="139">
		</youtube>
	</panel>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
	props: [
		'youtubeId'
	]
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