import React, { useState } from "react";
import "./Stage2.css";

const Stage2 = () => {
	const [startBattle, setStartBattle] = useState(false);
	const onStartBattle = () => setStartBattle(true);

	return (
		<div>
			<h1>Stage 2: The Dragon's Den</h1>
			<p>
				Hey.. I know this is bit too sudden, but I need you to defeat the
				dragon! Look, the people are begging me to save their village and
				there's no way I'd refuse to help them! I understand that I'm asking you
				to do the impossible thing, however it's critical step for becoming a
				formidable warrior. Are you up for the challenge?
			</p>

			<button onClick={onStartBattle}>Start a battle</button>
			{startBattle ? <Dragon /> : null}
		</div>
	);
};

const Dragon = () => {
	const [countdown, setCountdown] = useState(10);
	const onCountdown = () => setCountdown(countdown - 1);
	return (
		<div>
			<p>Blue Eyes White Dragon</p>
			<button onClick={onCountdown} disabled={countdown === 0}>
				{countdown}
			</button>
			{countdown === 0 ? <Stage2Clear /> : null}
		</div>
	);
};

const Stage2Clear = () => (
	<div>
		<p>
			You did it! You defeated the Black Eyes Yellow Dragon and saved the
			village! A new stage has unlocked. Come on, let's go!
		</p>
		<button>Go to stage 3</button>
	</div>
);

export default Stage2;
