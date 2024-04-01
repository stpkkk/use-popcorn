import React from 'react'
import { IMovie } from '../../types'
import Movie from './Movie'

interface IMovieList {
	movies: IMovie[]
}

const MovieList: React.FC<IMovieList> = ({ movies }) => {
	return (
		<ul className='list'>
			{movies.map(movie => (
				<Movie movie={movie} key={movie.imdbID} />
			))}
		</ul>
	)
}

export default MovieList
