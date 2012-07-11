<html>
<head>
	<title>JavaScript For ColdFusion Devs</title>
	<style>
		body { font-size: 2em; 
				  font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
				  font-size: 1.25em;
				  background: #f4fafe;
				  /* Old browsers */
				  background: -moz-linear-gradient(top, #f4fafe 0%, #ccf0f0 100%);
				  /* FF3.6+ */
				  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f4fafe), color-stop(100%, #ccf0f0));
				  /* Chrome,Safari4+ */
				  background: -webkit-linear-gradient(top, #f4fafe 0%, #ccf0f0 100%);
				  /* Chrome10+,Safari5.1+ */
				  background: -o-linear-gradient(top, #f4fafe 0%, #ccf0f0 100%);
				  /* Opera11.10+ */
				  background: -ms-linear-gradient(top, #f4fafe 0%, #ccf0f0 100%);
				  /* IE10+ */
				  background: linear-gradient(top, #f4fafe 0%, #ccf0f0 100%);
				  /* W3C */
				  background-attachment: fixed;

		}

		h2 {
		  line-height: 1;
		  -webkit-box-reflect: below -0.556em -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.3, transparent), color-stop(0.7, rgba(255, 255, 255, 0.1)), to(transparent));
		  -moz-box-reflect: below -0.556em -moz-linear-gradient(top, transparent 0%, transparent 30%, rgba(255, 255, 255, 0.3) 100%);
		  font-size: 2.25em;
		  font-weight: bold;
		  padding-top: .5em;
		  margin: 0 0 .66666em 0;
		  border-bottom: 3px solid #888;
		  color: #0b7495;
  			border-bottom: 0;
  		font-family: "Hoefler Text", Constantia, Palatino, "Palatino Linotype", "Book Antiqua", Georgia, serif;
}

		}
	</style>
</head>
<body>	
	<h2>JavaScript Fundamentals</h2>
	<cfswitch expression="#section#">
		<cfcase value="numbers" delimiters="">
			<cfscript>
				result = 0.06 + 0.01;

				String = createObject("java","java.lang.String");
						
				writedump(result);
				writeOutput("<br>");
				writedump(String.valueOf(result));
			</cfscript>
		</cfcase>
		<cfcase value="arrays">
			<cfset createArray()>
		</cfcase>
		<cfcase value="forin">
			<cfscript>
				myStruct = {foo = "Foo", bar = "Bar", baz = "Baz"};

				for(myKey in myStruct){
					myVar = myStruct[myKey];
					writedump(var="#myVar#");
					writeOutput("<br>");
				}
			</cfscript>
		</cfcase>
	</cfswitch>
</body>
</html>

<cffunction name="createArray">
	<cfset var myArray = ["Foo","Bar","Bazz"]>
	
	<cfset changeArray(myArray)>
	<cfdump var="#myArray#">
</cffunction>

<cffunction name="changeArray">
	<cfargument name="theArray" type="array" />
	<cfset arguments.theArray[2] = "Win!" />
	<cfdump var="#theArray#">
</cffunction>