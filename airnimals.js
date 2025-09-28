// ### CONFIG AREA ###

const serURL = 'https://domain.com' ;
// put the url here that the script is hosted on e.g. https://airnimals.org

const ringNAME = 'Airnimals Collective' ;
// specify the name of your webring that will be displayed above the links

const ringID = 'AIR' ;
// put in the ring id that was given to you by the webring host (you can choose your own id when self-hosting the script)

const useANIMATION = 'true' ;
// specify whether or not the title link should be animated (insert true or false)

const randomLINK = 'true' ;
// specify whether or not a link to a random webring member should be displayed (insert true or false)

const nextprevLINK = 'true' ;
// specify whether or not links to the previous and next webring member should be displayed (insert true or false)
// IMPORTANT you whether have to set randomLINK or nextprevLINK to true or set both to true, otherwise no links will show up


const img = document.getElementById('nextLink');
  const link = document.getElementById('prevLink');

  link.addEventListener('mouseover', () => {
    img.classList.add('AIRNIMALSblink');
  });

  link.addEventListener('mouseout', () => {
    img.classList.remove('AIRNIMALSblink');
  });
