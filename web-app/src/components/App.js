import React from 'react';
import '../style/App.css';
import Card from './Card.js';
import Photo1 from '../textures/photo1.jpg';

function App() {
	return (
		<div className="App">
			<header className="AppContent">
				<p>
					Pour trouver des réponses à tes questions,
					<br/> 
					suis mon regard...
				</p>

				<Card Picture={Photo1} Name="IntroCard"></Card>
			</header>
		</div>
	);
}

export default App;
