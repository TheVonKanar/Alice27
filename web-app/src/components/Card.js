import React from 'react';
import '../style/Card.css';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleState: false
		};
		
		this.toggleCard = this.toggleCard.bind(this);
	}

	render() {
		return (
			<div className="CardContainer" onClick={this.toggleCard}>
				<img src={this.props.Picture} className="CardPicture" alt=""/>
				<div className="CardFooter"></div>
			</div>
		);
	}

	toggleCard() {
		this.setState(state => ({toggleState: !state.toggleState}));		
		console.log(this.state);
	}
}

export default Card;