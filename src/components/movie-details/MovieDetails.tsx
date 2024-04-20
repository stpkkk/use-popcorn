import { FC, useCallback, useEffect, useState } from 'react'
import { IMovieDetails } from '../../types'
import { StarRating } from '../star-rating'
import { Loader } from '../common'

interface MovieDetailsProps {
	id: string
	onCloseMovie: () => void
}

const KEY = 'f52c219f'

const MovieDetails: FC<MovieDetailsProps> = ({ id, onCloseMovie }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [movie, setMovie] = useState<IMovieDetails>({})

	const {
		Title: title,
		Poster: poster,
		Runtime: runtime,
		Plot: plot,
		Released: released,
		imdbRating,
		Actors: actors,
		Director: director,
		Genre: genre,
	} = movie

	const getMovieDetails = useCallback(async (id: string) => {
		try {
			setIsLoading(true)
			setError('')

			const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${id}`)

			if (!res.ok)
				throw new Error(
					`Something went wrong with fetching movie! 💩 Error: ${res.status}`
				)

			const data = await res.json()

			setMovie(data)
		} catch (error: any) {
			setError(error.message)
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}, [])

	useEffect(() => {
		getMovieDetails(id)
	}, [getMovieDetails, id])

	return (
		<div className='details'>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<header>
						<button className='btn-back' onClick={onCloseMovie} type='button'>
							&larr;
						</button>
						<img src={poster} alt={`Poster of ${movie} movie`} />
						<div className='details-overview'>
							<h2>{title}</h2>
							<p>
								{released} &bull; {runtime}
							</p>
							<p>{genre}</p>
							<p>
								<span>⭐</span>
								{imdbRating} IMDb rating
							</p>
						</div>
					</header>
					<section>
						<div className='rating'>
							<StarRating maxRating={10} size={48} />
						</div>
						<p>
							<em>{plot}</em>
						</p>
						<p>Starring {actors}</p>
						<p>Directed by {director}</p>
					</section>
				</>
			)}
		</div>
	)
}

export default MovieDetails
