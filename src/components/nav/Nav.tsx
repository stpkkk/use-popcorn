import React from 'react'

interface INav {
	children: React.ReactNode
}

const Nav: React.FC<INav> = ({ children }) => {
	return <nav className='nav-bar'>{children}</nav>
}

export default Nav
