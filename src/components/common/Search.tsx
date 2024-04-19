import React from 'react'

interface ISearch {
	setQuery: React.Dispatch<React.SetStateAction<string>>
	query: string
}
const Search: React.FC<ISearch> = ({ setQuery, query }) => {
	return (
		<input
			className='search'
			type='text'
			placeholder='Search movies...'
			value={query}
			onChange={e => setQuery(e.target.value)}
		/>
	)
}

export default Search
