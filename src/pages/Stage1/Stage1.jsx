import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Stage1.css";

const Stage1 = () => {
	const [rightAnswer, setRightAnswer] = useState(false);
	const [wrongAnswer, setWrongAnswer] = useState(false);
	const onRightAnswer = () => setRightAnswer(true);
	const onWrongAnswer = () => setWrongAnswer(true);
	return (
		<div>
			<h1>Stage 1: The History of JavaScript</h1>

			<p>
				Allow me to tell you a story:
				<br />
				<br />
				Long ago, my master wish to have his own scripting language and created
				me in mere 10 days. Because I was such a weirdo who can interpret
				language in any paradigm I want and sometimes confuse programmers all
				the time, I was bullied at my school. I used to be the most hated
				programming language in a town and thought I want to die.
				<br />
				<br />
				But my master didn't give up on me. He helped to support me in a time of
				hardships and train me day after day without taking a break. Now, I'm
				one of the most popular programming languages in the world and happily
				married to a beautiful wife and have 4 wonderful kids. My kids -
				React.js, Vue.js, Angular.js, and Node.js have excelled in an elite
				schools and they are employed in a famous companies. Despite that,
				they're still humble, kind, and helpful to fellow programming languages
				and their frameworks. I'm so proud of them!
				<br />
				<br />
				I never felt happier than before in my entire life and it's all thanks
				to my master who believed in me! I'm eternally grateful to him.
				<br />
				<br />
				By the way, what is the name of my master?
			</p>

			<div className="buttons-container">
				<button button onClick={onWrongAnswer}>
					Larry Wall
				</button>
				<button button onClick={onWrongAnswer}>
					Guido van Rossum
				</button>
				<button button onClick={onWrongAnswer}>
					James Gosling
				</button>
				<button onClick={onRightAnswer}>Brendan Eich</button>
			</div>
			<br />
			<br />
			{rightAnswer ? <RightAnswer /> : null}
			{wrongAnswer ? <WrongAnswer /> : null}
		</div>
	);
};

const RightAnswer = () => (
	<div>
		<p>
			Yes! The answer is correct! Master Eich means the world to me and I want
			to be like him. Well then, see you in the next stage!
		</p>
		<Link to="/stage2">
			<button>Go to stage 2</button>
		</Link>
	</div>
);

const WrongAnswer = () => {
	const retryButton = () => window.location.reload();

	return (
		<div>
			<p>
				Pffft! You really don't know the answer, do you? Go back and try again!
			</p>
			<button onClick={retryButton}>Retry</button>
		</div>
	);
};

export default Stage1;
