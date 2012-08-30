var presentation = {
	scoping : function(){
		function doSomething(){
		    myVar = "foo"; //this goes into the global scope which == bad
		    var myOtherVar = "bar"; //this goes into the function scope which == good     
		}

		doSomething();
		
		console.log(myVar); //foo 
		console.log(myOtherVar); //error
	}
};

$(function(){

	$(document).on('click','input[type="button"]',function(){
		presentation[$(this).data('run')]();
	});

});