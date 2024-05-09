import React, { useRef } from 'react'
import { useKey } from '../../hooks'

interface ISearch {
	setQuery: React.Dispatch<React.SetStateAction<string>>
	query: string
}
const Search: React.FC<ISearch> = ({ setQuery, query }) => {
	const inputEl = useRef<HTMLInputElement>(null)
	useKey('Enter', () => {
		if (document.activeElement === inputEl.current) return

		inputEl.current?.focus()
		setQuery('')
	})

	return (
		<input
			className='search'
			ref={inputEl}
			type='text'
			placeholder='Search movies...'
			value={query}
			onChange={e => setQuery(e.target.value)}
		/>
	)
}

export default Search
