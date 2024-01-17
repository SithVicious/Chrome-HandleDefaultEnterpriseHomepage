chrome.runtime.onStartup.addListener(function() {
  console.log('chrome browser open');

  var newURL = "http://www.google.com/";
  chrome.tabs.create({ url: newURL });

  sleep(3);

  chrome.windows.getAll({populate:true},function(windows){
    windows.forEach(function(window){
      window.tabs.forEach(function(tab){
        if (tab.url.includes("sharepoint") ) {
          //console.log("Closing:" + tab.id);
          chrome.tabs.remove(tab.id, function() {} )
        }
        
      });
    });
  });
  
})

function sleep (seconds) {
  var start = new Date().getTime();
  while (new Date() < start + seconds*1000) {}
  return 0;
}
