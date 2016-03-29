//facebook likes /twitter followers (in millions)
//order - Trump, Clinton, Carson, Sanders, Cruz, Rubio, Christie, Fiorina,Bush, Kasich
var facebook = [6.7,3.0,5.2,3.5,2.0,1.4,0.17,0.56,0.34,0.28];
var twitter = [7.3,5.8,1.2,1.8,0.99,1.3,0.12,0.67,0.52,0.26];
//youtube subscribers(in thousands)
var youtube = [48.1,42.5,16.9,115.1,40.8,22.5,1.3,2.0,4.8,2.5];
//instagram followers(in ten thousands)
var instagram = [130.0,100.0,28.4,110.0,11.5,11.1,3.0,0.5,5.9,2.5];
//Subreddit subscribers......(in thousands)
var reddit = [82.6,9.1,0.22,216.6,1.3,1.0,0.09,0.03,0.16,0.95];

//starts off by displaying facebook
var media = "facebook";

//index of candidates
var democrats = ["Clinton", "Sanders"];

//Changes the media that the page displays
var change = function(e){
    //get the ID of button from event and change media to it
    media = e.srcElement.innerHTML.toString().toLowerCase();
};


var isdemocrat = function(name){
    return democrats.indexof(name) != -1;
};
/*
var scale = d3.scale.linear()
    .domain([0,d3.max()])
    .range([0,420]);
*/

var load = function(){
    d3.select(".chart")
	.selectAll("div")
	.data(window[media]);
}

window.addEventListener('load', load);
var fb = document.getElementById('facebook');
var tw = document.getElementById('twitter');
var yt = document.getElementById('youtube');
var ins = document.getElementById('instagram');
var rd = document.getElementById('reddit');
fb.addEventListener("click",change);
tw.addEventListener("click",change);
yt.addEventListener("click",change);
ins.addEventListener("click",change);
rd.addEventListener("click",change);
