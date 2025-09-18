// ### CONFIG AREA ###

const serURL = 'https://domain.com' ;
// put the url here where the script is hosted

const ringNAME = 'Airnimals Collective' ;
// specify the name of your webring

const useANIMATION = 'true' ;
// specify whether or not the title link is animated (insert true or false"




const img = document.getElementById('nextLink');
  const link = document.getElementById('prevLink');

  link.addEventListener('mouseover', () => {
    img.classList.add('AIRNIMALSblink');
  });

  link.addEventListener('mouseout', () => {
    img.classList.remove('AIRNIMALSblink');
  });
