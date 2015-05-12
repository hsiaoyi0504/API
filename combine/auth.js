/*
      function appendResults(text) {
        var results = document.getElementById('results');
        results.appendChild(document.createElement('P'));
        results.appendChild(document.createTextNode(text));
      }

      function makeRequest() {
        var request = gapi.client.urlshortener.url.get({
          'shortUrl': 'https://goo.gl/fbsS'
        });
        request.then(function(response) {
          appendResults(response.result.longUrl);
        }, function(reason) {
          console.log('Error: ' + reason.result.error.message);
        });
      }
*/
      function init() {
        gapi.client.setApiKey('AIzaSyDcqu-CRXywm1rWEhnODpzuXRJIknjXm_I');
        gapi.client.load('youtube', 'v3',function() {
			handleAPILoaded();
		});
      }