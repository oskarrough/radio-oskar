import React, {useState, useEffect} from 'react'

export default function({time, duration, player, ...props}) {
	let [progress, setProgress] = useState(0)

	useEffect(
		() => {
			setProgress((time / duration) * 100)
		},
		[time]
	)

	function handleClick(event) {
		console.log(event.target, event.currentTarget)
		var rect = event.currentTarget.getBoundingClientRect()
		// where did we click inside the bar?
		const x = event.pageX - rect.x
		// convert it to a value relative to the duration (max)
		const seconds = (x / rect.width) * duration
		if (player) player.seekTo(seconds)
	}

	// todo: output like 6:13 / 8:53

	return (
		<div
			onClick={handleClick}
			style={{display: 'flex', position: 'relative', minHeight: '1.5rem'}}
			{...props}
		>
			<div style={{background: '#dadada', width: progress + '%'}} />
			<div
				style={{
					position: 'absolute',
					zIndex: 1,
					top: '0.25rem',
					left: '0.5rem',
					mixBlendMode: 'difference'
				}}
			>
				{Math.round(time)} / {Math.round(duration)}
			</div>
			<progress hidden max={duration} value={time} />
		</div>
	)
}
