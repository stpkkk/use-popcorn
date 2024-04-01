import React from 'react'
import { IMovie, IWatchedMovie } from '../../types'
import ListBox from './ListBox'
import WatchedBox from './WatchedBox'

interface IMain {
	movies: IMovie[]
	watched: IWatchedMovie[]
}

const Main: React.FC<IMain> = ({ movies, watched }) => {
	return (
		<main className='main'>
			<ListBox movies={movies} />
			<WatchedBox watched={watched} />
		</main>
	)
}

export default Main
