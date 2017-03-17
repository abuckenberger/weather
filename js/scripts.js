// YOUR SCRIPTS GO HERE

//go get the weather 

$.simpleWeather({
 location: 'cheney',
 unit: 'f', 
 success: function(weather){
   console.log(weather);
   
   $('.temp').text(weather.temp);
   $('.city').text(weather.city);
   $('.state').text(weather.region);
   $('.image img').attr('src',      weather.image);
   
   //future weather day 1
  //find day    
//console.log(weather.forecast[0].day);
//displays day
 $('aside figure:nth-child(1) h2').text(weather.forecast[0].day); 

//find image
//console.log(weather.forecast[0].image);
//display image
$('aside figure:nth-child(1) img').attr('src', weather.forecast[0].image);
      
//find conditions
//console.log(weather.forecast[0].text);
//display conditions
$('aside figure:nth-child(1) figcaption').text(weather.forecast[0].text); 
      
//find high temp
//console.log(weather.forecast[0].high);
//display high temp
$('aside figure:nth-child(1) .high').text(weather.forecast[0].high); 
      

//day two      
$('aside figure:nth-child(2) h2').text(weather.forecast[1].day);  
$('aside figure:nth-child(2) img').attr('src', weather.forecast[1].image);
$('aside figure:nth-child(2) figcaption').text(weather.forecast[1].text);
$('aside figure:nth-child(2) .high').text(weather.forecast[1].high); 
//day three     
$('aside figure:nth-child(3) h2').text(weather.forecast[2].day);  
$('aside figure:nth-child(3) img').attr('src', weather.forecast[2].image);
$('aside figure:nth-child(3) figcaption').text(weather.forecast[2].text);
$('aside figure:nth-child(3) .high').text(weather.forecast[2].high); 
//day four     
$('aside figure:nth-child(4) h2').text(weather.forecast[3].day);  
$('aside figure:nth-child(4) img').attr('src', weather.forecast[3].image);
$('aside figure:nth-child(4) figcaption').text(weather.forecast[3].text);
$('aside figure:nth-child(4) .high').text(weather.forecast[3].high); 
//day five     
$('aside figure:nth-child(5) h2').text(weather.forecast[4].day);  
$('aside figure:nth-child(5) img').attr('src', weather.forecast[4].image);
$('aside figure:nth-child(5) figcaption').text(weather.forecast[4].text);
$('aside figure:nth-child(5) .high').text(weather.forecast[4].high);       

      
      
// Entire weather object
console.log(weather);
    },
error: function(error) {
// Show if weather cannot be retreived
    console.log('go outside')
    }
  
  });


//SIDR
$('#sidebar').sidr({
  
  method: 'open'
});

$('#close').sidr({
  
  method:'close'
  
});




