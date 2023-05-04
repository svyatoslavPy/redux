import React, { useEffect, useState } from 'react'
import { Loader } from './preloader'
import { Card } from './Card'
import { fetchChar } from '../store/slices/Character'
// import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

export const СardCharacter = () => {
	const [disabledCharacter, setDisabledCharacter] = useState(false)
	const dispatch = useDispatch()
	const characterData = useSelector(state => state.character)
	const characterLoading = useSelector(state => state.character.loading)
	const selectedCharacter = useSelector(state => state.character.selectedCharacter.data);

	let next = characterData.character.info?.next
	let resultNext = next?.slice(-1)
	let prev = characterData.character.info?.prev
	let resultPrev = prev?.slice(-1)

	useEffect(() => {
		dispatch(fetchChar('character/?page=1'))
	}, [dispatch])

	// Character
	const prevPageCharacter = () => {
		dispatch(fetchChar(`character/?page=${resultPrev}`))
		if (characterData.character.info.next) {
			setDisabledCharacter(false)
		}
	}
	const nextPageCharacter = () => {
		dispatch(fetchChar(`character/?page=${resultNext}`))

		if (!characterData.character.info.next) {
			setDisabledCharacter(true)
		}
	}

	return (
		<div className='card-flex__wrapper'>
			<div className='card-flex__items'>
				<div className='card-flex'>
					{characterLoading ? (
						<Loader></Loader>
					) : (
						characterData.character.results
							.slice(0, 12)
							.map(i => <Card id={i.id} name={i.name} status={i.status}></Card>)
					)}
				</div>
				{!characterLoading && (
					<div className='card-flex__btn'>
						<button onClick={() => prevPageCharacter()}>Prev</button>
						<button
							disabled={disabledCharacter}
							onClick={() => nextPageCharacter()}
						>
							Next
						</button>
					</div>
				)}
				<div className='info-character'>
					<p>{selectedCharacter?.species}</p>
					<p>{selectedCharacter?.gender}</p>
					<p>{selectedCharacter?.created}</p>
				</div>
			</div>
		</div>
	)
}
