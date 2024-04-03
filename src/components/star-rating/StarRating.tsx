import React, { useState } from 'react'
import Star from './Star'

interface IStarRating {
	maxRating?: number
}

const containerStyle = {
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
}

const starContainerStyle = {
	display: 'flex',
}

const textStyle = {
	lineHeight: '1',
	margin: '0',
}

const StarRating: React.FC<IStarRating> = ({ maxRating = 8 }) => {
	const [rating, setRating] = useState<number>(0)
	const [tempRating, setTempRating] = useState<number>(0)

	const handleRating = (rating: number) => {
		setRating(rating)
	}

	return (
		<div style={containerStyle}>
			<div style={starContainerStyle}>
				{Array.from({ length: maxRating }, (_, i) => (
					<Star
						full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
						onClick={() => handleRating(i + 1)}
						onMouseEnter={() => setTempRating(i + 1)}
						onMouseLeave={() => setTempRating(0)}
						key={i}
					/>
				))}
			</div>
			<p style={textStyle}>{tempRating || rating || ''}</p>
		</div>
	)
}

export default StarRating
