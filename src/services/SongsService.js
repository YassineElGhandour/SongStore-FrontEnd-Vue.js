import Api from '@/services/Api'

export default {
	index (search){
		return Api().get('songs', {
			params:{
				search: search
		}})
	},
	createsongs (song){
		return Api().post('songs/add', song)
	},
	viewsong (songId){
		return Api().get(`song/${songId}`)
	},
	editsong (song){
		return Api().put(`song/edit/${song.id}`, song)
	}
}