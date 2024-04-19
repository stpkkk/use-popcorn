export interface IMovie {
	imdbID: string
	Title: string
	Year: string
	Poster: string
}

export interface IWatchedMovie extends IMovie {
	runtime: number
	imdbRating: number
	userRating: number
}

export interface IMovieDetails {
	Title?: string
	Year?: string
	Poster?: string
	Runtime?: string
	Plot?: string
	Released?: string
	Actors?: string
	Director?: string
	Genre?: string
	imdbRating?: string
}
