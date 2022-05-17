import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './Components/Form';
import Explanation from './Components/Explanation';

const urlSurname = 'https://raw.githubusercontent.com/naumowicz/indian-names/main/data/surnames.csv';
const urlMale = 'https://raw.githubusercontent.com/naumowicz/indian-names/main/data/male.csv';
const urlFemale = 'https://raw.githubusercontent.com/naumowicz/indian-names/main/data/female.csv';
let surnames = [];
let maleNames = [];
let femaleNames = [];

function App() {
	
	const [isFetchingDone, setFetchingDone] = useState(false);
	let [displayedName, setDisplayedName] = useState([]);

	useEffect(() => {
		const getData = async () => {
			await fetchingAllData();
			setFetchingDone(true);
		};

		getData();
	}, []);

	const fetchDataFromURL = async (url) => {
		const data = await fetch(url);
		const text = await data.text();
		return text.split('\n');
	};

	const fetchingAllData = async () => {
		surnames = await fetchDataFromURL(urlSurname);
		maleNames = await fetchDataFromURL(urlMale);
		femaleNames = await fetchDataFromURL(urlFemale);
	};

	const processFullName = (text) => {
		let results = [];

		text.split(' ').forEach((word) => {
			const temp = { word: word, type: [] };
			if (isSurname(word)) {
				temp.type.push('surname');
				console.log(temp.type);
			}
			if (isMaleName(word)) {
				temp.type.push('male');
			}
			if (isFemaleName(word)) {
				temp.type.push('female');
			}
			results.push(temp);
		});

		displayedName = results
	};

	const isSurname = (text) => {
		const result = surnames.findIndex((surname) => {
			return surname === text;
		});
		if (result === -1) {
			return false;
		} else {
			return true;
		}
	};

	const isMaleName = (text) => {
		const result = maleNames.findIndex((maleName) => {
			return maleName === text;
		});
		if (result === -1) {
			return false;
		} else {
			return true;
		}
	};

	const isFemaleName = (text) => {
		const result = femaleNames.findIndex((femaleName) => {
			return femaleName === text;
		});
		if (result === -1) {
			return false;
		} else {
			return true;
		}
	};

	return (
		<div className="App App-header">
			<div>Check Indian name!</div>

			{isFetchingDone ? <Form parentCallback={processFullName} /> : <div>Fetching...</div>}
			{displayedName === [] ? <div /> : <Explanation data={displayedName} />}
		</div>
	);
}

export default App;
