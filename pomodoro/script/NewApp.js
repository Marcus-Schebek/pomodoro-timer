var upWork = document.querySelector("#up-arrow-work");
var downWork = document.querySelector("#down-arrow-work");
var workTime = document.querySelector("#work-time");

var upPause = document.querySelector("#up-arrow-pause");
var downPause = document.querySelector("#down-arrow-pause");
var pauseTime = document.querySelector("#pause-time");

var upSeason = document.querySelector("#up-arrow-season");
var downSeason = document.querySelector("#down-arrow-season");
var seasonTime = document.querySelector("#season-time");



Counter(upWork, workTime);
Counter(upPause, pauseTime);
Counter(upSeason, seasonTime);

Counter(downWork, workTime);
Counter(downPause, pauseTime);
Counter(downSeason, seasonTime);





function Counter(bnt, timer){
    var i = timer.textContent;
    bnt.addEventListener("click", function(){
        if ($(bnt).hasClass("up-arrow")) {
            console.log(i)
            i++;
            timer.textContent = i;
        }
        if($(bnt).hasClass("down-arrow")) {
            console.log(i)
            i--;
            timer.textContent = i;
        }
    })

}
