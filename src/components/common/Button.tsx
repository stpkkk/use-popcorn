import React from 'react'

interface IButton {
	children: React.ReactNode
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Button: React.FC<IButton> = ({ children, setIsOpen }) => {
	return (
		<button className='btn-toggle' onClick={() => setIsOpen(open => !open)}>
			{children}
		</button>
	)
}

export default Button
