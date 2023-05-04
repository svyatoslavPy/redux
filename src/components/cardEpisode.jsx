//mycomponent
import React, { useEffect, useState } from 'react'
// import { useFetchEpisode } from '../hooks/use-fetchEpisode'
import { Loader } from './preloader'
import { CardEpisode } from './Card-episode'
import { fetchEpisode } from '../store/slices/Episode'
import { useSelector, useDispatch } from 'react-redux'

export const CardsEpisode = () => {
	const [disabledEpisode, setDisabledEpisode] = useState(false)
	const dispatch = useDispatch()
	const episodeData = useSelector(state => state.episode)
	const episodeLoading = useSelector(state => state.episode.loading)
	const selectedEpisode = useSelector(
		state => state.episode.selectedEpisode.data
	)
	// Episode
	let next = episodeData.episode.info?.next
	let resultNext = next?.slice(-1)
	let prev = episodeData.episode.info?.prev
	let resultPrev = prev?.slice(-1)

	useEffect(() => {
		dispatch(fetchEpisode('episode/?page=1'))
	}, [dispatch])

	// next / prev
	// -----
	const prevPageEpisode = () => {
		dispatch(fetchEpisode(`episode/?page=${resultPrev}`))
		if (episodeData.episode.info.next) {
			setDisabledEpisode(false)
		}
	}
	const nextPageEpisode = () => {
		dispatch(fetchEpisode(`episode/?page=${resultNext}`))

		if (!episodeData.episode.info.next) {
			setDisabledEpisode(true)
		}
	}

	return (
		<>
			<div className='card-flex__wrapper'>
				<div className='card-flex__items'>
					<div className='card-flex'>
						{episodeLoading ? (
							<Loader></Loader>
						) : (
							episodeData.episode.results
								.slice(0, 12)
								.map(i => (
									<CardEpisode
										id={i.id}
										name={i.name}
										status={i.status}
									></CardEpisode>
								))
						)}
					</div>
					{!episodeLoading && (
						<div className='card-flex__btn'>
							<button onClick={() => prevPageEpisode()}>Prev</button>
							<button
								disabled={disabledEpisode}
								onClick={() => nextPageEpisode()}
							>
								Next
							</button>
						</div>
					)}
					<>
						<div className='info-character'>
							<p>{selectedEpisode?.species}</p>
							<p>{selectedEpisode?.gender}</p>
							<p>{selectedEpisode?.created}</p>
						</div>
					</>
				</div>
			</div>
		</>
	)
}
