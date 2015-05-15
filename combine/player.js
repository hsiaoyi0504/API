/*
	  var playElemnent=[];
	  for(i=0;i<maxSearch;i++){
		  playElemnent[i]=document.createElement('div');
		//  playElemnent[i].setAttribute("id","player"+i);
		  playElemnent[i].id="player"+i;
	  }
*/
// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
	  
	  var player=[];
      function onYouTubeIframeAPIReady() {
		for(i=0;i<maxSearch*4;i++){ 
			player[i] = new YT.Player('player'+i, {
			height: '195',
			width: '320',
			videoId: '',
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
			});
		}
      }

      // 4. The API will call this function when the video player is ready.
	  
      function onPlayerReady(event) {
//        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
	  function update(){
				for(i=0;i<maxSearch*4;i++){
					player[i].loadVideoById(youtubeSearchResult[i]);
					player[i].cueVideoById(youtubeSearchResult[i]);
					player[i].stopVideo();
				}
	  }