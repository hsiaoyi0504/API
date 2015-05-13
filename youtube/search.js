// After the API loads, call a function to enable the search box.
var maxSearch=10;
var youtubeSearchResult=[];
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    maxResults: maxSearch ,
    order: 'date',
	type: 'video',
	publishedAfter: '1970-01-01T00:00:00Z'
  });

  request.execute(function(response) {
   // var str = JSON.stringify(response.result);
	for(i=0;i<maxSearch;i++){
		youtubeSearchResult[i]=response.result.items[i].id.videoId;
//		$('#search-container').html('<pre>' + response.result.items[i].id.videoId + '</pre>'+'<br>');
	}
//	$('#search-container').html('<pre>' + response.result.items[1].id.videoId + '</pre>');
	update();
  });
} 
document.getElementById("search-button").addEventListener("click",search);