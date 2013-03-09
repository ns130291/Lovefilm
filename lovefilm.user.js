// ==UserScript==
// @name 		Lovefilm Lights Out
// @description		Licht aus für Lovefilm
// @include		http://www.lovefilm.de/film/*
// ==/UserScript==

var buttonparent = document.getElementById("product-summary");
var buttonlist = buttonparent.childNodes;

for(var i = 0; i < buttonlist.length; i++){
    if(buttonlist[i].className == "cta-buttons cf"){
        var tmp = document.createElement('div');
        tmp.innerHTML = '<li><a id="nsvb-lights-out" title="Licht aus" style="cursor: pointer;" class="add-to-watchlist">Licht aus</a></li>';
        var button = tmp.childNodes[0];
        button.addEventListener("click", function(){
            alert("---");
            var tmp2 = document.createElement('div');
            tmp2.innerHTML = '<div id="nsvb-background" style="background-color: rgba(5, 5, 5, 0.90); position: fixed; width: 100%; height: 100%; z-index: 1;"><span id="nsvb-close-button" style="color: white; font-size: 20px; padding: 10px; cursor: pointer;">x</span></div>';
            var background = tmp2.childNodes[0];
            document.insertBefore(background, document.body.childNodes[0]);
        }, false);
        buttonlist[i].appendChild(button);
    }
}

