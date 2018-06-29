function text(){

    if (document.getElementById("text").className == "textUp"){

        document.getElementById("text").className = "textDown";

    }
    else{
        document.getElementById("text").className = "textUp";
    }

}

function picture(){

    if (document.getElementById("picture").className == "pictureUp"){

        document.getElementById("picture").className = "pictureDown";

    }
    else{
        document.getElementById("picture").className = "pictureUp";
    }

}

function quote(){

    if (document.getElementById("quote").className == "quoteUp"){

        document.getElementById("quote").className = "quoteDown";

    }
    else{
        document.getElementById("quote").className = "quoteUp";
    }

}

function link(){

    if (document.getElementById("link").className == "linkUp"){

        document.getElementById("link").className = "linkDown";

    }
    else{
        document.getElementById("link").className = "linkUp";
    }

}

function chat(){

    if (document.getElementById("chat").className == "chatUp"){

        document.getElementById("chat").className = "chatDown";

    }
    else{
        document.getElementById("chat").className = "chatUp";
    }

}

function music(){

    if (document.getElementById("music").className == "musicUp"){

        document.getElementById("music").className = "musicDown";

    }
    else{
        document.getElementById("music").className = "musicUp";
    }

}

function video(){

    if (document.getElementById("video").className == "videoUp"){

        document.getElementById("video").className = "videoDown";

    }
    else{
        document.getElementById("video").className = "videoUp";
    }

}

function ask(){

    if (document.getElementById("ask").className == "askUp"){

        document.getElementById("ask").className = "askDown";

    }
    else{
        document.getElementById("ask").className = "askUp";
    }
}

function save(){

    var text = document.getElementById("text").className == "textDown";
    var picture = document.getElementById("picture").className == "pictureDown";
    var quote = document.getElementById("quote").className == "quoteDown";
    var link = document.getElementById("link").className == "linkDown";
    var chat = document.getElementById("chat").className == "chatDown";
    var music = document.getElementById("music").className == "musicDown";
    var video = document.getElementById("video").className == "videoDown";
    var ask = document.getElementById("ask").className == "askDown";
    
    chrome.storage.sync.set({
        postSettings: {
            textVal: text,
            picVal: picture,
            quoteVal: quote,
            linkVal: link,
            chatVal: chat,
            musicVal: music,
            vidVal: video,
            askVal: ask
        }
    },
    function(){

        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
        status.textContent = '';
        }, 750);
        var myurl = "https://www.tumblr.com/dashboard";
        var currenturl = "";
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            currenturl = tabs[0].url;

            if (myurl == currenturl){

                chrome.tabs.reload()
            }
        });
    });
}

function getOptions(){

    chrome.storage.sync.get(
        ["postSettings"],
        function(items){

            items = items.postSettings;

            if (items.textVal == false){
                document.getElementById("text").className = "textUp";
            }
            else{
                document.getElementById("text").className = "textDown";
            }

            if (items.picVal == false){
                document.getElementById("picture").className = "pictureUp";
            }
            else{
                document.getElementById("picture").className = "pictureDown";
            }

            if(items.quoteVal == false){
                document.getElementById("quote").className = "quoteUp";
            }
            else{
                document.getElementById("quote").className = "quoteDown";
            }

            if(items.linkVal == false){
                document.getElementById("link").className = "linkUp";
            }
            else{
                document.getElementById("link").className = "linkDown";
            }

            if(items.chatVal == false){
                document.getElementById("chat").className = "chatUp";
            }
            else{
                document.getElementById("chat").className = "chatDown";
            }

            if(items.musicVal == false){
                document.getElementById("music").className = "musicUp";
            }
            else{
                document.getElementById("music").className = "musicDown";
            }

            if(items.vidVal == false){
                document.getElementById("video").className = "videoUp";
            }
            else{
                document.getElementById("video").className = "videoDown";
            }

            if(items.askVal == false){
                document.getElementById("ask").className = "askUp";
            }
            else{
                document.getElementById("ask").className = "askDown";
            }
        }
    );
}


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('text').addEventListener('click', text);
  document.getElementById('picture').addEventListener('click', picture);
  document.getElementById('quote').addEventListener('click', quote);
  document.getElementById('link').addEventListener('click', link);
  document.getElementById('chat').addEventListener('click', chat);
  document.getElementById('music').addEventListener('click', music);
  document.getElementById('video').addEventListener('click', video);
  document.getElementById('ask').addEventListener('click', ask);
  document.getElementById('save').addEventListener('click', save);
  getOptions()
});
