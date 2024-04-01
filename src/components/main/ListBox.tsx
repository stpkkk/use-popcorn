import React, { useState } from 'react'
import Button from '../common/Button'
import { IMovie } from '../../types'
import MovieList from './MovieList'

type IListBox = {
	movies: IMovie[]
}

const ListBox: React.FC<IListBox> = ({ movies }) => {
	const [isOpen1, setIsOpen1] = useState(true)

	return (
		<div className='box'>
			<Button isOpen={isOpen1} setIsOpen={setIsOpen1} />
			{isOpen1 && <MovieList movies={movies} />}
		</div>
	)
}

export default ListBox
