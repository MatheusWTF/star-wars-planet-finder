//puxando os Elementos da UI
const button = document.querySelector('#button'), 
      nomePlaneta = document.querySelector('#card-title'), 
      population = document.querySelector('#pop'), 
      climate = document.querySelector('#clim'), 
      terrain = document.querySelector('#ter'),
      movies = document.querySelector('#movies'),
      url = 'https://swapi.co/api/planets/';

let num = 2; //Tendo problemas de autorização com o primeiro planeta, utilizei as infos dele hardcoded no html e iniciei a pesquisa pelo segundo

//Adicionando EventListener ao Botão
button.addEventListener('click', fetchPlanet);

//Função fetchPlanet
function fetchPlanet(){
  let planetUrl = url + num;
  axios.get(planetUrl).then(function(res){
    if(res.status === 200){
      num ++;
      updateUI(res.data);
    }
  });
  
}

//Atualizando a UI
function updateUI(data){
  nomePlaneta.innerHTML = data.name;
  population.innerHTML = data.population;
  climate.innerHTML = data.climate;
  terrain.innerHTML = data.terrain;
  movies.innerHTML = data.films.length;
}