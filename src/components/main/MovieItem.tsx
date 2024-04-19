import React from 'react'
import { IMovie } from '../../types'

interface IMovieItemProps {
	movie: IMovie
	onSelectMovie: (id: string) => void
}

const MovieItem: React.FC<IMovieItemProps> = ({ movie, onSelectMovie }) => {
	return (
		<li onClick={() => onSelectMovie(movie.imdbID)}>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<p>
					<span>🗓</span>
					<span>{movie.Year}</span>
				</p>
			</div>
		</li>
	)
}

export default MovieItem
