"use strict";

$(document).ready(()=>{

let bugs = ['Roaches', 'Centipedies', 'Ants', 'Flys', 'Wasps', 'Hornets', 'Bees'];
$("#submit").click(function(){
    console.log(bugs);
       bugs.unshift($("textarea").val());
    });
 $("#submit2").click(function(){
        console.log(bugs);
           bugs.shift($("dead").val());
        });   
});




