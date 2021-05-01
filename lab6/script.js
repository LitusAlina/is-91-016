
function FillData() {
    const place = 'Riesenradplatz 1, 1020 Wien, Австрия';
    
    const options = `q=${encodeURIComponent(place)}&key=6ed0bb7751b1436284678f8bff60c9a5`;
    const requestURL = `https://api.opencagedata.com/geocode/v1/json?${options}`;

    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      let place_json = request.response;
      showPlace(place_json);
    }

    function showPlace(jsonObj) {
      let geometryLat = document.createElement('p');
      let geometryLng = document.createElement('p');
      let city = document.createElement('p');
      let country = document.createElement('p');
      let politicalUnion = document.createElement('p');
      let lat = document.createElement('p');
      let lng = document.createElement('p');
      let time = document.createElement('p');

      geometryLat.textContent = 'Geometry Latitude: ' + jsonObj.results[0].geometry.lat;
      document.querySelector('main').append(geometryLat);
      geometryLng.textContent = 'Geometry Longitude: ' + jsonObj.results[0].geometry.lng;
      document.querySelector('main').append(geometryLng);
      city.textContent = 'City: ' + jsonObj.results[0].components.city;
      document.querySelector('main').append(city);
      country.textContent = 'Country: ' + jsonObj.results[0].components.country;
      document.querySelector('main').append(country);
      politicalUnion.textContent = 'Political Union: ' + jsonObj.results[0].components.political_union;
      document.querySelector('main').append(politicalUnion);
      lat.textContent = 'Latitude: ' + jsonObj.results[0].annotations.DMS.lat;
      document.querySelector('main').append(lat);
      lng.textContent = 'Longitude: ' + jsonObj.results[0].annotations.DMS.lng;
      document.querySelector('main').append(lng);
      time.textContent = 'Time: ' + jsonObj.timestamp.created_http;
      document.querySelector('main').append(time);

    }
  }
  
 
