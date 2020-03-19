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
***/
let studentListElements=document.getElementsByClassName("student-item cf");
let numberOfItems =10;

console.log(studentListElements[0]);





/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   To hide all students and show only a particular set of ten, we could create a function that takes
in parameters for the list (all of the students) it’s supposed to work on, and the "page" that’s
supposed to be shown. A "page" here just means a list of 10 students: so the first 1-10
students would be "page 1", students 11-20 appear on "page 2", and so on.

const showPage = (list, page) => {

Loop over items in the list parameter
-- If the index of a list item is >= the index of the first
item that should be shown on the page
-- && the list item index is <= the index of the last item
that should be shown on the page, show it

}

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function


***/

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

  showPage(studentListElements,1);




/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.
