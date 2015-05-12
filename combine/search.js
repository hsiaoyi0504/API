function searchNews(){
keywordDB.fetchKeywords(function(keywords){
    var newsList = document.getElementById("newsList");
    for(var k=0; k<keywords.length; k++){
        var keyword = keywords[k].text;
        var li = document.createElement('li');
        var news = document.createElement('span');
        news.innerHTML = keyword;
        li.appendChild(news);
        newsList.appendChild(li);
        var request =  new XMLHttpRequest();
        var apiSite = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
        var q = keyword+"&hl=true&sort=newest&api-key=";
        var key = "0d8d717467a5942473cbb7a00402c61b:2:65716318";
        var url = apiSite + q + key;
        request.open("GET", url, false);
        request.send(null);
        var result = request.responseText;
        console.log(request.status, request.statusText);
        var obj = JSON.parse(result);
        var count = 5;
        if(obj.response.meta.hits<count) count=obj.response.meta.hits;
        for(var i=0; i<count; i++){
            var li = document.createElement('li');
            var date = obj.response.docs[i].pub_date.substr(0,10);
            var headline;
            if(obj.response.docs[i].headline.highlight!=null)
                headline=obj.response.docs[i].headline.highlight;
            else headline=obj.response.docs[i].headline.main;
            var url = obj.response.docs[i].web_url;
            var type = obj.response.docs[i].type_of_material;
            var news = document.createElement('span');
            news.innerHTML = "<a href="+url+" target=\"_blank\">"+date+"  "+"["+type+"] "+headline+"</a>";
            li.appendChild(news);
            newsList.appendChild(li);
        }
    }
});
}

// After the API loads, call a function to enable the search box.
var maxSearch=12;
var youtubeSearchResult=[];
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}
// Search for a specified string
function searchYouTube() {
  keywordDB.fetchKeywords(function(keywords){
//	for(var k=0; k<keywords.length; k++){
	for(var k=0; k<1; k++){
		var keyword = keywords[k].text;
//		var q = $('#query').val();
		var q=keyword;
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
//				$('#search-container').html('<pre>' + response.result.items[i].id.videoId + '</pre>'+'<br>');
			}
//			$('#search-container').html('<pre>' + response.result.items[1].id.videoId + '</pre>');
			update();
		});
	}
  });
} 
//document.getElementById("search-button").addEventListener("click",searchYouTube);