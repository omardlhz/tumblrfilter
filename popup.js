function save(){

    var text = document.getElementById("text").classList.contains("disabled");
    var picture = document.getElementById("picture").classList.contains("disabled");
    var quote = document.getElementById("quote").classList.contains("disabled");
    var link = document.getElementById("link").classList.contains("disabled");
    var chat = document.getElementById("chat").classList.contains("disabled");
    var music = document.getElementById("music").classList.contains("disabled");
    var video = document.getElementById("video").classList.contains("disabled");
    var ask = document.getElementById("ask").classList.contains("disabled");
    
    chrome.storage.sync.set({
        postSettings: {
            text: text,
            picture: picture,
            quote: quote,
            link: link,
            chat: chat,
            music: music,
            video: video,
            ask: ask
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

            for(id in items){

                if(!items[id]){

                    document.getElementById(id).classList.remove("disabled");
                }
                else{

                    document.getElementById(id).classList.add("disabled");
                }
            }
        }
    );
}

function toggleSetting(e){

    if(e.target.classList.contains("disabled")){

        e.target.classList.remove("disabled");
    }
    else{
        e.target.classList.add("disabled");
    }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('text').addEventListener('click', toggleSetting);
  document.getElementById('picture').addEventListener('click', toggleSetting);
  document.getElementById('quote').addEventListener('click', toggleSetting);
  document.getElementById('link').addEventListener('click', toggleSetting);
  document.getElementById('chat').addEventListener('click', toggleSetting);
  document.getElementById('music').addEventListener('click', toggleSetting);
  document.getElementById('video').addEventListener('click', toggleSetting);
  document.getElementById('ask').addEventListener('click', toggleSetting);
  document.getElementById('save').addEventListener('click', save);
  getOptions()
});
