var SERVER = "";
var TOKEN = "";

function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    var body = document.getElementById('popup_body');

    /*ytplayer = document.getElementById("myVideo");
    if (typeof ytplayer !== 'undefinded') {
      var currentTime = ytplayer.getCurrentTime();  
      url=url+"?t="+currentTime;
    }*/
    
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
           }
           else if (xmlhttp.status == 400) {
              //alert('There was an error 400');
           }
           else {
               //alert('something else other than 200 was returned');
           }
        }
    };

    var link = SERVER + "?link="+url+"&key=" + urlencode(TOKEN);
    alert("sending to " + link);

    xmlhttp.open("GET", link, true);
    xmlhttp.send();
  });
});
