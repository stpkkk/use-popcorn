import React from 'react'

interface IMain {
	children: React.ReactNode
}

const Main: React.FC<IMain> = ({ children }) => {
	return <main className='main'>{children}</main>
}

export default Main
