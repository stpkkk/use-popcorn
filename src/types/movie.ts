export interface IMovie {
	imdbID: string
	Title: string
	Year: string
	Poster: string
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
	imdbRating?: number
}

export interface IWatchedMovie extends IMovieDetails {
	poster?: string
	title?: string
	runtime?: number
	userRating?: number
	imdbID?: string
}
