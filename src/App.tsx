import { useState } from 'react'
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
import { useLocalStorage, useMovies } from './hooks'

export default function App() {
	const [query, setQuery] = useState('')
	const [selectedId, setSelectedId] = useState<string | null>(null)
	const { error, isLoading, movies } = useMovies(query, handleCloseMovie)
	const [watched, setWatched] = useLocalStorage([], 'watched')

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
		setWatched((watched: IWatchedMovie[] | []) =>
			watched.filter(m => m.imdbID !== id)
		)
	}

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
