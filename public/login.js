
const places = [
  'Chez Marwan',
  'Poulet braise',
];

const rates =[
  '1',
  '2',
];

 function Places(name,rate){
  this.name=name;
  this.rate=rate;
 }

// define variables that reference elements on our page
const dreamsList = document.getElementById('places');
const dreamsForm = document.forms[1];
const dreamInput = dreamsForm.elements['place'];
const delate = document.forms[2];

const ratesList = document.getElementById('rates');
const rateInput = dreamsForm.elements['rate'];
const rowInput = delate.elements['delete'];

// a helper function that creates a list item for a given dream
const appendNewDream = function(place) {
  
}

const appendNewRate = function(rate){
  
}

// iterate through every dream and add it to our page
places.forEach( function(place,rate) {
  appendNewDream(place);
  appendNewRate(rate);
});

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = function(event) {
  
  
  // stop our form submission from refreshing the page
  
  event.preventDefault();

  if (isNaN(dreamInput.value) && rateInput.value != '' && (rateInput.value == '1' || rateInput.value == '2' || rateInput.value == '3' || rateInput.value == '4' || rateInput.value == '5' || rateInput.value == '6' || rateInput.value == '7' || rateInput.value == '8' || rateInput.value == '9' || rateInput.value == '10' || rateInput.value == '0') ){
  // get dream value and add it to the list
  rates.push(rateInput.value);
  places.push(dreamInput.value);
  appendNewDream(dreamInput.value);
  appendNewRate(rateInput.value);
  Vue.set(app.places,app.places.length,dreamInput.value);
  Vue.set(app.rates,app.rates.length,rateInput.value);
    
  console.log(rowInput.value);
    
  // reset form 
  dreamInput.value = '';
  dreamInput.focus();
  rateInput.value= '';
  
  }

};

delate.onsubmit = function(event){
 
  event.preventDefault();
  rates[rowInput.value] = '';
  places[rowInput.value] = '';
  var r=rowInput.value;
  Vue.delete(app.places,r-1);
  Vue.delete(app.rates,r-1);
    
  rowInput.value='';
}
 


var app = new Vue({
	el: '#search',
	data: {
		test: 'test',
		gridColumns: ['Restaurants','Rates'],
    places: [],
    rates:[]
  },
  
  created: function(){
  
    
    for(var i = 0 ; i <places.length ; i++) {
      Vue.set(this.places,i,places[i]);
		}
    
    for(var i = 0 ; i <rates.length ; i++) {
      Vue.set(this.rates,i,rates[i]);
		}
  }  

})
