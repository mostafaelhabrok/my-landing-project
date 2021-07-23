/*Global variables  declare*/
const list = document.querySelector('#nav_list');
const sections = document.querySelectorAll('section');
const h2 = document.querySelectorAll('h2');
const button = document.querySelector('button');
const header = document.querySelector('html');
let isScrolling;

function createAnchorBySection()
{//TODO: Creates links for each section 
  for (let index = 1; index <= sections.length; index++) {
    const anchor = document.createElement('a');
    const li =   document.createElement('li');

    anchor.innerHTML=h2[index-1].innerText;
    anchor.href='';
    anchor.id='section'+index;
    li.appendChild(anchor);
    list.appendChild(li);
    const link = document.querySelector('#section'+index);
    link.addEventListener('click',function(event){
    event.preventDefault();
    sections[index-1].scrollIntoView({behavior:"smooth"});
    }  );
 }
}

function topButtonDispaly()
{
  //TODO: Show button when whole page is Scrolled 
  button.addEventListener('click',function(){header.scrollIntoView({behavior:'smooth'})});
  window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        button.style.display='block';
    }
  };

}

function scrollStopEvent ( event ) {
  //TODO: Detects Scrolling Stop
  SectionInViewport();
  window.clearTimeout( isScrolling );
  list.style.display='block';
  isScrolling = setTimeout(function() {

      list.style.display='none';
      
  }, 3000);

};

  function SectionInViewport() {
    //TODO: check if Section is in Viewport to add active flag to the Active class and Button
    const anchors = document.querySelectorAll('a');
    for(let i= 0; i< sections.length;i++)
    {
        let Sectiony = document.querySelectorAll('section')[i];
        let bounding = Sectiony.getBoundingClientRect();
        if ( bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) )
        {
          document.querySelectorAll("section")[i].classList.add("your-active-class");
          anchors[i].style.backgroundColor='yellow';

        }
        else{
          document.querySelectorAll("section")[i].classList.remove("your-active-class");
          anchors[i].style.backgroundColor='';

        }
    }
}


///////////////////////////////////////MainCode////////////////////////////////////
createAnchorBySection();
window.addEventListener('scroll',scrollStopEvent , false);
topButtonDispaly();