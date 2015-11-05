function text(){

    if (document.getElementById("text").className == "textUp"){

        document.getElementById("text").classList.add("textDown");
        document.getElementById("text").classList.remove("textUp");

    }
    else{
        document.getElementById("text").classList.add("textUp");
        document.getElementById("text").classList.remove("textDown");
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

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#text').addEventListener('click', text);
  document.querySelector('#picture').addEventListener('click', picture);
  document.querySelector('#quote').addEventListener('click', quote);
  document.querySelector('#link').addEventListener('click', link);
  document.querySelector('#chat').addEventListener('click', chat);
  document.querySelector('#music').addEventListener('click', music);
  document.querySelector('#video').addEventListener('click', video);
  document.querySelector('#ask').addEventListener('click', ask);
});