import React, {useState, useEffect} from 'react'
import _ from 'lodash'
// import compact from 'lodash/compact'
// import flatten from 'lodash/flatten'
// import countBy from 'lodash/countBy'
// import uniq from 'lodash/uniq'
// import sortBy from 'lodash/sortBy'

const URL = 'https://api.radio4000.com/backup?slug=oskar'

// https://regex101.com/r/pJ4wC5/4
function extractTags(tracks) {
	// const {compact, flatten, countBy, uniq, sortBy} = _
	const strings = tracks.filter(t => t.body).map(t => t.body)
	const tags = strings.map(string => string.match(/(^|\s)(#[a-z\d-]+)/gi))
	let results = _.compact(tags)
	results = _.flatten(results)
	results = results.map(tag => tag.trim())
	let count = _.countBy(results)
	results = _.uniq(results)
	results = results.map(name => {
		return {name, count: count[name]}
	})
	results = _.sortBy(results, ['count', 'name']).reverse()
	return results
}

export default function(props) {
	let [tags, setTags] = useState([])

	// Fetch tags.
	useEffect(async () => {
		let res = await fetch(URL)
		let backup = await res.json()
		let parsed = extractTags(backup.tracks)
		setTags(parsed)
	}, [])

	return (
		<div className="Tags">
			{tags.length
				? tags.map(tag => (
						<a
							key={tag.name}
							href={'https://radio4000.com/oskar/tracks?search=' + tag.name}
							target="_blank"
							rel="noopener noreferrer"
						>
							{tag.name} <small>{tag.count}</small>
						</a>
				  ))
				: 'Loading tags'}
		</div>
	)
}
