var initalCats = [

	{

		'clickCount': 0,
		'name': 'El',
		'imgSrc': 'img/el.jpg',
		'counterText': 'Number of Clicks for El: ',
		'imgAttribution': 'Zach Nagatani',
		'nicknames': ["El", "Kitty", "Chunkerton", "Queen of the Castle"],

	}, {

		'clickCount': 0,
		'name': 'Widdle Baby',
		'imgSrc': 'img/widdle-baby.jpg',
		'counterText': 'Number of Clicks for Widdle Baby: ',
		'imgAttribution': 'Warren Nagatani',
		'nicknames': ['WIDDLE BAE-BEEEEEEEEEEEE!!!!'],
	}, {

		'clickCount': 0,
		'name': 'Mama',
		'imgSrc': 'img/mama.jpg',
		'counterText': 'Number of Clicks for Mama: ',
		'imgAttribution': 'Warren Nagatani',
		'nicknames': ['Satan, Beelezebub', 'Devil Kitty']

	}, {

		'clickCount': 0,
		'name': 'Legion',
		'imgSrc': 'img/legion.jpg',
		'counterText': 'Number of Clicks for Legion: ',
		'imgAttribution': 'Warren Nagatani',
		'nicknames': ['We Are Many'],

	}, {

		'clickCount': 0,
		'name': 'Boy',
		'imgSrc': 'img/boy.jpg',
		'counterText': 'Number of Clicks for Boy: ',
		'imgAttribution': 'Warren Nagatani',
		'nicknames': ['Boy Kitty!!!', 'Peanut Butter Boy'],

	}
];


var Cat = function(data){

	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);

	this.level = ko.computed(function(){


		if (this.clickCount() < 10) {
			return "Newborn";
		} else if (this.clickCount() < 50) {
			return "Infant";
		} else if (this.clickCount() < 100) {
			return "Teen";
		} else if (this.clickCount() < 200) {
			return "Adult";
		} else {
			return "Holy crap; you're still clicking???"
		}

	}, this);

};

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initalCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};

	this.changeCat = function(){
		self.currentCat(this);
	};
};

ko.applyBindings(new ViewModel());