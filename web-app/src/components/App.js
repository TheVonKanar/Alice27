import React from 'react';
import '../style/App.css';
import Card from './Card.js';
import Photo1 from '../textures/photo1.jpg';

function App() {
	return (
		<div className="App">
			<header className="AppContent" id="IntroPage">
				<Card 
					Name="IntroCard"
					Picture={Photo1} 
					Title="TUTORIAL" 
					Subtitle="TEMP" /* Trouve où cette photo a été prise. Les deux premiers chiffres sont l'arrondissement, les deux suivant sont le numero (ex: Amplitude = 1243) */
					Code="1234" />
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
