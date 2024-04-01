import React from 'react'

interface IButton {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Button: React.FC<IButton> = ({ isOpen, setIsOpen }) => {
	return (
		<button className='btn-toggle' onClick={() => setIsOpen(open => !open)}>
			{isOpen ? '–' : '+'}
		</button>
	)
}

export default Button
