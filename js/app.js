'use strict';

const state ={
  pokemons:null
}


$( _ => {

  //FUNCION DEL MODAL
  $('.modal').modal();

  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

    if (err) { return alert(err.message);}

    state.pokemons = json;



    //FUNCION DEL INPUT SEARCH
    $("#search").on('keypress', (e) => {
        /* OCULTANDO EL CONTENEDOR CON LOS POKEMONES INICIALES */
      $("#section-pokemones").empty();

      const filteredName = filterByPokemon(state.pokemons,$(e.target).val());
      console.log(filteredName);

      //CREANDO EL NUEVO DIV
      const rowNew = $('<div class="row"></div>');
      const colNew = $('<div class="col m2 container-pokemon"></div>');
      const imgNew = $('<img src="assets/img/015.png">');
      const trapecioNew = $('<div class="trapecio"></div>');
      const aPokeballa = $('<a class="waves-effect waves-light" href="#modal"></a>');
      const imgPokebolla = $('<img src="assets/icon/pokeball.png" class="icon pokebolla">');
      const modalNew = $('<div id="modal1" class="modal"></div>');
      const modalContentNew=$('<div class="modal-content"></div>');
      const h4New= $('<h4></h4>');
      const imgModal = $('<img src="assets/icon/pokeball.png" class="icon pokebolla">');
      const divFooterModal = $('<div clas="modal-footer"></div>');
      const aFooter = $('<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">X</a>');
      const aHeart = $('<a class="waves-effect waves-light" href="#modal"></a>');
      const imgHeart = $('<img src="assets/icon/heart.png" class="icon pokebolla">');
      const aData=$('<a class="waves-effect waves-light" href="#modal"></a>');
      const imgData = $('<img src="assets/icon/data.png" class="icon pokebolla">');
      const h5New= $('<h5>'+'Beedrill'+'</h5>');




      aPokeballa.append(imgPokebolla);
      modalNew.append(modalContentNew);
      modalContentNew.append(h4New);
      modalContentNew.append(imgModal);
      divFooterModal.append(aFooter);
      modalNew.append(divFooterModal);
      aHeart.append(imgHeart);
      aData.append(imgData);
      trapecioNew.append(aPokeballa);
      trapecioNew.append(modalNew);
      trapecioNew.append(aHeart);
      trapecioNew.append(aData);
      trapecioNew.append(h5New);
      colNew.append(imgNew);
      colNew.append(trapecioNew);
      rowNew.append(colNew);
      $('#section-pokemones').append(rowNew);
      return $('#section-pokemones');
    });
  });
});
