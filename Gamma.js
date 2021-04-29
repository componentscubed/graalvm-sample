 Packages.Gamma.Graph;


// Author : Yuval Matas
// Date: April 29, 2021
// Description : Sample code of polyglot application using Node.js, javascript, java, and python. The Node.js provides a web framework, 
// the python code calculates gamma function values from -5 to 5, and the java code plots a graph of the gamma function values that
// was provided by the python gamma function.
//
//
const express = require('express');
const app = express();

var Graph = Java.type('Gamma.Graph');

var obj = new Graph();


app.get('/', function(req, res) {
        var text = ' <h1><u>THE GAMMA FUNCTION VALUES WITH INPUTS RANGING FROM X = -5.0 TO  X = 5.0 AND INCREMENTS OF 0.1 </u></h1><br> '

	// python script
	// Python provides a function for calculating gamma functions,  which I use to  print the values
      text += Polyglot.eval("python",
`import math 
def ret():
	count=-5.0
	cars =  []
	while (count < 5.0):
		count = count +0.1
		cars.append(str(math.gamma(count)))
	return cars
ret()
`);

	text +=' <h3><br> Author : Yuval Matas<br> Date : April 29,2021 <br> Description : Sample code of polyglot application using Node.js, javascript, java, and python. The Node.js provides a web framework, <br>the python code calculates gamma function results for values ranging -5.0 to 5.0, and the java code plots a graph of the gamma function values that<br>,was provided by the python gamma function.<br></h3>',
// python script 
// Store gamma floating point values in an array

     array = Polyglot.eval("python",
`import math 
def ret2():
	count=-5.0
	cars =  []
	while (count < 5.0):
		count = count +0.1
		cars.append(math.gamma(count))
	return cars
ret2()
`);
// java graph with python gamma function data 
	obj.createAndShowGui(array);

	res.send(text)
     })

     app.listen(3000, function () {
	     console.log('Example app listening on port 3000!')
     })


