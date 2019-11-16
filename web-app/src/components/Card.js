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
		let displaySubtitle = (this.props.Subtitle != null && this.props.Subtitle.length > 0 ? 'block' : 'none');
		let displaySubtitleExample = (!this.isTutorialComplete && displaySubtitle ? 'block' : 'none');
		return (
			<form className="CardContainer" id={this.props.Name} onClick={this.onCardClicked}>
				<div className="CardHeader">
					<div className="CardTitle">{(this.isTutorialComplete ? "Bravo!" : this.props.Title)}</div>
					<div className="CardSubtitle" style={{display: displaySubtitle}}>{(this.isTutorialComplete ? "Clique n'importe où pour continuer" : this.props.Subtitle)}</div>
					<div className="CardSubtitle" style={{display: displaySubtitleExample}}>{this.props.SubtitleExample}</div>
				</div>
				<div className="CardBody" style={{backgroundImage: 'url(' + this.props.Picture + ')'}}></div>
				<div className="CardFooter">
					<ReactCodeInput 
						type='number' 
						fields={4} 
						onChange={this.onCodeChanged} 
						value={localStorage[this.props.Name + "Code"]} 
						disabled={this.checkCurrentCode()} />
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