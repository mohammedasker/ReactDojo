import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Stage4.css";

const Stage4 = () => {
	const [startBattle, setStartBattle] = useState(false);
	const onStartBattle = () => setStartBattle(true);

	return (
		<div>
			<h1>Final Stage: Dark World</h1>

			<p>
				Welcome to final stage of the training. Your final lesson is to use all
				the skills I've taught you to fight the greatest opponent of all time -
				me. The game is simple. It's hide and seek!
				<br />
				<br />
				You got only one minute to defeat me and if you failed, you must start
				from the beginning of the training. But don't worry, since I'm the one
				who train you, I'm sure you will pass the test. Are you ready?
			</p>

			<button onClick={onStartBattle}>Start</button>
			{startBattle ? <Countdown /> : null}
		</div>
	);
};

const Countdown = () => {
	const [seconds, setSeconds] = useState(10);
	const [foundYou, setFoundYou] = useState(false);
	const onFoundYou = () => setFoundYou(!foundYou);

	useEffect(() => {
		const counter = () => setTimeout(() => setSeconds(seconds - 1), 1000);
		const startCountdown = () => {
			if (seconds > 0) {
				counter();
			}
		};
		if (!foundYou) {
			startCountdown();
		} else return clearTimeout(counter);
	}, [seconds, foundYou]);

	return (
		<div>
			{seconds}
			<br />
			<br />
			<button onClick={onFoundYou} className="found-button">
				Found You
			</button>
			{foundYou ? <Stage4Clear /> : null}
			{seconds === 0 ? <Stage4Fail /> : null}
		</div>
	);
};

const Stage4Clear = () => (
	<div>
		<p>
			Y-You defeat me! You've learn so much in a short time. I have nothing to
			teach you anymore. Congrats on passing the test, my apprentice! You are
			now officially a coding warrior! Go to the treasure room and claim your
			reward!!
		</p>
		<Link to="/reward">
			<button>Treasure Room</button>
		</Link>
	</div>
);

const Stage4Fail = () => {
	return (
		<div>
			<h1>You Lose!</h1>
			<p>
				You have failed the test, my apprentice. Don't you dare to refresh this
				page! Be a honorable warrior and start from the beginning of the
				training.
			</p>
			<Link to="/stage1">
				<button>Go to Stage 1</button>
			</Link>
		</div>
	);
};

export default Stage4;
