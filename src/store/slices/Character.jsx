import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


// Slice
const slice = createSlice({
	name: 'character',
	initialState: {
		character: [],
		selectedCharacter: [],
		loading: true
	},
	reducers: {
		setDataCharacter: (state, action) => {
			state.character = action.payload
		},
		setLoading: (state, action) => { 
			state.loading = action.payload
		},
		setSelectedCharacter: (state, action) => { 
			state.selectedCharacter = action.payload;
		}
	}
})

export default slice.reducer

const { setDataCharacter, setLoading, setSelectedCharacter } = slice.actions


export const fetchChar = (url) => dispatch => {
	axios.get(url)
	.then(data => {
		dispatch(setDataCharacter(data.data))
		dispatch(setLoading(false));
	}).catch(err => {
		console.log(err, 'error');
	})
}

export const fetchCharSelected = (id) => dispatch => {
	axios.get(id).then(resp => {
		dispatch(setSelectedCharacter(resp))
	}).catch(err => {
		console.log(err, 'error');
	})
}