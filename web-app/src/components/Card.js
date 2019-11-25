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
		this.isTutorialComplete = false;
	}

	render() {
		let checkCurrentCode = this.checkCurrentCode();
		let showSubtitle = (checkCurrentCode && this.props.VictorySubtitle != null) || this.props.Subtitle != null;
		let subtitleDisplay = (showSubtitle ? 'block' : 'none');
		let giftDigitDisplay = (checkCurrentCode && this.props.Digit != null ? 'block' : 'none');
		return (
			<form className="CardContainer" id={this.props.Name} onClick={this.onCardClicked}>
				<div className="CardHeader">
					<div className="CardTitle">{(checkCurrentCode ? "Bravo !" : this.props.Title)}</div>
					<div className="CardSubtitle" style={{display: subtitleDisplay}}>{(checkCurrentCode ? this.props.VictorySubtitle : this.props.Subtitle)}</div>
				</div>
				<div className="CardBody" style={{backgroundImage: 'url(' + this.props.Picture + ')'}}>
					<span className="rainbow-text" style={{display: giftDigitDisplay}}>{this.props.Digit}</span>
				</div>
				<div className="CardFooter">
					<ReactCodeInput 
						type='number' 
						fields={4} 
						onChange={this.onCodeChanged} 
						value={localStorage[this.props.Name + "Code"]} 
						disabled={checkCurrentCode} />
				</div>
			</form>
		);
	}

	onCardClicked() {
		if (this.isTutorialComplete) {
			window.location.reload(false); 
		}
		else {
			$(`#${this.props.Name}`).find('input')[Math.min(this.getCurrentCode().length, 3)].focus();
		}
	}

	onCodeChanged() {		
		let currentCode = this.getCurrentCode();
		localStorage[this.props.Name + "Code"] = currentCode;

		if (this.checkCurrentCode()) {
			if (this.props.Name === "TutorialCard")
			{
				this.isTutorialComplete = true;
				localStorage["TutorialComplete"] = true;			
			}
			
			document.activeElement.blur();
			this.forceUpdate();
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
		return localStorage[this.props.Name + "Code"] === this.props.Code;
	}
}

export default Card;