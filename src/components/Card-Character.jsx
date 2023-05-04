import { useDispatch } from 'react-redux'
import { fetchCharSelected } from '../store/slices/Character'

export const CardCharacter = props => {
	const dispatch = useDispatch()

	const characterSelectedHandler = id => {
		dispatch(fetchCharSelected(`character/${id}`))
	}
	return (
		<div className='card' onClick={() => characterSelectedHandler(props.id)}>
			<p>{props.id}</p>
			<p>{props.name}</p>
			<p>{props.status}</p>
		</div>
	)
}
