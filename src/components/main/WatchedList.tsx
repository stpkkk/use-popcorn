import React from 'react'
import { IWatchedMovie } from '../../types'
import WatchedMovie from './WatchedMovie'

interface IWatchedList {
	watched: IWatchedMovie[]
}

const WatchedList: React.FC<IWatchedList> = ({ watched }) => {
	return (
		<ul className='list'>
			{watched.map(movie => (
				<WatchedMovie movie={movie} key={movie.imdbID} />
			))}
		</ul>
	)
}

export default WatchedList
