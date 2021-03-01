const APIKEY = 'd7782201bb6ec407967c7d4cf2841c60';

const url = `https://api.openweathermap.org/data/2.5/weather?zip=10001,us&units=imperial&APPID=d7782201bb6ec407967c7d4cf2841c60`;

// $(document).ready(function() {
//     $.get(url, function( data ) {
//         document.write(data);
//         $( "#result" ).text( data );
//    });
// });

  $(document).ready(function() {
  $("#btnGet").on("click",()=>getData()
  );
  $("#btnClear").on("click",()=>clearData()
  );
  });

// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data));




//   const APIKEY = 'd7782201bb6ec407967c7d4cf2841c60';


//   $(document).ready(function() {
//   $("#btnGet").on("click",()=>getData()
//   );
//   $("#btnClear").on("click",()=>clearData()
//   );
  
 
//  });
//  //94040
 
 
   var getData = function(){
     const url = `https://api.openweathermap.org/data/2.5/weather?zip=${$("#zipCode").val()},us&units=imperial&APPID=d7782201bb6ec407967c7d4cf2841c60`;
   fetch(url)
   .then(response => response.json())
   .then(data => $( "#result" ).text( `${$('#result').text()}${data.name}: ${data.main.temp}`+"\n"));
   };
 





   var clearData = function(){
     $( "#result" ).text(" ");
   };