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
					Title="TUTORIAL" 
					Subtitle="Code = Numéro de rue derrière moi + Arrondissement"
					SubtitleExample="Example: Photo prise depuis Amplitude = 4312"
					Code="0404" />
			</header>
			<header className="AppContent" id="MainPage">
				<Card 
					Name="MainCard1"
					Picture={Photo1} 
					Title="Ça rime avec pistache"
					Code="1013" />
				
				<Card 
					Name="MainCard2"
					Picture={Photo2} 
					Title="Mon voisin Rodrigo"
					Code="0614" />
				
				<Card 
					Name="MainCard3"
					Picture={Photo3} 
					Title="J'aime me beurrer la biscotte"
					Code="0204" />
				
				<Card 
					Name="MainCard4"
					Picture={Photo4} 
					Title="Une bonne glace"
					Code="0105" />
			</header>
		</div>
	);
}

export default App;
