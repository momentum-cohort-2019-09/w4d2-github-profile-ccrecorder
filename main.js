const name = document.querySelector('#name');
const size = document.querySelector('#size');
const color = document.querySelector('#color');
const shippingWeight = document.querySelector('#shippingWeight');
const dateOfManufacture = document.querySelector('#dateOfManufacture');

const fetchDroid = function() {
	fetch('https://swapi.co/api/people/8/').then((response) => response.json()).then((data) => {
		name.innerText = `${data.name} Unit`;
		size.innerText = `Height of ${data.height} cm`;
		color.innerText = `Color: ${data.color} and white`;
		shippingWeight.innerText = `Shipping Weight: ${data.mass} kg`;
		dateOfManufacture.innerText = `Date of Manufacture: ${data.birth_year}`;
	});
};

fetchDroid();
