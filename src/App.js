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
	const [showYes, setShowYes] = useState(false);
	const [showNo, setShowNo] = useState(false);
	const onClickYes = () => setShowYes(true);
	const onClickNo = () => setShowNo(true);

	return (
		<div>
			<p>The training will be a living hell! Are you ready?</p>
			<div className="choice">
				<button onClick={onClickYes}>Yes</button>
				<button onClick={onClickNo}>No</button>
			</div>
			{showNo ? <TextFour /> : null}
			{showYes ? <TextFive /> : null}
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

const TextFive = () => {
	const retryButton = () => window.location.reload();

	return (
		<div>
			<p>Good! Then, let's begin by going to the first stage.</p>
			<button onClick={retryButton}>Go to Stage 1</button>
		</div>
	);
};

/**
 * THINGS TO DO
 *
 * if I clicked yes button, show TextFive component
 * else if I clicked no button, show TextFour component
 * else, show nothing
 *
 * THINGS TO LEARN
 * How to pass functions as props in React hooks
 * How to conditionally render components i.e. show component 1 if button 1 is clicked and show component 2 if button 2 is clicked
 */

export default App;
