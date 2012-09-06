$(function(){
	var presentation = {
		scoping : function(){
			function doSomething(){
				myVar = "foo"; //this goes into the global scope which == bad
				var myOtherVar = "bar"; //this goes into the function scope which == good
			}

			doSomething();
			
			console.log(myVar); //foo
			console.log(myOtherVar); //error
		},

		andor3 : function(arg){

			var myFunc = function(arg){

				var myVal = document.getElementById(arg) ||
				document.createElement("div"); //if no arg was passed in myVal is "defaultValue"

				console.log(myVal);
			};

			myFunc();
			myFunc("andor3");
		},

		args : function(){
			var myFunc = function(){
				console.log(arguments);
			};

			myFunc("Hello", "World", function(){});
		},

		closure : (function(){
			var total = 0;

			return function(){
				total++;
				console.log(total);
			};
		}()),

		this1 : function(){
			console.log( this );
			window.myFunc();
		},

		this2 : function(){
			var person = new Person("Bart");
		},

		this3 : function(){
			myObj = {
				name : "Homer",

				sayHello : function(){
					//look what happens when this is used inside a nested function
					return (function(){
						console.log("Hello, " + this.name);
						console.log(this);
					}());
				}
			};

			myObj.sayHello();
		},

		inheritance1 : function(){
			var Car = function(){ };

			//add properties to Car's Prototype
			Car.prototype = {
				wheels : 4, doors : 4,  manufacturer : ""
			};

			var R8 = function(){ };

			//set the R8's prototype to a new instance of car
			R8.prototype = new Car();

			R8.prototype.constructor = R8; //reset the R8's constructor

			var r8 = new R8();

			console.log(r8);
			console.log(r8.wheels);
		},

		optionsPattern : function(){
			$(document).myPlugin({color:'black', height: '500px'});
			$(document).myPlugin();
		},

		pubSub : function(){
			var contacts = {
				collection : ['Aaron','Drew','Tom'],
				update : function(){
					this.collection[0] = 'Arian';
					this.collection[1] = 'Adrian';
					this.collection[2] = 'Ray';
					
					$(this).trigger('change');
				}
			};

			$(contacts).on('change',function(){
				var contactSelect = $('select[name="contact"]');

				contactSelect.find('option').remove();

				for(var i = 0; i < contacts.collection.length; i++){
					contactSelect.append('<option value="">' + contacts.collection[i] + '</option>');
				}
			});

			contacts.update();
		}
	};

	$(document).on('click','input[type="button"]',function(){
		var $this = $(this);

		if(presentation[$this.data('run')]){
			presentation[$this.data('run')]($this.data('args'));
		}
	});
});


//intentional globals
var myFunc = function(){
	console.log(this);
};

var obj = {
	init : function(){
		$('#thisButton').on('click',function(){
			console.log(this);
		});
	}
};

obj.init();

var obj1 = {
	init : function(){
		var self = this; //create a ref to the current "this" scope

		$("#thisButton1").on('click',function(){
			console.log(self);
		});
	}
};

obj1.init();

function Person(name){
	this.name = name;
	
	console.log(this);
	console.log(this.name);
}

$.fn.myPlugin = function(options){
	var defaults = {color: "blue", height: "200px" };

	//remember to check the type of the argument!
	if(typeof options === 'object'){
		options = $.extend(defaults,options);
	} else {
		options = defaults;
	}

	console.log(options);
};

