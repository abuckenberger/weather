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
   
 },
 error: function(error){
   console.log('can i have the wifi');
 }
  
});


