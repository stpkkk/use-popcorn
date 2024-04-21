import React from 'react'
import { IWatchedMovie } from '../../types'
import WatchedMovie from './WatchedMovie'

interface IWatchedList {
	watched: IWatchedMovie[]
	onDeleteWatched: (id: string) => void
}

const WatchedList: React.FC<IWatchedList> = ({ watched, onDeleteWatched }) => {
	return (
		<ul className='list'>
			{watched.map(movie => (
				<WatchedMovie
					movie={movie}
					key={movie.imdbID}
					onDeleteWatched={onDeleteWatched}
				/>
			))}
		</ul>
	)
}

export default WatchedList
