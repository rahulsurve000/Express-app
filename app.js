const express = require("express");
const bodyparser = require("body-parser");

// stores the express module into the app variable!
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

//sends index.html
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/" + "index.html");
});

//this is used to post the data on the specific route
app.post("/", function (req, res) {
	hgt = parseFloat(req.body.Height);
	wgt = parseFloat(req.body.Weight);
	bmi = wgt / (hgt * hgt);

	//number to string format
	bmi = bmi.toFixed();

	req_name = req.body.Name;

	// CONDITION FOR BMI
	if (bmi < 19) {
		res.send("<h3>Hello! " + req_name +
				" your BMI is around: " + bmi +
				"<centre><h1>Your BMI: indicates that you are UNDER WEIGHT");
	} else if (19 <= bmi && bmi < 25) {
		res.send("<h3>hey! " + req_name +
				" your BMI is around: " + bmi +
				"<centre><h1>Your BMI indicates that You are Normalweighted!");
	} else if (25 <= bmi && bmi < 30) {
		res.send("<h3>hey! " + req_name +
				" your BMI is around: " + bmi +
				"<centre><h1>Your BMI indicates that You are Overweight!");
	} else {
		res.send("<h3>hey! " + req_name +
				" your BMI is around: " + bmi +
				"<centre><h1>You are Obese!");
	}
});

//this is used to listen a specific port!
app.listen( process.env.PORT || 5050 ,function () {
	console.log(`listening at port: 5050`);
});
