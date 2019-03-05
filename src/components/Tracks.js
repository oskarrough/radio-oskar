import React, {useState, useEffect} from 'react'

export default () => {
	let [tracks, setTracks] = useState(Array(1000).fill({}))

	useEffect(() => {}, [])

	return (
		<div className="Tracks">
			{tracks.map((t, i) => (
				<span key={i}>{t.title}</span>
			))}
		</div>
	)
}
