import React from 'react';
import '../style/App.css';
import Card from './Card.js';
import Photo1 from '../textures/photo1.jpg';

function App() {
	return (
		<div className="App">
			<header className="AppContent" id="TutorialPage">
				<Card 
					Name="TutorialCard"
					Picture={Photo1} 
					Title="TUTORIAL" 
					Subtitle="Code = Numéro de rue + Arrondissement"
					SubtitleExample="Example: Amplitude = 4312"
					Code="4312" />
			</header>
			<header className="AppContent" id="MainPage">
				<Card 
					Name="MainCard1"
					Picture={Photo1} 
					Title="Card 1"
					Code="1234" />
				
				<Card 
					Name="MainCard2"
					Picture={Photo1} 
					Title="Card 2"
					Code="1234" />
				
				<Card 
					Name="MainCard3"
					Picture={Photo1} 
					Title="Card 3"
					Code="1234" />
				
				<Card 
					Name="MainCard4"
					Picture={Photo1} 
					Title="Card 4"
					Code="1234" />
			</header>
		</div>
	);
}

export default App;
