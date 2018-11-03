import React, {Component} from 'react'
import Player from './Player'
import StatusIndicator from './StatusIndicator'
import TimeDisplay from './TimeDisplay'

const RADIO = 'oskar'

class App extends Component {
	render() {
		return (
			<div>
				<Player
					slug={RADIO}
					render={({title, body, status, currentTime, duration}) => (
						<div className="Boxes">
							<StatusIndicator status={status} />
							<p>
								{title ? '' : 'Loading...'}
								{title}
							</p>
							<p>{body}&nbsp;</p>
							<TimeDisplay time={currentTime} duration={duration} />
						</div>
					)}
				/>
			</div>
		)
	}
}

export default App
