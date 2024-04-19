import React from 'react'
import { IMovie } from '../../types'
import MovieItem from './MovieItem'

interface IMovieList {
	movies: IMovie[]
	onSelectMovie: (id: string) => void
}

const MovieList: React.FC<IMovieList> = ({ movies, onSelectMovie }) => {
	return (
		<ul className='list list-movies'>
			{movies.map(movie => (
				<MovieItem
					movie={movie}
					onSelectMovie={onSelectMovie}
					key={movie.imdbID}
				/>
			))}
		</ul>
	)
}

export default MovieList
