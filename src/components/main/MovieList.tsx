import React from 'react'
import { IMovie } from '../../types'
import MovieItem from './MovieItem'
import { Loader } from '../common'

interface IMovieList {
	movies: IMovie[]
	isLoading: boolean
}

const MovieList: React.FC<IMovieList> = ({ movies, isLoading }) => {
	return isLoading ? (
		<Loader />
	) : (
		<ul className='list'>
			{movies.map(movie => (
				<MovieItem movie={movie} key={movie.imdbID} />
			))}
		</ul>
	)
}

export default MovieList
