import React from 'react'
import { IMovie } from '../../types'
import Search from '../common/Search'
import Logo from './Logo'
import Results from './Results'

interface INav {
	movies: IMovie[]
}

const Nav: React.FC<INav> = ({ movies }) => {
	return (
		<nav className='nav-bar'>
			<Logo />
			<Search />
			<Results movies={movies} />
		</nav>
	)
}

export default Nav
