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
