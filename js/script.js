/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const studentListElements = document.querySelectorAll('li.student-item')
const numberOfItems = 10;
const maxPages = Math.ceil(studentListElements.length / numberOfItems);

const showPage = (list, page) => {
	let startIndex = (page * numberOfItems) - numberOfItems;
	let endIndex = page * numberOfItems;
	for (let i = 0; i < list.length; i++) {
		if (i >= startIndex && i < endIndex) {
			list[i].style.display = 'block';
		} else {
			list[i].style.display = 'none';
		}
	}
};

const appendPageItems = (list) => {
	let div = document.createElement('div');
	let pageDiv = document.querySelector('div.page'); //
	div.setAttribute("class", "pagination");
	pageDiv.appendChild(div);
	let ul = document.createElement('ul'); // create a list of buttons
	div.appendChild(ul);
	for (x = 0; x <= maxPages; x++) {
		let liItem = document.createElement("li");
		let liAnchor = document.createElement("a");
		liItem.className = 'pagination';
		ul.appendChild(liItem);
		liItem.appendChild(liAnchor);
		liAnchor.setAttribute('href', '#');
		liAnchor.textcontent = x;
		if (x === 1) {
			liAnchor.className = 'active';
		}
		liAnchor.addEventListener('click', (e) => {
			let activeItem = document.querySelector('liAnchor.active');
			activeItem.className.remove('active'); // remove the active class from the active button
			e.target.className.add('active'); // make a clicked button active
			showPage(list, liAnchor.textContent);
		})
	}
};

showPage(studentListElements, 1);
appendPageItems(studentListElements);
