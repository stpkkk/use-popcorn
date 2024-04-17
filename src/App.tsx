import { useEffect, useState } from 'react'
import { IMovie, IWatchedMovie } from './types'
import {
	Logo,
	Main,
	MovieList,
	Nav,
	Results,
	Search,
	WatchedSummary,
	WatchedList,
	Box,
	StarRating,
	Loader,
	ErrorMessage,
} from './components'

const tempMovieData: IMovie[] = [
	{
		imdbID: 'tt1375666',
		Title: 'Inception',
		Year: '2010',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
	},
	{
		imdbID: 'tt0133093',
		Title: 'The Matrix',
		Year: '1999',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
	},
	{
		imdbID: 'tt6751668',
		Title: 'Parasite',
		Year: '2019',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
	},
]

const tempWatchedData: IWatchedMovie[] = [
	{
		imdbID: 'tt1375666',
		Title: 'Inception',
		Year: '2010',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
		runtime: 148,
		imdbRating: 8.8,
		userRating: 10,
	},
	{
		imdbID: 'tt0088763',
		Title: 'Back to the Future',
		Year: '1985',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
		runtime: 116,
		imdbRating: 8.5,
		userRating: 9,
	},
]

const KEY = 'f52c219f'

export default function App() {
	const [movies, setMovies] = useState([])
	const [watched, setWatched] = useState(tempWatchedData)
	const [movieRating, setMovieRating] = useState(0)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const query = 'matrix'

	async function fetchMovies() {
		try {
			setIsLoading(true)
			const res = await fetch(
				`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
			)

			if (!res.ok)
				throw new Error(
					`Something went wrong with  fetching movies! 💩 Error: ${res.status}`
				)

			const data = await res.json()
			if (data.Response === 'False') throw new Error('No movies found')

			setMovies(data.Search)
		} catch (error: any) {
			setError(error.message)
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchMovies()
	}, [])

	return (
		<>
			<Nav>
				<Logo />
				<Search />
				<Results movies={movies} />
			</Nav>
			<Main>
				<Box>
					{isLoading && <Loader />}
					{!isLoading && !error && <MovieList movies={movies} />}
					{error && <ErrorMessage message={error} />}
				</Box>
				<Box>
					<WatchedSummary watched={watched} />
					<WatchedList watched={watched} />
					{/* <StarRating
            maxRating={10}
            color='#fcc419'
            size={36}
            defaultRating={8}
            onSetRating={setMovieRating}
          /> */}
					<p>This movie was rated {movieRating}</p>
				</Box>
			</Main>
		</>
	)
}
