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

var keyword2 = new Array("BMW", "101", "fuck", "Volvo","新垣結衣",  "小新", "Volvo");
function searchNews(){
keywordDB.fetchKeywords(function(keywords){
    for(var k=0; k<keywords.length; k++){
        keyword2[k]= keywords[k].text;
    }
});
}

    
    google.load('search', '1');

    var searchnum = -1;
    
    google.setOnLoadCallback(OnLoad1);
    function OnLoad1() {  
      // Create a search control
      var searchControl = new google.search.SearchControl();    
      // create a searcher options object
      // web search, open, alternate root
      var options = new google.search.SearcherOptions();
      options.setExpandMode(google.search.SearchControl.EXPAND_MODE_OPEN);
      var options2 = new google.search.SearcherOptions();
      options2.setExpandMode(google.search.SearchControl.EXPAND_MODE_OPEN);
      options2.setRoot(document.getElementById("root"));
      // Add in a full set of searchers
      var localSearch = new google.search.LocalSearch();
      searchControl.addSearcher(localSearch);
      searchControl.addSearcher(new google.search.ImageSearch(),options);
      
      // Set the Local Search center point
      localSearch.setCenterPoint("Taiwan");

      // create a drawOptions object
      var drawOptions = new google.search.DrawOptions();
      // tell the searcher to draw itself in linear mode
      drawOptions.setDrawMode(google.search.SearchControl.DRAW_MODE_LINEAR);
      drawOptions.setSearchFormRoot(document.getElementById("searchForm"));//no


      searchControl.draw(document.getElementById("searchcontrol"), drawOptions);  
      
      searchControl.setSearchCompleteCallback(this, this.MyKeepHandler2);
      searchnum ++;
      // execute an inital search
      searchControl.execute(keyword2[searchnum]);

      
      
    } 
    


    function MyKeepHandler2(sc, searcher) {
      // record the search result 
    if (searcher.results && searcher.results.length > 0) {
      idx = 0;
    url = [];
    for (var i=0; i<searcher.results.length; i++) {
    // unescapedUrl is the pic url
    url[i] = searcher.results[i].unescapedUrl;
    } 
    }
    
    if(searchnum==0)
    {
    document.getElementById("demo1").innerHTML=keyword2[searchnum];
    // set the pic to the html frame
    picture1=document.getElementById("pic1")
    picture1.src=url[0];
    // this changes the href value<br>
    document.getElementById("result1").href = url[0];

    picture2=document.getElementById("pic2")
    picture2.src=url[1];
    document.getElementById("result2").href = url[1];

    picture3=document.getElementById("pic3")
    picture3.src=url[2];
    document.getElementById("result3").href = url[2];

    picture4=document.getElementById("pic4")
    picture4.src=url[3];
    document.getElementById("result4").href = url[3];

    }
    if (searchnum==1)
    {
    document.getElementById("demo2").innerHTML=keyword2[searchnum];
    // set the pic to the html frame
    picture5=document.getElementById("pic5")
    picture5.src=url[0];
    // this changes the href value<br>
    document.getElementById("result5").href = url[0];

    picture6=document.getElementById("pic6")
    picture6.src=url[1];
    document.getElementById("result6").href = url[1];

    picture7=document.getElementById("pic7")
    picture7.src=url[2];
    document.getElementById("result7").href = url[2];

    picture8=document.getElementById("pic8")
    picture8.src=url[3];
    document.getElementById("result8").href = url[3];
    }
    if (searchnum==2)
    {
    document.getElementById("demo3").innerHTML=keyword2[searchnum];
    // set the pic to the html frame
    picture9=document.getElementById("pic9")
    picture9.src=url[0];
    // this changes the href value<br>
    document.getElementById("result9").href = url[0];

    picture10=document.getElementById("pic10")
    picture10.src=url[1];
    document.getElementById("result10").href = url[1];

    picture11=document.getElementById("pic11")
    picture11.src=url[2];
    document.getElementById("result11").href = url[2];

    picture12=document.getElementById("pic12")
    picture12.src=url[3];
    document.getElementById("result12").href = url[3];
    }
    if (searchnum==3)
    {
    document.getElementById("demo4").innerHTML=keyword2[searchnum];
    // set the pic to the html frame
    picture13=document.getElementById("pic13")
    picture13.src=url[0];
    // this changes the href value<br>
    document.getElementById("result13").href = url[0];

    picture14=document.getElementById("pic14")
    picture14.src=url[1];
    document.getElementById("result14").href = url[1];

    picture15=document.getElementById("pic15")
    picture15.src=url[2];
    document.getElementById("result15").href = url[2];

    picture16=document.getElementById("pic16")
    picture16.src=url[3];
    document.getElementById("result16").href = url[3];
    }

  

     }    
   


    
     google.setOnLoadCallback(OnLoad1);