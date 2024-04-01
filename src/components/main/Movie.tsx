import React from 'react'
import { IMovie } from '../../types'

interface IMovieProps {
	movie: IMovie
}

const Movie: React.FC<IMovieProps> = ({ movie }) => {
	return (
		<li>
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

export default Movie
