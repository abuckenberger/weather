// YOUR SCRIPTS GO HERE

//go get the weather 


$.simpleWeather({
 location: 'los angeles',
 unit: 'f', 
 success: function(weather){
   console.log(weather);
   
   $('.temp').text(weather.temp);
   $('.city').text(weather.city);
   $('.state').text(weather.region);
   $('.image img').attr('src',      weather.image);
   
   //future weather day 1
  $('.forecast figure:nth-child(1) img').attr('src', weather.forecast[0].image);
   
   //future weather caption day 1
   
   $('.forecast figure:nth-child(1) figcaption').text(weather.forecast[0].text);
   
 },
 error: function(error){
   console.log('can i have the wifi plz');
 }
  
});



