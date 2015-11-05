chrome.storage.sync.get({
		textVal: false,
        picVal: false,
        quoteVal: false,
        linkVal: false,
        chatVal: false,
        musicVal: false,
        vidVal: false,
        askVal: false
}, function(items){

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    if(items.picVal == true){
    	$("[class*='post_full is_photo']").hide();
    }
    else{
    	$("[class*='post_full is_photo']").show();
    }
    // ...
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
  //...
});


});