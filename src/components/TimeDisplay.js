import React from 'react'

export default function({time, duration, ...props}) {
	let progress = (time / duration) * 100

	// todo: output like 6:13 / 8:53

	return (
		<div {...props}>
			<div style={{background: '#dadada', color: 'black', width: progress + '%'}}>
				<div>{Math.round(time)} / {Math.round(duration)}</div>
			</div>
			<progress hidden max={duration} value={time} />
		</div>
	)
}
