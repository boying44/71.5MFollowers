//facebook likes /twitter followers (in millions)
//order - Trump, Clinton, Carson, Sanders, Cruz, Rubio, Christie, Fiorina,Bush, Kasich
var facebook = [5.6,2.3,5.1,2.6,1.8,1.3,0.15,0.6,0.4,0.2];
var twitter = [6.1,5.3,1.1,2.7,1.5,1.1,0.4,0.35,0.3,0.1];
//youtube subscribers(in thousands)
var youtube = [43.1,37.2,16.8,92.4,26.2,15.8,1.3,2.0,4.7,1.2];
//instagram followers(in ten thousands)
var instagram = [95.4,78.2,25.9,71.5,8.1,7.9,2.6,0.0,5.2,1.1];
//Subreddit subscribers......(in thousands)
var reddit = [8.9,3.3,0.23,176.8,1.1,0.66,0.09,0.03,0.12,0.2];





var scale = d3.scale.linear()
    .domain([0,d3.max()])
    .range([0,420]);



var load = function(){

}

window.addEventListener('load', load);
var b = document.getElementById('');
