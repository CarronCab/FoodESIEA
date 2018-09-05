
const places = [
  'Chez Marwan',
  'Poulet braise',
];

 function Places(name){
  this.name=name; 
 }

// define variables that reference elements on our page
const dreamsList = document.getElementById('places');
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements['place'];

// a helper function that creates a list item for a given dream
const appendNewDream = function(place) {
  
}

// iterate through every dream and add it to our page
places.forEach( function(place) {
  appendNewDream(place);
});

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = function(event) {
  // stop our form submission from refreshing the page
  event.preventDefault();
  
  // get dream value and add it to the list
  places.push(dreamInput.value);
  appendNewDream(dreamInput.value);
  Vue.set(app.places,app.places.length,dreamInput.value);
  
  // reset form 
  dreamInput.value = '';
  dreamInput.focus();
  

};

var app = new Vue({
	el: '#search',
	data: {
		test: 'test',
		gridColumns: ['Restaurants'],
    places: [],
    rates:['1','0']
  },
  
  created: function(){
    this.places.push(new Places('test'))
    
    for(var i = 0 ; i <places.length ; i++) {
      Vue.set(this.places,i,places[i]);
		}
  }  

})
