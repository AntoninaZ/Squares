var Square = function(element, clickCounter) {
	
	this.paint = function() {
		element.classList.add('square-mid');
	}
} 
var Squares = {

	init: function() {
		this.container = document.getElementById('container');
		this.btnGenerateClick = document.getElementById('generateClick');
		this.btnShowResult = document.getElementById('showResult');
		this.btnReset = document.getElementById('reset');
		this.square = [];
		this.sqr = [];
		for (var i = 0; i < 100; i++) {
			this.square[i] = document.createElement('div');
			this.square[i].id = 'square' + i;
			this.square[i].className = 'square';
			this.container.appendChild(this.square[i]);
			
		}
		this.events();
	},
	events: function() {
		for (var i = 0; i < 100; i++) {
			Squares.square[i].addEventListener('click', function() {
				Squares.sqr[i] = new Square(this, 2);
				
				Squares.sqr[i].paint();
			});
	    }
	},
	clickSquare: function(i) {
	}
};

Squares.init();