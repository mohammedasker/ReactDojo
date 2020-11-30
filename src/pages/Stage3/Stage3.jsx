import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Stage3.css";

const Stage3 = () => {
	const [startRescue, setStartRescue] = useState(false);
	const onStartBRescue = () => setStartRescue(true);

	return (
		<div>
			<h1>Stage 3: Save Master JavaScript</h1>

			<p>
				Oh, thank goodness you're there!
				<br />
				<br />
				I got bitten by snake and I'm going to die if I didn't take antibotic
				potion soon. I'm sure I left it somewhere in this room, but I don't know
				where exactly.
				<br />
				<br />
				Please, find it quickly!
				<br />
				<br />
				<button onClick={onStartBRescue}>Start</button>
				{startRescue ? <FindPotion /> : null}
			</p>
		</div>
	);
};

const FindPotion = () => (
	<div>
		<div className="progress">
			<div className="bar"></div>
		</div>
		<button className="potion-button">Potion</button>
	</div>
);

const Stage3Fail = () => (
	<div>
		<h1>Mission Failed!</h1>
		<p> All you have to do is find that damn potion, apprentice!</p>
		<button>Retry</button>
	</div>
);

const Stage3Clear = () => (
	<div>
		<h1>Mission Passed!</h1>
		<p>
			The potion! You found it! Now I can cure the poison. Thank you so much!
			<br />
			<br />
			We are about to enter the final stage of the training. I'll meet you
			there.
		</p>
		<Link to="/stage4">
			<button>Go to Final Stage</button>
		</Link>
	</div>
);

/**
 * 'Find the anti poison potion'
 * 'Oh, no! Master is getting worse!
 * 'Master is about to die! Hurry!
 *
 * TO DO LIST
 * When I clicked the start button, the bar should render and starts to go left []
 * when the bar is less than 50%, change the color to orange []
 * when the bar is less than 15%, change the color to red []
 * when the bar reaches 0, render the Stage3Fail component []
 * when I clicked the potion button, stop the bar from moving OR do not render the Stage3Fail component []
 * when I clicked the potion button, render the Stage3Clear component []
 */

export default Stage3;
