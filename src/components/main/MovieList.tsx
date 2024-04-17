import React from 'react'
import { IMovie } from '../../types'
import MovieItem from './MovieItem'

interface IMovieList {
	movies: IMovie[]
}

const MovieList: React.FC<IMovieList> = ({ movies }) => {
	return (
		<ul className='list'>
			{movies.map(movie => (
				<MovieItem movie={movie} key={movie.imdbID} />
			))}
		</ul>
	)
}

export default MovieList
