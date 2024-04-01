import React, { useState } from 'react'
import { Button } from '../common'
import { IWatchedMovie } from '../../types'
import WatchedList from './WatchedList'
import WatchedSummary from './WatchedSummary'

interface IWatchedBox {
	watched: IWatchedMovie[]
}

const WatchedBox: React.FC<IWatchedBox> = ({ watched }) => {
	const [isOpen2, setIsOpen2] = useState(true)

	return (
		<div className='box'>
			<Button isOpen={isOpen2} setIsOpen={setIsOpen2} />
			{isOpen2 && (
				<>
					<WatchedSummary watched={watched} />
					<WatchedList watched={watched} />
				</>
			)}
		</div>
	)
}

export default WatchedBox
