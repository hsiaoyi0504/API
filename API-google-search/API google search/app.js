window.onload = function() { 
  keywordDB.open(refreshKeywords);
  // Get references to the form elements.
  var newKeywordForm = document.getElementById('new-kw-form');
  var newKeywordInput = document.getElementById('new-kw');
  
  newKeywordForm.onsubmit = function() {
    var text = newKeywordInput.value;
    // Check to make sure the text is not blank (or just spaces).
    if (text.replace(/ /g,'') != '') {
      keywordDB.createKeyword(text, function(todo) {
        refreshKeywords();
      });
    }
    newKeywordInput.value = '';
    // Don't send the form.
    return false;
  };
  
}
var searchnum ;
function refreshKeywords() {  
  keywordDB.fetchKeywords(function(keywords) {
    var keywordList = document.getElementById('keywordList');
    keywordList.innerHTML = '';
    
    for(var i = 0; i < keywords.length; i++) {
      var keyword = keywords[i];
      var li = document.createElement('li');
      // Checkbox for deleting keywords
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.className = "keyword-checkbox";
      checkbox.setAttribute("data-id", keyword.timestamp);
      checkbox.addEventListener('click', function(e) {
        var id = parseInt(e.target.getAttribute('data-id'));
        keywordDB.deleteKeyword(id, refreshKeywords);
      });
      li.appendChild(checkbox);
      // Display keyword in span
      var span = document.createElement('span');
      span.innerHTML = keyword.text;
      li.appendChild(span);
      
      keywordList.appendChild(li);

      searchnum=-1;
      
       setTimeout(function(){
      OnLoad1();
      },1000);
      setTimeout(function(){
      OnLoad1();
      },2000);
      setTimeout(function(){
      OnLoad1();
      },3000);
      setTimeout(function(){
      OnLoad1();
      },4000);


    }
  });
  var newsList = document.getElementById("newsList");
  newsList.innerHTML = "";
  searchNews();
  searchYouTube();
}
