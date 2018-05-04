

document.querySelector("#inputValue").addEventListener('input',convert);

//catch the unit selection
document.querySelector('#unit').addEventListener('input', convert);



function convert(e){

// document.querySelector('#output').style.display ="block";

	let input =document.querySelector('#inputValue').value;
	// let input = e.target.value

	let unit = document.querySelector('#unit').value;


	switch(unit){
		case  'lbs':
			convertLbs(input);
			break;
		case 'grams':
			convertG(input);
			break;
		case 'kilograms':
			convertKg(input);
			break;
		case 'ounces':
			convertOz(input);
			break;	
		case 'fahrenheit':	
		 convertF(input);
			break;
		case 'celsius':	
		 convertC(input);
			break;
		case 'kelvin':	
		 convertK(input);
			break;
		case 'meters':	
		 convertM(input);
			break;	
		case 'miles':	
		 convertMi(input);
			break;
		case 'inches':	
		convertIn(input);
			break;		
	}

}

function convertLbs(num){
document.querySelector('#inputValue').placeholder = "Enter Pounds";
document.querySelector('#output').innerHTML = 
	'<div id="output">' +
			'<div class="card bg-primary mb-2">' +
				'<div class="card-header">' +
				'<h4>Grams</h4></div>' +
				'<div >' + num * 453.592 +'</div>' +			
			'</div>' +
			'<div class="card bg-success mb-2">'+
				'<div class="card-header">'+
				'<h4>Kilograms</h4></div>'+
				'<div>'+ num * 0.45359 +'</div>'	+

			'</div>'+
			'<div class="card bg-danger mb-2">'+
				'<div class="card-header">'+
				'<h4>Ounces</h4></div>'+
				'<div>' + num * 16 + '</div>'	+		
			'</div>'+
		'</div>'+	
	'</div>'
}

function convertG(num){
document.querySelector('#inputValue').placeholder = "Enter Grams";
document.querySelector('#output').innerHTML = 
	'<div id="output">' +
			'<div class="card bg-primary mb-2">' +
				'<div class="card-header">' +
				'<h4>Pounds</h4></div>' +
				'<div >' + num * 0.00220462 +'</div>' +			
			'</div>' +
			'<div class="card bg-success mb-2">'+
				'<div class="card-header">'+
				'<h4>Kilograms</h4></div>'+
				'<div>'+ num / 1000 +'</div>'	+

			'</div>'+
			'<div class="card bg-danger mb-2">'+
				'<div class="card-header">'+
				'<h4>Ounces</h4></div>'+
				'<div>' + num * 0.035274 + '</div>'	+		
			'</div>'+
		'</div>'+	
	'</div>'
}

function convertKg(num){

document.querySelector('#inputValue').placeholder = "Enter Kilograms";
document.querySelector('#output').innerHTML = 
	'<div id="output">' +
			'<div class="card bg-primary mb-2">' +
				'<div class="card-header">' +
				'<h4>Pounds</h4></div>' +
				'<div >' + num * 2.20462 +'</div>' +			
			'</div>' +
			'<div class="card bg-success mb-2">'+
				'<div class="card-header">'+
				'<h4>Grams</h4></div>'+
				'<div>'+ num * 1000 +'</div>'	+

			'</div>'+
			'<div class="card bg-danger mb-2">'+
				'<div class="card-header">'+
				'<h4>Ounces</h4></div>'+
				'<div>' + num * 35.274 + '</div>'	+		
			'</div>'+
		'</div>'+	
	'</div>'
}

