import React from 'react'
import { IWatchedMovie } from '../../types'

interface IWatchedSummary {
	watched: IWatchedMovie[]
}

const WatchedSummary: React.FC<IWatchedSummary> = ({ watched }) => {
	const average = (arr: (number | undefined)[]) =>
		arr.reduce((acc, cur, i, arr) => acc || 0 + (cur || 0) / arr.length, 0)

	const avgImdbRating = average(watched.map(movie => movie.imdbRating))
	const avgUserRating = average(watched.map(movie => movie.userRating))
	const avgRuntime = average(watched.map(movie => movie.runtime))

	return (
		<div className='summary'>
			<h2>Movies you watched</h2>
			<div>
				<p>
					<span>#️⃣</span>
					<span>{watched.length} movies</span>
				</p>
				<p>
					<span>⭐️</span>
					<span>{avgImdbRating?.toFixed(2)}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{avgUserRating}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{avgRuntime} min</span>
				</p>
			</div>
		</div>
	)
}

export default WatchedSummary
