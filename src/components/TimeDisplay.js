import React, {useState, useEffect} from 'react'

export default function({time, duration, ...props}) {
	let [progress, setProgress] = useState(0)

	useEffect(() => {
		setProgress((time / duration) * 100)
	}, [time])

	// console.log(progress)
	// todo: output like 6:13 / 8:53

	return (
		<div style={{position: 'relative', minHeight: '1em'}} {...props}>
			<div style={{background: '#dadada', width: progress + '%', height: '1em'}}></div>
			<div style={{position: 'absolute', top: 0, color: 'gray'}}>
				{Math.round(time)} / {Math.round(duration)}
			</div>
			<progress hidden max={duration} value={time} />
		</div>
	)
}
