import React from 'react';
import ReactCodeInput from 'react-code-input';
import '../style/Card.css';
import $ from 'jquery';
window.jQuery = window.$ = $;

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleState: false
		};
		
		this.onCardClicked = this.onCardClicked.bind(this);
		this.codeFieldId = this.props.Name + "CodeField";
	}

	render() {
		return (
			<form className="CardContainer">
				<div className="CardHeader">
					<span>lol</span>
				</div>
				<img src={this.props.Picture} className="CardPicture" alt="" onClick={this.onCardClicked}/>
				<div className="CardFooter">
					<ReactCodeInput type='number' fields={4} />
				</div>
			</form>
		);
	}

	onCardClicked() {
		this.setState(state => ({toggleState: !state.toggleState}));
		$('.CardFooter').find('input')[0].focus();
	}
}

export default Card;