import React, {useState, useEffect} from 'react'

export default function({time, duration, ...props}) {
	let [progress, setProgress] = useState(0)

	useEffect(() => {
		setProgress((time / duration) * 100)
	}, [time])

	// console.log(progress)
	// todo: output like 6:13 / 8:53

	return (
		<div style={{display: 'flex', position: 'relative', minHeight: '1.5rem'}} {...props}>
			<div style={{background: '#dadada', width: progress + '%'}}></div>
			<div style={{position: 'absolute', zIndex: 1, top: '0.25rem', left: '0.5rem', mixBlendMode: 'difference'}}>
				{Math.round(time)} / {Math.round(duration)}
			</div>
			<progress hidden max={duration} value={time} />
		</div>
	)
}
