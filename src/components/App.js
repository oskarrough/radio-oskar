import React, {Component} from 'react'
import Player from './Player'
import StatusIndicator from './StatusIndicator'
import TimeDisplay from './TimeDisplay'
import Tags from './Tags'

const RADIO = 'oskar'

class App extends Component {
	render() {
		return (
			<div>
				<Player
					slug={RADIO}
					render={({title, body, status, currentTime, duration}) => (
						<div className="Boxes">
							<p className="Box--padding">
								{title ? '' : 'Loading...'}
								{title} <span style={{opacity: 0.7}}>{body}</span>
							</p>
							<TimeDisplay time={currentTime} duration={duration} />
							<StatusIndicator status={status} className="Box--padding" />
							<Tags />
						</div>
					)}
				/>
			</div>
		)
	}
}

export default App
