/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing
const studentListElements=document.getElementsByClassName("student-item cf");
const numberOfItems =10;
const maxPages = Math.ceil(studentListElements.length/numberOfItems);

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
  showPage(studentListElements,4);
  

const appendPageLinks = (list) =>{
   
  let div=document.createElement('div');
  let pageDiv=document.querySelector('div.page');//
  
    div.setAttribute("class", "pagination");
    divPage.appendChild(div);
  
  let ul = document.createElement('ul'); // create a list of buttons
    div.appendChild(ul);
    
    for (x=0;x<maxPages.length;x++){
    let liLink=document.createElement("li");
    let liAnchor=document.createElement("a");
    ul.appendChild(liLink);
    liLink.appendChild(liAnchor);
    liAnchor.textcontent=[x];
    if(x===1){
      liAnchor.className = 'active';
    }
      
    }
    
    
};
