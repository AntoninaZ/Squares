
var Squares = {

	init: function() {
		this.container = document.getElementById('container');
		this.btnGenerateClick = document.getElementById('generateClick');
		this.btnShowResult = document.getElementById('showResult');
		this.btnReset = document.getElementById('reset');

		this.generateSquares();
		this.square = document.getElementsByClassName('square');
		console.log(this.square[6]);
		this.events();
	},
	generateSquares: function() {
		for (var i = 0; i < 100; i++) {
			var square = document.createElement('div');
			square.dataset.attr = 0;
			square.id = i;
			square.className = 'square';
			Squares.container.appendChild(square);
		}
	},
	events: function() {
		Squares.btnGenerateClick.addEventListener('click', Squares.generateClickSquare);
		Squares.btnShowResult.addEventListener('click', Squares.showResult);
		Squares.btnReset.addEventListener('click', Squares.reset);
		for (var i = 0; i < 100; i++) {
			Squares.square[i].addEventListener('click', Squares.userClickSquare);
		}
	},
	generateClickSquare: function() {
		for (var i = 0; i < 100; i++) {
			var r = Math.floor((Math.random() * 100));
			var currentCount = parseInt(document.getElementById(r).getAttribute('data-attr'));
			document.getElementById(r).setAttribute('data-attr', ++currentCount);
		}
	},
	showResult: function() {
		for (var i = 0; i < 100; i++) {
			document.getElementById(i).innerHTML = document.getElementById(i).getAttribute('data-attr');
		}
	},
	reset: function() {
		for (var i = 0; i < 100; i++) {
			document.getElementById(i).setAttribute('data-attr', 0); 
		}
		Squares.showResult;
	},
	userClickSquare: function(e) {
		var currentCount = parseInt(e.target.dataset.attr);
		e.target.dataset.attr = ++currentCount;
	}
};

Squares.init();