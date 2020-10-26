import React, { useState } from "react";
import "./App.css";

function App() {
	const [showButton, setShowButton] = useState(false);
	const onClick = () => setShowButton(true);

	return (
		<div className="App">
			<header>
				<div class="container">
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
			<h1>Join the Dojo and become the strongest coding warrior</h1>
			<button onClick={onClick}>Start</button>
			{showButton ? <Text /> : null}
		</div>
	);
}

const Text = () => <div>IT'S WORKING!!!!</div>;

export default App;
