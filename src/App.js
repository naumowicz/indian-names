import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './Components/Form';

const urlSurname = '';
const urlMale = '';
const urlFemale = '';

function App() {
	let surnames = [];
	let maleNames = [];
	let femaleNames = [];
	const [isFetchingDone, setFetchingDone] = useState(false);

	useEffect(() => {
		// setTimeout(() => {
        //     setFetchingDone(true)
        // }, 3000);
		fetchingAllData();
		setFetchingDone(true);
	}, [])

	const fetchDataFromURL = async (url) => {
		const data = await fetch(url);
		const text = await data.text();
		return text.split(',');
	};

	const fetchingAllData = async () => {
		// surnames = fetchData(urlSurname);
		// maleNames = fetchData(urlMale);
		// femaleNames = fetchData(urlFemale);
		// setFetchingDone(true);
	};

	// const processData = () => {};
	const callback = (fullName) => {
		console.log(fullName);
	};

	fetchingAllData();

	return (
		<div className="App App-header">
			<div>Check Indian name!</div>

			{isFetchingDone ? <Form parentCallback={callback} /> : <div>Fetching...</div>}

		</div>
	);
}

export default App;
