import React from 'react';
import ReactCodeInput from 'react-code-input';
import '../style/Card.css';
import $ from 'jquery';
window.jQuery = window.$ = $;

class Card extends React.Component {
	constructor(props) {
		super(props);
		
		this.onCardClicked = this.onCardClicked.bind(this);
		this.onCodeChanged = this.onCodeChanged.bind(this);
		this.getCurrentCode = this.getCurrentCode.bind(this);
		this.checkCurrentCode = this.checkCurrentCode.bind(this);
		this.codeFieldId = this.props.Name + "CodeField";
	}

	render() {
		return (
			<form className="CardContainer" id={this.props.Name} onClick={this.onCardClicked}>
				<div className="CardHeader">
					<span>{this.props.Title}</span>
				</div>
				<div className="CardBody" style={{backgroundImage: 'url(' + this.props.Picture + ')'}}></div>
				<div className="CardFooter">
					<ReactCodeInput 
						type='number' 
						fields={4} 
						onChange={this.onCodeChanged} 
						value={localStorage[this.props.name + "Code"]} 
						disabled={this.checkCurrentCode()} />
				</div>
			</form>
		);
	}

	onCardClicked() {
		$(`#${this.props.Name}`).find('input')[Math.min(this.getCurrentCode().length, 3)].focus();
	}

	onCodeChanged() {		
		let currentCode = this.getCurrentCode();
		localStorage[this.props.name + "Code"] = currentCode;

		if (this.checkCurrentCode()) {
			this.forceUpdate();
			document.activeElement.blur();
		}
	}

	getCurrentCode() {
		let currentCode = '';
		for (let i = 0; i < 4; i++) {
			currentCode += $(`#${this.props.Name} [data-id=${i}]`)[0].value;
		}

		return currentCode;
	}

	checkCurrentCode() {
		return localStorage[this.props.name + "Code"] === this.props.Code;
	}
}

export default Card;