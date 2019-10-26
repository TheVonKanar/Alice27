import React from 'react';
import './App.css';
import Card from './Card.js'

function App() {
	return (
		<div className="App">
			<header className="AppContent">
				<p>
					Pour trouver des réponses à tes questions,
					<br/> 
					suis mon regard...
				</p>

				<Card></Card>

				<a
					className="AppLink"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
