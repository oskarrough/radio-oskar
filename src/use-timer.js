import {useEffect} from 'react'

export function useTimer(callback, miliseconds = 1000) {
	useEffect(() => {
		let timeout = setInterval(callback, miliseconds)
		return () => clearTimeout(timeout)
	}, [])
}

