import { useDispatch } from 'react-redux'
import { fetchEpisodeSelected } from '../store/slices/Episode'
export const CardEpisode = props => {
	const dispatch = useDispatch()
	// console.log(selectedCharacter);

	const characterEpisodeHandler = id => {
		dispatch(fetchEpisodeSelected(`character/${id}`))
	}
	return (
		<div className='card' onClick={() => characterEpisodeHandler(props.id)}>
			<p>{props.id}</p>
			<p>{props.name}</p>
			<p>{props.status}</p>
		</div>
	)
}
