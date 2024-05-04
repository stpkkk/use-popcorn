import React, { useEffect, useRef } from 'react'

interface ISearch {
	setQuery: React.Dispatch<React.SetStateAction<string>>
	query: string
}
const Search: React.FC<ISearch> = ({ setQuery, query }) => {
	const inputEl = useRef<HTMLInputElement>(null)

	useEffect(() => {
		const callback = (e: any) => {
			if (document.activeElement === inputEl.current) return

			if (e.code === 'Enter') {
				inputEl.current?.focus()
				setQuery('')
			}
		}

		document.addEventListener('keydown', callback)
		return () => document.addEventListener('keydown', callback)
	}, [setQuery])

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
