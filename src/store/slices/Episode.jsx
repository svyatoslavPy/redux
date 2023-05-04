import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// Slice
const slice = createSlice({
	name: 'episode',
	initialState: {
		episode: [],
		selectedEpisode: [],
		loading: true,
	},
	reducers: {
		setDataEpisode: (state, action) => {
			state.episode = action.payload
		},
		setLoading: (state, action) => {
			state.loading = action.payload
		},
		setSelectedEpisode: (state, action) => {
			state.selectedEpisode = action.payload
		},
	},
})

export default slice.reducer

const { setDataEpisode, setLoading, setSelectedEpisode } = slice.actions

export const fetchEpisode = url => dispatch => {
	axios
		.get(url)
		.then(data => {
			dispatch(setDataEpisode(data.data))
			dispatch(setLoading(false))
		})
		.catch(err => {
			console.log(err, 'error')
		})
}

export const fetchEpisodeSelected = id => dispatch => {
	axios
		.get(id)
		.then(resp => {
			dispatch(setSelectedEpisode(resp))
		})
		.catch(err => {
			console.log(err, 'error')
		})
}
