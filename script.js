const template = document.createElement('template');

template.innerHTML = `
	<style>
		:host {
			font-family: Futura;
			font-size: 16px;
		}

		.open-button {
			display: block;
			background: rgb(43, 48, 59);
			color: #fff;
			width: 100%;
			padding: 10px;
			margin: 2px;
			text-align: left;
			font-size: 20px;
			border: none;
			border-radius: 10px;
			transition: 0.3s;
		}

		.open-button:hover {
			background: rgb(75, 75, 75);
		}

		.content {
			display: none;
			padding: 0 10px;
			overflow: hidden;
		}
	</style>

	<button class="open-button">Click here</button>
	<div class="content">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, maxime.</p>
	</div>
	
`;

class Accordion extends HTMLElement {
	constructor() {
		super();

		this._shadowRoot = this.attachShadow({ mode: 'open' });
    	this._shadowRoot.appendChild(template.content.cloneNode(true));

    	this.$button = this._shadowRoot.querySelector('button');
    	this.$content = this._shadowRoot.querySelector('.content');
    	this.$button.addEventListener(
    		'click', 
    		this.slideDown.bind(this)
    	);
	}
	
	slideDown(event){
		if (this.$content.style.display === 'block') {
			this.$content.style.display = 'none';
		} else {
			this.$content.style.display = 'block';
		}
	}

}


customElements.define('accordion-component', Accordion);