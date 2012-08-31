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
	}
};

$(function(){

	$(document).on('click','input[type="button"]',function(){
		var $this = $(this);
		presentation[$this.data('run')]($this.data('args'));
	});

});