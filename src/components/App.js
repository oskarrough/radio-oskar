import React, {Component} from 'react'
import Player from './Player'
import StatusIndicator from './StatusIndicator'
import TimeDisplay from './TimeDisplay'
import Tags from './Tags'
import Tracks from './Tracks'
import Chat from './Chat'

const RADIO = 'oskar'

class App extends Component {
	render() {
		return (
			<Player
				slug={RADIO}
				autoplay={true}
				render={({title, body, currentTime, duration, status}) => (
					<div className="Boxes">
						<p className="Box--padding">
							{title ? '' : 'Loading...'}
							{title} <span style={{opacity: 0.7}}>{body}</span>
						</p>
						<Chat url="https://chat-bystzqvodk.now.sh/" />
						<TimeDisplay time={currentTime} duration={duration} />
						<StatusIndicator status={status} className="Box--padding" />
						<Tags />
						<Tracks />
					</div>
				)}
			/>
		)
	}
}

export default App
