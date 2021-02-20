var upWork = document.querySelector("#up-arrow-work");
var downWork = document.querySelector("#down-arrow-work");
var workTime = document.querySelector("#work-time");

var upPause = document.querySelector("#up-arrow-pause");
var downPause = document.querySelector("#down-arrow-pause");
var pauseTime = document.querySelector("#pause-time");

var upSeason = document.querySelector("#up-arrow-season");
var downSeason = document.querySelector("#down-arrow-season");
var seasonTime = document.querySelector("#season-time");

var i = workTime.textContent;
var z = pauseTime.textContent;
var x = seasonTime.textContent;




upWorkConter();
downWorkConter();
upPauseCounter();
downPauseCounter();
upSeasonCounter();
downSeasonCounter();


function upWorkConter (){
    upWork.addEventListener("click", function(){
        console.log(i);
        i++;
        workTime.textContent = i;
    })
}

function downWorkConter (){
    downWork.addEventListener("click", function(){
        console.log(i);
        i--;
        workTime.textContent = i;
    })
}
function upPauseCounter(){
    upPause.addEventListener("click", function(){
        console.log(z);
        z++;
        pauseTime.textContent = z;
    })
}
function downPauseCounter(){
    downPause.addEventListener("click", function(){
        console.log(z);
        z--;
        pauseTime.textContent = z;
    })
}
function upSeasonCounter(){
    upSeason.addEventListener("click",function(){
        console.log(x);
        x++;
        seasonTime.textContent= x;
    } )
}
function downSeasonCounter(){
    downSeason.addEventListener("click", function(){
        console.log(x);
        x--;
        seasonTime.textContent= x;
    })
}