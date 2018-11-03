import React, {useState, useEffect, useRef} from 'react'
// import {useTimer} from '../use-timer'
import 'radio4000-player'
import './Player.css'

export default function(props) {
	let ref = useRef()

	// Set track on track changed event.
	let [track, setTrack] = useState({})
	useEffect(
		() => {
			ref.current.addEventListener('trackChanged', ({detail}) => {
				let {track} = detail[0]
				if (track) setTrack(track)
			})
		},
		[props.slug]
	)

	// R4player doesn't give access to the youtube player.
	// Getting it is complicated.
	const maxRetries = 10
	const timeout = 200
	let [retries, setRetries] = useState(0)
	useEffect(
		() => {
			let instance = findYouTubePlayer(ref.current)
			if (instance && !player) {
				setPlayer(instance)
			} else if (retries <= maxRetries) {
				setTimeout(() => setRetries(retries + 1), timeout)
			}
		},
		[retries]
	)

	// Once player is registered, subscribe to events.
	let [player, setPlayer] = useState(undefined)
	useEffect(
		() => {
			let timer
			if (player) {
				document.querySelector('.Btn--next').click()
				player.on('stateChange', onPlayerStateChange)
				timer = setInterval(tick, 1000)
			}
			return () => clearInterval(timer)
		},
		[player]
	)

	// Track status, time and duration.
	let [status, setStatus] = useState(-1)
	let [currentTime, setCurrentTime] = useState(0)
	let [duration, setDuration] = useState(0)
	function onPlayerStateChange(event) {
		setStatus(event.data)
	}

	// Runs once every second.
	function tick() {
		player && player.getCurrentTime().then(time => time && setCurrentTime(time))
		player && player.getDuration().then(duration => duration && setDuration(duration))
	}

	return (
		<div>
			<radio4000-player ref={ref} channel-slug={props.slug} shuffle="true" />
			{props.render({title: track.title, body: track.body, status, currentTime, duration})}
		</div>
	)
}

const findYouTubePlayer = radio4000Element => {
	let vue = radio4000Element.getVueInstance()
	let child = vue.$children[2].$children[0]
	return child && child.player
}
