import React, { useState } from 'react'
import Button from '../common/Button'

interface IBox {
	children: React.ReactNode
}

const Box: React.FC<IBox> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<div className='box'>
			<Button setIsOpen={setIsOpen}>{isOpen ? '–' : '+'}</Button>
			{isOpen && children}
		</div>
	)
}

export default Box
