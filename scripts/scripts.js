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
 function getTimeStamp() {
            let now = new Date();
            return ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear() + " " + now.getHours() + ':'
            + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now.getSeconds()) : (now.getSeconds())));
             }
 function setTime() {
        document.getElementById('time submitted').value = getTimeStamp();
        }
           
        });   

});




