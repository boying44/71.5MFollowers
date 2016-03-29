//facebook likes /twitter followers (in millions)
//order
var candidates = ["Trump", "Clinton", "Carson", "Sanders", "Cruz", "Rubio", "Christie", "Fiorina", "Bush", "Kasich"]

var facebook = [6.7,3.0,5.2,3.5,2.0,1.4,0.17,0.56,0.34,0.28];
var twitter = [7.3,5.8,1.2,1.8,0.99,1.3,0.12,0.67,0.52,0.26];
//youtube subscribers(in ten thousands)
var youtube = [4.81,4.25,1.69,11.51,4.08,2.25,0.13,0.20,0.48,0.25];
//instagram followers(in hundred thousands)
var instagram = [13.00,10.00,2.84,11.00,1.15,1.11,0.30,0.05,0.59,0.25];
//Subreddit subscribers......(in ten thousands)
var reddit = [8.26,0.91,0.022,21.66,0.13,0.10,0.009,0.003,0.016,0.095];

//photos
var photos = ["trump.png", "clinton.png", "carson.png", "sanders.png", "cruz.png", "rubio.png", "christie.png", "fiorina.png", "bush.png", "kasich.png"]

//starts off by displaying facebook
var media = "facebook";

//headers
var dict = [];
dict.push({
    key:   "facebook",
    value: "Amount of Facebook likes (in millions)"
});
dict.push({
    key:   "twitter",
    value: "Amount of Twitter followers (in millions)"
});
dict.push({
    key:   "youtube",
    value: "Amount of Youtube Subscribers (in ten thousands)"
});
dict.push({
    key:   "instagram",
    value: "Amount of Instagram followers (in hundred thousands)"
});
dict.push({
    key:   "reddit",
    value: "Amount of subreddit subscribers (in ten thousands)"
});

var findheader = function(){
    var counter = 0;
    while(counter < dict.length){
	if(media == dict[counter].key){
	    d3.selectAll("h2")
		.text(dict[counter].value)
	}
	counter ++;
    }
}

//Changes the media that the page displays
var change = function(e){
    //get the ID of button from event and change media to it
    media = e.srcElement.innerHTML.toString().toLowerCase();
    findheader();
    d3.select("#graph")
	.selectAll("div")
	.data(window[media]).transition().duration(2000)
	.style("width",function(d){
	    return scale(d) + "px";
	})
    
};


var isdemocrat = function(name){
    return democrats.indexof(name) != -1;
};

var scale = d3.scale.linear()
    .domain([0,d3.max(window[media]) + 1])
    .range([0,420]);

var load = function(){
    d3.select("#graph").append("a")
	.selectAll("div")
	.data(window[media])
        .enter().append("div")
	.style("width", function(d) {return scale(d) + "px"})
	.style("background-color",
	       function(d,i) {
		   if (candidates[i] == "Sanders" || candidates[i] == "Clinton") {
		       return "blue";
		   }
		   else {
		       return "red";
		   }
	       })
        //.text(function(d,i) {return candidates[i]})
	.append('img')
	.attr("src", function(d,i) {return "static/" + photos[i]})
        .style("width", "50px")
        .style("height", "50px")

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
