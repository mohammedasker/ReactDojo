import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Stage1 from "./pages/Stage1/Stage1";
import Stage2 from "./pages/Stage2/Stage2";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<header>
					<div className="container">
						<nav>
							<a href="/">
								<h1>React Dojo</h1>
							</a>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/about">About</Link>
								</li>
								<li>
									<a href="https://github.com/mohammedasker/ReactDojo">Code</a>
								</li>
							</ul>
						</nav>
					</div>
				</header>

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/stage1">
						<Stage1 />
					</Route>
					<Route path="/stage2">
						<Stage2 />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

/**
 * THINGS TO LEARN
 * How to pass functions as props in React hooks
 * How to conditionally render components i.e. show component 1 if button 1 is clicked and show component 2 if button 2 is clicked
 */

export default App;
