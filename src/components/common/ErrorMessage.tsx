import { FC } from 'react'

interface ErrorMessageProps {
	message: string
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
	return <p className='error'>{message}</p>
}

export default ErrorMessage
