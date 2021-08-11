import { useState, useEffect } from "react";
import "./styles/style.css";

function App() {
	const [jokeData, setJokeData] = useState({ body: [""] });

	const getJoke = async () => {
		const apiKey = `${process.env.REACT_APP_API_KEY}`;

		try {
			const res = await fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
				method: "GET",
				headers: {
					"x-rapidapi-key": apiKey,
					"x-rapidapi-host": "dad-jokes.p.rapidapi.com",
				},
			});
			const data = await res.json();
			setJokeData(data);
		} catch (error) {
			console.log(error);
		}
	};

	// useEffect
	useEffect(() => {
		getJoke();
	}, []);

	const setup = jokeData.body[0].setup;
	const punchLine = jokeData.body[0].punchline;

	return (
		<div className="jokeContainer">
			<div className="header">
				<h1>Dad Joke Generator</h1>
				<button onClick={getJoke}>Gimme a joke</button>
			</div>
			<div className="jokeBox">
				<h2>Set Up</h2>
				<p>{setup}</p>
				<h2>Punch Line</h2>
				<p>{punchLine}</p>
			</div>
		</div>
	);
}

export default App;
