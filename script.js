const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	fruit.filter(val => val.toLowerCase().includes(str) ? results.push(val) : null);
	return results;
}

function searchHandler(e) {
	let inputVal = e.target.value.toLowerCase();
	let results = search(inputVal);
	inputVal ? showSuggestions(results) : suggestions.innerText = "";
}

function showSuggestions(results, inputVal) {
	suggestions.innerText = "";
	if (results.length > 0) {
		for (let i = 0; i < results.length && i < 5; i++) {
			let newLi = document.createElement('li');
			newLi.innerText = results[i];
			suggestions.appendChild(newLi);
		}
	}
}

function useSuggestion(e) {
	fruitVal = e.target.innerText;
	input.value = fruitVal;
	suggestions.innerText = "";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);