function convertOz(num){

document.querySelector('#inputValue').placeholder = "Enter Ounces";
document.querySelector('#output').innerHTML = 
	'<div id="output">' +
			'<div class="card bg-primary mb-2">' +
				'<div class="card-header">' +
				'<h4>Pounds</h4></div>' +
				'<div >' + num * 0.0625 +'</div>' +			
			'</div>' +
			'<div class="card bg-success mb-2">'+
				'<div class="card-header">'+
				'<h4>Grams</h4></div>'+
				'<div>'+ num * 28.3495 +'</div>'	+

			'</div>'+
			'<div class="card bg-danger mb-2">'+
				'<div class="card-header">'+
				'<h4>Kilograms</h4></div>'+
				'<div>' + num * 0.0283495 + '</div>'	+		
			'</div>'+
		'</div>'+	
	'</div>'
}
	
	function convertF(num){

document.querySelector('#inputValue').placeholder = "Enter Degrees Fahrenheit";
document.querySelector('#output').innerHTML = 
	'<div id="output">' +
			'<div class="card bg-primary mb-2">' +
				'<div class="card-header">' +
				'<h4>Celsius</h4></div>' +
				'<div >' + (num-32) *(5/9) +'</div>' +			
			'</div>' +
			'<div class="card bg-success mb-2">'+
				'<div class="card-header">'+
				'<h4>Kelvin</h4></div>'+
				'<div>'+ ((num - 32)*(5/9) + 273) +'</div>'	+
			'</div>'+	
		
	'</div>'
}

function convertC(num){
	document.querySelector('#inputValue').placeholder = "Enter Degrees Celsius";
	document.querySelector('#output').innerHTML = 
		'<div id="output">' +
				'<div class="card bg-primary mb-2">' +
					'<div class="card-header">' +
					'<h4>Fahrenheit</h4></div>' +
					'<div >' + ((num*(9/5)) +32) +'</div>' +			
				'</div>' +
				'<div class="card bg-success mb-2">'+
					'<div class="card-header">'+
					'<h4>Kelvin</h4></div>'+
					'<div>'+ (num - 0 +273.15)
					 +'</div>'	+
				'</div>'+	
			
		'</div>'
}

function convertK(num){
	document.querySelector('#inputValue').placeholder = "Enter Degrees Kelvin";
	document.querySelector('#output').innerHTML = 
		'<div id="output">' +
				'<div class="card bg-primary mb-2">' +
					'<div class="card-header">' +
					'<h4>Fahrenheit</h4></div>' +
					'<div >' +((num - 273.15)*(9/5)+ 32) +'</div>' +			
				'</div>' +
				'<div class="card bg-success mb-2">'+
					'<div class="card-header">'+
					'<h4>Celsius</h4></div>'+
					'<div>'+ (num - 273.15)
					 +'</div>'	+
				'</div>'+	
			
		'</div>'
}


function convertM(num){
	document.querySelector('#inputValue').placeholder = "Enter Meters";
	document.querySelector('#output').innerHTML = 
		'<div id="output">' +
				'<div class="card bg-primary mb-2">' +
					'<div class="card-header">' +
					'<h4>Miles</h4></div>' +
					'<div >' +num*0.000621371 +'</div>' +			
				'</div>' +
				'<div class="card bg-success mb-2">'+
					'<div class="card-header">'+
					'<h4>Inches</h4></div>'+
					'<div>'+ num *39.3701
					 +'</div>'	+
				'</div>'+	
			
		'</div>'
}	

function convertMi(num){
	document.querySelector('#inputValue').placeholder = "Enter Miles";
	document.querySelector('#output').innerHTML = 
		'<div id="output">' +
				'<div class="card bg-primary mb-2">' +
					'<div class="card-header">' +
					'<h4>Meters</h4></div>' +
					'<div >' +num* 1609.34 +'</div>' +			
				'</div>' +
				'<div class="card bg-success mb-2">'+
					'<div class="card-header">'+
					'<h4>Inches</h4></div>'+
					'<div>'+ num*63360
					 +'</div>'	+
				'</div>'+	
			
		'</div>'
}

function convertIn(num){
	document.querySelector('#inputValue').placeholder = "Enter Inches";
	document.querySelector('#output').innerHTML = 
		'<div id="output">' +
				'<div class="card bg-primary mb-2">' +
					'<div class="card-header">' +
					'<h4>Miles</h4></div>' +
					'<div >' +num* 1.5783*Math.pow(10,-5)  +'</div>' +			
				'</div>' +
				'<div class="card bg-success mb-2">'+
					'<div class="card-header">'+
					'<h4>Meters</h4></div>'+
					'<div>'+ (num * 0.0254)
					 +'</div>'	+
				'</div>'+	
			
		'</div>'
}
	// console.log()
