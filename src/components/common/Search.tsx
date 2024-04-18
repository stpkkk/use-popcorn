import React from 'react'

interface ISearch {
	query: string
	setQuery: React.Dispatch<React.SetStateAction<string>>
}

const Search: React.FC<ISearch> = ({ query, setQuery }) => {
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
