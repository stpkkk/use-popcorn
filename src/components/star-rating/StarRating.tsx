import React, { useState } from 'react'
import Star from './Star'
import PropTypes from 'prop-types'

interface IStarRating {
	maxRating?: number
	color?: string
	size?: number
	defaultRating?: number
	onSetRating?: (rating: number) => void
}

const containerStyle = {
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
}

const starContainerStyle = {
	display: 'flex',
}

const StarRating: React.FC<IStarRating> = ({
	maxRating = 8,
	color = '#fcc419',
	size = 48,
	defaultRating = 0,
	onSetRating,
}) => {
	const [rating, setRating] = useState<number>(defaultRating)
	const [tempRating, setTempRating] = useState<number>(0)

	const handleRating = (rating: number) => {
		setRating(rating)
		if (onSetRating) onSetRating(rating)
	}

	const textStyle = {
		lineHeight: '1',
		margin: '0',
		color,
		size: `${size / 1.5}`,
	}

	StarRating.propTypes = {
		// maxRating: PropTypes.number.isRequired,
		maxRating: PropTypes.number,
		color: PropTypes.string,
		size: PropTypes.number,
		defaultRating: PropTypes.number,
		onSetRating: PropTypes.func,
	}

	return (
		<div style={containerStyle}>
			<div style={starContainerStyle}>
				{Array.from({ length: maxRating }, (_, i) => (
					<Star
						color={color}
						size={size}
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
