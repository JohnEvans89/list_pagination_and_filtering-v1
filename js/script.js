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
