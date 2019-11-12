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
					Title="What do you see?" />
			</header>
			<header className="AppContent" id="MainPage">
				<Card 
					Name="MainCard1"
					Picture={Photo1} 
					Title="Card 1" />
				
				<Card 
					Name="MainCard2"
					Picture={Photo1} 
					Title="Card 2" />
				
				<Card 
					Name="MainCard3"
					Picture={Photo1} 
					Title="Card 3" />
				
				<Card 
					Name="MainCard4"
					Picture={Photo1} 
					Title="Card 4" />
			</header>
		</div>
	);
}

export default App;
