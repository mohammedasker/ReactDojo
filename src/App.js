import React, { useState } from "react";
import "./App.css";

function App() {
	const [showText, setShowText] = useState(false);
	const onClick = () => setShowText(true);

	return (
		<div className="App">
			<header>
				<div className="container">
					<nav>
						<a href="/">
							<h1>React Dojo</h1>
						</a>
						<ul>
							<a href="/">Home</a>
							<a href="/">About</a>
							<a href="/">Code</a>
						</ul>
					</nav>
				</div>
			</header>
			<h1>Join the Dojo and become the next coding warrior</h1>
			<button onClick={onClick}>Start</button>
			{showText ? <TextOne /> : null}
		</div>
	);
}

const TextOne = () => {
	const [showText, setShowText] = useState(false);
	const onClick = () => setShowText(true);

	return (
		<div>
			<p>Welcome to the React Dojo</p>
			<button onClick={onClick}>Intro</button>
			{showText ? <TextTwo /> : null}
		</div>
	);
};

const TextTwo = () => {
	const [showText, setShowText] = useState(false);
	const onClick = () => setShowText(true);

	return (
		<div>
			<p>
				My name is JavaScript and I'm here to teach you every skills I know to
				help you become the strongest Coding Warrior in the world!
			</p>
			<button onClick={onClick}>Continue</button>
			{showText ? <TextThree /> : null}
		</div>
	);
};

const TextThree = () => {
	const [showText, setShowText] = useState(false);
	const onClick = () => setShowText(true);

	return (
		<div>
			<p>The training will be a living hell! Are you ready?</p>
			<div className="choice">
				<button onClick={onClick}>Yes</button>
				<button onClick={onClick}>No</button>
			</div>
			{showText ? <TextFour /> : null}
		</div>
	);
};

const TextFour = () => {
	const retryButton = () => window.location.reload();

	return (
		<div>
			<p>I see. When you're ready for the training, let me know.</p>
			<button onClick={retryButton}>Retry</button>
		</div>
	);
};

export default App;
