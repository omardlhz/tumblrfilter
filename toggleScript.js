chrome.storage.sync.get(
    ["postSettings"],
    function(items){

        items = items.postSettings;
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        var observer = new MutationObserver(

            function(mutations, observer) {

                // Text Post
                if(items.textVal == true){
                    $("[class*='post_full is_regular']").hide();
                }
                else{
                    $("[class*='post_full is_regular']").show();
                }

                // Photo Posts
                if(items.picVal == true){
                    $("[class*='post_full is_photo']").hide();
                }
                else{
                    $("[class*='post_full is_photo']").show();
                }

                // Quote Posts
                if(items.quoteVal == true){
                    $("[class*='post_full is_quote']").hide();
                }
                else{
                    $("[class*='post_full is_quote']").show();
                }

                // Link Posts
                if(items.linkVal == true){
                    $("[class*='post_full is_link']").hide();
                }
                else{
                    $("[class*='post_full is_link']").show();
                }

                // Chat Posts
                if(items.linkVal == true){
                    $("[class*='post_full is_conversation']").hide();
                }
                else{
                    $("[class*='post_full is_conversation']").show();
                }

                // Audio Posts
                if(items.musicVal == true){
                    $("[class*='post_full is_audio']").hide();
                }
                else{
                    $("[class*='post_full is_audio']").show();
                }

                // Video Posts
                if(items.vidVal == true){
                    $("[class*='post_full is_video']").hide();
                }
                else{
                    $("[class*='post_full is_video']").show();
                }

                // Ask Posts
                if(items.askVal == true){
                    $("[class*='post_full is_note']").hide();
                }
                else{
                    $("[class*='post_full is_note']").show();
                }
            }
        );

        // define what element should be observed by the observer
        // and what types of mutations trigger the callback
        observer.observe(document, {
          subtree: true,
          attributes: true
        });
    }
);