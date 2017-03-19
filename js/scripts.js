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
$('aside figure:nth-child(1) h2').text(weather.forecast[0].day); 
$('aside figure:nth-child(1) img').attr('src', weather.forecast[0].image);
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
        $('aside').addClass('stormsaside');
      }
      else if (weather.code >= 5 && weather.code <=10){
        $('aside').addClass('snowrainaside');
      }
     else if (weather.code >= 11 && weather.code <=12){
        $('aside').addClass('showersaside');
      }

     else if (weather.code >= 13 && weather.code <=18){
        $('aside').addClass('sleetaside');
      }
     else if (weather.code >= 19 && weather.code <=23){
        $('aside').addClass('hazeaside');
      }

     else if (weather.code >= 24 && weather.code <=26){
        $('aside').addClass('cloudsaside');
      }
     else if (weather.code >= 27 && weather.code <=30){
        $('aside').addClass('sunsoutaside');
      }


     else if (weather.code >= 31 ){
        $('aside').addClass('clearaside');
      }

     else if (weather.code >= 32 && weather.code <=34){
        $('aside').addClass('sunnyaside');
      }

     else if (weather.code >= 36 ){
        $('aside').addClass('hotaside');
      }

     else if (weather.code >= 37 && weather.code <=40){
        $('aside').addClass('thunderaside');
      }

     else if (weather.code >= 41 && weather.code <=43){
        $('aside').addClass('snowstormaside');
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




