import React, {useState, useEffect} from 'react'

let colors = {
	'-1': '#37474F', // unstarted = gray
	'0': '#FFFF00', // ended = yellow
	'1': '#33691E', // playing = green
	'2': '#DD2C00', // paused = red
	'3': '#AA00FF', // buffering = purple
	'5': '#FF6DOO' // video cued = orange
}

let labels = {
	'-1': 'Unstarted',
	'0': 'Ended',
	'1': 'Playing',
	'2': 'Paused',
	'3': 'Buffering',
	'5': 'Video cued'
}

export default function({status, ...props}) {
	let [color, setColor] = useState('initial')
	let [label, setLabel] = useState('Unstarted')

	useEffect(() => {
		setColor(colors[status])
		setLabel(labels[status])
	}, [status])

	return (
		<div style={{backgroundColor: color}} {...props}></div>
	)
}

