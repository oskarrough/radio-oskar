import React, {useState, useEffect} from 'react'

export default function(props) {
	let [elapsedTime, setElapsedTime] = useState(0)
	let [duration] = useState(10)
	let [startTime, setStartTime] = useState(0)

	// Create WebSocket connection and save start time.
	useEffect(() => {
		const socket = new WebSocket('wss://no-hablo-server-sfihkrivdi.now.sh')

		socket.addEventListener('message', function(event) {
			setElapsedTime(Number(event.data))
		})

		// audio.addEventListener('durationchange', event => {
		// 	duration = event.target
		// 	console.log({duration})
		// 	startSynced()
		// })

		// We need both of these but both are async.
		if (elapsedTime && duration) {
			setStartTime(elapsedTime % duration)
			console.log({startTime})
			// audio.currentTime = startTime
			// audio.play()
		}
	}, [])

	return (
		<div>
			<p>
				Sync. {elapsedTime} of {duration}. Start? {startTime}
			</p>
			{props.children}
		</div>
	)
}
