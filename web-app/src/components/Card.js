import React from 'react';
import '../style/Card.css';

class Card extends React.Component {
	render() {
		return (
			<div className="CardContainer">
				<img src={this.props.Picture} class="CardPicture" alt=""/>
				<div className="CardFooter"></div>
			</div>
		);
	}
}

export default Card;