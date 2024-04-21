import React from 'react'
import { IWatchedMovie } from '../../types'

interface IWatchedMovieProps {
	movie: IWatchedMovie
	onDeleteWatched: (id: string) => void
}

const WatchedMovie: React.FC<IWatchedMovieProps> = ({
	movie,
	onDeleteWatched,
}) => {
	return (
		<li>
			<img src={movie.poster} alt={`${movie.title} poster`} />
			<h3>{movie.title}</h3>
			<div>
				<p>
					<span>⭐️</span>
					<span>{movie.imdbRating}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{movie.userRating?.toFixed(2)}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{movie.runtime} min</span>
				</p>
				<button
					className='btn-delete'
					onClick={() => onDeleteWatched(movie.imdbID || '')}
					type='button'
				>
					x
				</button>
			</div>
		</li>
	)
}

export default WatchedMovie
