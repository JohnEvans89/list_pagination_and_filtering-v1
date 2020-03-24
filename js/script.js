/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.

   Create your global variables
This project can be completed with just two global variables
Create a variable to store the student list item elements in the student list.
Pro Tip: Log out the variable storing the list to ensure it equals the list of li items and not the container of the li elements.
Create a variable to store the number of items to show on each “page”, which for this project, is 10.
***/let studentListElements=document.getElementsByClassName("student-item cf");
let numberOfItems =10;
console.log(studentListElements[0]);

const showPage = (list,page) => {
  let startIndex= (page*numberOfItems)-numberOfItems;
  let endIndex=page*numberOfItems;

  for (let i=0;i<list.length;i++){
    if(i>=startIndex && i < endIndex){
      list[i].style.display='block';}
      else
      {list[i].style.display='none';}
    }
  };

const appendPageLinks = (list) =>{
  let maxPages=Math.ceil(list.length/numberOfItems);
  
  let div=document.createElement('div');
    div.setAttribute("class", "pagination");
    div.appendChild('.page');
  
  let ul = document.createElement('ul'); // create a list of buttons
    div.appendChild(ul);

}
  showPage(studentListElements,1);



  /*
  1. Determine how many pages are needed for the list by dividing the
  total number of list items by the max number of items per page
  2. Create a div, give it the “pagination” class, and append it to the .page div
  3. Add a ul to the “pagination” div to store the pagination links
  4. for every page, add li and a tags with the page number text
  5. Add an event listener to each a tag. When they are clicked
  call the showPage function to display the appropriate page
  6. Loop over pagination links to remove active class from all links
  7. Add the active class to the link that was just clicked. You can identify that
  clicked link using event.target


  Inside the function:
  Create and append the DOM elements for the pagination links.
  Use lines 119-137 in the examples/example-meets.html file as your template.
  Pay close attention to how elements are nested, any necessary class names or other element attributes, and where your additions should be appended.
  You should end up with:
  A container DIV element with a class name of “pagination”, and appended to the div element with the class name of page.
  A nested UL element containing one LI element for every ten students in the list.
  Pro Tip: You can divide list.length by the max number of items per page to figure out how many pages are needed, and you can use a loop that iterates that many times to create the correct number of LI elements.
  Each LI element should contain an A element with an href attribute of #, and text set to the page number each link will show. First link is 1. Second link is 2. And so on.
  Pro Tip: The loop index can be helpful in setting the text of the pagination links.
  Add the active class name to the first pagination link initially.
  Add a “click” event listener to each A element. A loop can be helpful here.
  When a pagination link is clicked:
  The active class name should be removed from all pagination links. A loop can be helpful for this step.
  The active class name should be added to the link that was just clicked. The target property of the event object should be useful here.
  The function to show a page should be called, passing in as arguments, the global variable for the list items, and the page number that should be shown. The text content of the A element that was just clicked can be helpful here.
*/

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.
