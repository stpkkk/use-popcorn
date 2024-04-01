import React from 'react'
import { IMovie } from '../../types'

interface IResults {
	movies: IMovie[]
}

const Results: React.FC<IResults> = ({ movies }) => {
	return (
		<p className='num-results'>
			Found <strong>{movies.length}</strong> results
		</p>
	)
}

export default Results
