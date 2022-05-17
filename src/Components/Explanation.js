function Explanation({data}) {
	
	const provideExplanation = data.map(word => {
		return <li>{`${word.word} -> ${word.type.join(',')}`}</li>
	})

	return (
		<div>
			<ul>{provideExplanation}</ul>
		</div>
	)
}

export default Explanation;
