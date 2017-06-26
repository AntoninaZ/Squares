
var Squares = {

	init: function() {
		this.container = document.getElementById('container');
		this.btnGenerateClick = document.getElementById('generateClick');
		this.btnShowResult = document.getElementById('showResult');
		this.btnReset = document.getElementById('reset');
		this.square = [];
		for (var i = 0; i < 100; i++) {
			this.square[i] = document.createElement('div');
			this.square[i].dataset.attr = 0;
			this.square[i].id = i;
			this.square[i].className = 'square';
			this.container.appendChild(this.square[i]);
		}
		this.events();
	},
	events: function() {
		for (var i = 0; i < 100; i++) {
			Squares.square[i].addEventListener('click', Squares.clickSquare);
		}
	},
	clickSquare: function(e) {
		var currentCount = parseInt(e.target.dataset.attr);
		e.target.dataset.attr = ++currentCount;
	}
};

Squares.init();