import { useEffect, useState } from 'react'
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
import { useMovies } from './hooks'

export default function App() {
	const [watched, setWatched] = useState<IWatchedMovie[] | []>(() => {
		const storedWatched = localStorage.getItem('watched')
		if (storedWatched) return JSON.parse(storedWatched)
	})
	const [query, setQuery] = useState('')
	const [selectedId, setSelectedId] = useState<string | null>(null)
	const { error, isLoading, movies } = useMovies(query, handleCloseMovie)

	function handleCloseMovie() {
		setSelectedId(null)
	}

	const handleSelectMovie = (id: string) => {
		setSelectedId(selectedId => (id === selectedId ? null : id))
	}

	const handleAddWatched = (movie: IWatchedMovie) => {
		setWatched((watched: IWatchedMovie[] | []) => [...watched, movie])
	}

	const handleDeleteWatched = (id: string) => {
		setWatched(watched => watched.filter(m => m.imdbID !== id))
	}

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
