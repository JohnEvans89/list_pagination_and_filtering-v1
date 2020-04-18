const showPage = (list, page) => {
	//'startindex' will begin at 0, no matter the value of 'numberOfItems'
	let startIndex = (page * numberOfItems) - numberOfItems;
	// 'endIndex' will be the value of 'numberOfItems'
	let endIndex = page * numberOfItems;
	// Loop thru the list of studets
	for (let i = 0; i < list.length; i++) {
		//if the [i] poisition is between 0 and 'numberOfItems' minus 1 - show the content
		if (i >= startIndex && i < endIndex) {
			list[i].style.display = 'block';
		}
		//Else hide it
		else {
			list[i].style.display = 'none';
		}
	}
};
///////////////
//'appendPageItems'
const appendPageItems = (list) => {
	let div = document.createElement('div');
	let pageDiv = document.querySelector('div.page'); //
	div.setAttribute("class", "pagination");
	pageDiv.appendChild(div);
	let ul = document.createElement('ul'); // create a list of buttons
	div.appendChild(ul);
	for (x = 1; x <= maxPages; x++) {
		let liItem = document.createElement("li");
		let liAnchor = document.createElement("a");
		liItem.className = 'pagination';
		ul.appendChild(liItem);
		liItem.appendChild(liAnchor);
		liAnchor.setAttribute('href', '#');
		liAnchor.textContent = x;
		if (x === 1) {
			liAnchor.className = 'active';
		}
		liAnchor.addEventListener('click', (e) => {
			let activeItem = document.querySelector(".active");
			activeItem.classList.remove('active'); // remove the active class from the active button
			e.target.classList.add('active'); // make a clicked button active
			var current = document.getElementsByClassName("active");
			this.className += " active";
			showPage(list, liAnchor.textContent);
		})
	}
};
