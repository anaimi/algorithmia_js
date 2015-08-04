/*
	summarizer.js
	
	Example shows how to call Algorithmia twice:
		- Get the main text of a page (Url2Text)
		- Get the summary of a piece of text (Summarize)
*/

var algorithmia = require("../lib/algorithmia.js");
var client = algorithmia(process.env.ALGORITHMIA_API_KEY);

var url = "http://www.paulgraham.com/hp.html";

client.algo("util/Url2Text").pipe(url).then(function(result) {

	if (result.error)
		throw result.error.message;

	client.algo("nlp/Summarizer").pipe(result).then(function(result) {
		console.log(result);
	});
});