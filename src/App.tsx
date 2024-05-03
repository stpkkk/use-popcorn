import { useCallback, useEffect, useState } from 'react'
import { IWatchedMovie } from './types'
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
	Loader,
	ErrorMessage,
	MovieDetails,
} from './components'

const KEY = 'f52c219f'

export default function App() {
	const [movies, setMovies] = useState([])
	const [watched, setWatched] = useState<IWatchedMovie[] | []>(() => {
		const storedWatched = localStorage.getItem('watched')
		if (storedWatched) return JSON.parse(storedWatched)
	})
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [query, setQuery] = useState('')
	const [selectedId, setSelectedId] = useState<string | null>(null)

	const fetchMovies = useCallback(async () => {
		try {
			setIsLoading(true)
			setError('')

			const res = await fetch(
				`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
			)

			if (!res.ok)
				throw new Error(
					`Something went wrong with fetching movies! 💩 Error: ${res.status}`
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
	}, [query])

	const handleSelectMovie = (id: string) => {
		setSelectedId(selectedId => (id === selectedId ? null : id))
	}

	const handleCloseMovie = () => {
		setSelectedId(null)
	}

	const handleAddWatched = (movie: IWatchedMovie) => {
		setWatched((watched: IWatchedMovie[] | []) => [...watched, movie])
	}

	const handleDeleteWatched = (id: string) => {
		setWatched(watched => watched.filter(m => m.imdbID !== id))
	}

	useEffect(() => {
		if (query.length < 3) {
			setMovies([])
			setError('')
		}

		handleCloseMovie()
		fetchMovies()
	}, [fetchMovies, query.length])

	// useEffect(() => {
	// 	const storedWatched = localStorage.getItem('watched')
	// 	if (storedWatched) {
	// 		setWatched(JSON.parse(storedWatched))
	// 	}
	// }, [])

	useEffect(() => {
		localStorage.setItem('watched', JSON.stringify(watched))
	}, [watched])

	return (
		<>
			<Nav>
				<Logo />
				<Search query={query} setQuery={setQuery} />
				<Results movies={movies} />
			</Nav>
			<Main>
				<Box>
					{isLoading && <Loader />}
					{!isLoading && !error && (
						<MovieList movies={movies} onSelectMovie={handleSelectMovie} />
					)}
					{error && <ErrorMessage message={error} />}
				</Box>
				<Box>
					{selectedId ? (
						<MovieDetails
							id={selectedId}
							onCloseMovie={handleCloseMovie}
							onAddWatched={handleAddWatched}
							watched={watched}
						/>
					) : (
						<>
							<WatchedSummary watched={watched} />
							<WatchedList
								watched={watched}
								onDeleteWatched={handleDeleteWatched}
							/>
						</>
					)}
				</Box>
			</Main>
		</>
	)
}
