import React from 'react';
import '../style/App.css';
import Card from './Card.js';
import Photo0 from '../textures/photo0.jpg';
import Photo1 from '../textures/photo1.jpg';
import Photo2 from '../textures/photo2.jpg';
import Photo3 from '../textures/photo3.jpg';
import Photo4 from '../textures/photo4.jpg';

function App() {
	return (
		<div className="App">
			<header className="AppContent" id="TutorialPage">
				<Card 
					Name="TutorialCard"
					Picture={Photo0} 
					Title="Tutorial"
					Subtitle="Code = Numéro de rue derrière le photographe + Arrondissement (ex: 43 12)"
					VictorySubtitle="Clique n'importe où pour continuer !"
					Code="0404" />
			</header>
			<header className="AppContent" id="MainPage">
				<Card 
					Name="MainCard1"
					Picture={Photo1} 
					Title="Ça rime avec pistache"
					VictorySubtitle="Tu as trouvé le premier chiffre !"
					Code="1013"
					Digit= "4"/>
				
				<Card 
					Name="MainCard2"
					Picture={Photo2} 
					Title="Mon voisin Rodrigo"
					VictorySubtitle="Tu as trouvé le deuxième chiffre !"
					Code="0614" 
					Digit="1" />
				
				<Card 
					Name="MainCard3"
					Picture={Photo3} 
					Title="J'aime me beurrer la biscotte"
					VictorySubtitle="Tu as trouvé le troisième chiffre !"
					Code="0204" 
					Digit="3" />
				
				<Card 
					Name="MainCard4"
					Picture={Photo4} 
					Title="Buon compleanno mi amor-ino"
					VictorySubtitle="Tu as trouvé le dernier chiffre !"
					Code="0105" 
					Digit="8" />
			</header>
		</div>
	);
}

export default App;
