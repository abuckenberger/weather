// YOUR SCRIPTS GO HERE
/* 
navigator.geolocation.getCurrentPosition(function(position) {
    //load weather using your lat/lng coordinates. See _loadWeather()_ below
    position.coords.latitude+','+position.coords.longitude; 
    // See latitute & longitude. Note, wait a few seconds
    console.log(position.coords.latitude+','+position.coords.longitude);
});
*/
navigator.geolocation.getCurrentPosition(function(position){
	var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
	var latAndLong = latitude + ',' + longitude; 
  console.log(latAndLong);
	return latAndLong;
});

// Get Geo Location
// Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {

   $('.geo').show(); 

} else {
  
  $('.geo').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// On Click, Get Geolocation, Call Weather Function
$('.geo').click( function() {
      
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
});

// Show geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
      $('img').attr('src', weather.image);
        

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look Outside.');
    }
  
  });
    
};

  
//go get the weather 

$.simpleWeather({
 location: 'pasco, wa',
 unit: 'f', 
 success: function(weather){
   console.log(weather);
   
   $('.temp').text(weather.temp);
   $('.city').text(weather.city);
   $('.state').text(weather.region);
   $('i').addClass( 'icon-' + weather.code );
   
//future weather day 1
$('aside figure:nth-child(1) h2').text(weather.forecast[0].day); 
$('aside figure:nth-child(1) i').addClass( 'icon-' + weather.forecast[0].code );
$('aside figure:nth-child(1) figcaption').text(weather.forecast[0].text); 
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
     
//change li color
   
      if (weather.code >= 0 && weather.code <=4){
        $('li').addClass('storms');
      }
      else if (weather.code >= 5 && weather.code <=10){
        $('li').addClass('snowrain');
      }
     else if (weather.code >= 11 && weather.code <=12){
        $('li').addClass('showers');
      }

     else if (weather.code >= 13 && weather.code <=18){
        $('li').addClass('sleet');
      }
     else if (weather.code >= 19 && weather.code <=23){
        $('li').addClass('haze');
      }

     else if (weather.code >= 24 && weather.code <=26){
        $('li').addClass('clouds');
      }
     else if (weather.code >= 27 && weather.code <=30){
        $('li').addClass('sunsout');
      }


     else if (weather.code >= 31 ){
        $('li').addClass('clear');
      }

     else if (weather.code >= 32 && weather.code <=34){
        $('li').addClass('sunny');
      }

     else if (weather.code >= 36 ){
        $('li').addClass('hot');
      }

     else if (weather.code >= 37 && weather.code <=40){
        $('li').addClass('thunder');
      }

     else if (weather.code >= 41 && weather.code <=43){
        $('li').addClass('snowstorm');
      }
     
//aside background

if (weather.code >= 0 && weather.code <=4){
        $('aside, button').addClass('stormsaside');
      }
      else if (weather.code >= 5 && weather.code <=10){
        $('aside, button').addClass('snowrainaside');
      }
     else if (weather.code >= 11 && weather.code <=12){
        $('aside, button').addClass('showersaside');
      }

     else if (weather.code >= 13 && weather.code <=18){
        $('aside, button').addClass('sleetaside');
      }
     else if (weather.code >= 19 && weather.code <=23){
        $('aside, button').addClass('hazeaside');
      }

     else if (weather.code >= 24 && weather.code <=26){
        $('aside, button').addClass('cloudsaside');
      }
     else if (weather.code >= 27 && weather.code <=30){
        $('aside, button').addClass('sunsoutaside');
      }


     else if (weather.code >= 31 ){
        $('aside, button').addClass('clearaside');
      }

     else if (weather.code >= 32 && weather.code <=34){
        $('aside, button').addClass('sunnyaside');
      }

     else if (weather.code >= 36 ){
        $('aside, button').addClass('hotaside');
      }

     else if (weather.code >= 37 && weather.code <=40){
        $('aside, button').addClass('thunderaside');
      }

     else if (weather.code >= 41 && weather.code <=43){
        $('aside, button').addClass('snowstormaside');
      }

      
      
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




