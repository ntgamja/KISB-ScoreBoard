const menu = document.getElementById("menubtn");
const modal = document.getElementById("modalWrap");
const closeBtn = document.getElementById("closeBtn");


// menu modal 작동
menu.addEventListener("click",(e)=>{
    modal.style.display = "block";
});

closeBtn.addEventListener("click",(e)=>{
    modal.style.display = "none";
});



const setting = document.getElementById("settingbtn");
const reset = document.getElementById("resetbtn");
const swtich = document.getElementById("switchbtn");
const help = document.getElementById("helpbtn");



// setting modal 동작
const settingModal = document.getElementById("settingModalWrap")
const settingModalCloseBtn=document.getElementById("settingModalCloseBtn")

setting.addEventListener("click",(e)=>{
    settingModal.style.display = "block";
});

settingModalCloseBtn.addEventListener("click",(e)=>{
    settingModal.style.display = "none";
});


// help modal 동작
const helpModal=document.getElementById("helpModalWrap")
const helpModalCloseBtn=document.getElementById("helpModalCloseBtn")

help.addEventListener("click",(e)=>{
    helpModal.style.display = "block";
});

helpModalCloseBtn.addEventListener("click",(e)=>{
    helpModal.style.display = "none";
});



//reset 동작
reset.addEventListener("click",(e)=>{
    hscore = 0;
    ascore = 0;
    document.getElementById("lscore").innerHTML = hscore;
    document.getElementById("rscore").innerHTML = ascore;
    document.getElementById("leftname").value = null;
    document.getElementById("rightname").value = null;
    time = 0;
    min = 0;
    sec = 0;
    timergo = false;
    timeset = false;
    document.getElementById("time").innerHTML = "00:00";
    document.getElementById("timeInput").value = null;
})


//switch 동작
swtich.addEventListener("click",(e)=>{
    var temp = hscore;
    hscore = ascore;
    ascore = temp;
    temp = document.getElementById("leftname").value;
    document.getElementById("leftname").value =
    document.getElementById("rightname").value;
    document.getElementById("rightname").value = temp;
    document.getElementById("lscore").innerHTML = hscore;
    document.getElementById("rscore").innerHTML = ascore;
})




//점수 동작//////////////////////////////////////////////////
const lscore = document.getElementById("lscore");
const rscore = document.getElementById("rscore");

var hscore = 0;
var ascore = 0;

document.addEventListener("keyup", (e) => {
      if (e.key === "q") {
        hscore = hscore + 1;
        document.getElementById("lscore").innerHTML = hscore;
      } else if (e.key === "a") {
        hscore = hscore - 1;
        if (hscore < 0) {
          hscore = 0;
        }
        document.getElementById("lscore").innerHTML = hscore;
      } else if (e.key === "y") {
        ascore = ascore + 1;
        document.getElementById("rscore").innerHTML = ascore;
      } else if (e.key === "h") {
        ascore = ascore - 1;
        if (ascore < 0) {
          ascore = 0;
        }
        document.getElementById("rscore").innerHTML = ascore;
      } 
  });


//타이머 동작///////////////////
//1단계 시간 설정
const submit=document.getElementById("submit")
const setmin=document.getElementById("minInput")
const setsec=document.getElementById("secInput")

var settime=0


submit.addEventListener("click",(e)=>{
settime=Number(setmin.value)*60+Number(setsec.value)
})

//2단계 작동
var timergo = false;

const pause = document.getElementById("pause")

document.addEventListener("keyup",(e)=>{
    if (e.key === "s" && !timergo && timeset) {
        timergo = true;
        pause.style.display="none"
      } else if (e.key === "p" && timergo) {
        timergo = false;
        pause.style.display="block"
      }
    }
)

var min=0
var sec=0



submit.addEventListener("click",(e)=>{
    min = Number(setmin.value);
    sec = Number(setsec.value);
    console.log(min,sec)
    if (min < 10 && sec > 10) {
        document.getElementById("time").innerHTML = "0" + min + ":" + sec;
    } else if (min < 10 && sec < 10) {
        document.getElementById("time").innerHTML ="0" + min + ":" + "0" + sec;
    } else if (min > 10 && sec < 10) {
        document.getElementById("time").innerHTML = min + ":" + "0" + sec;
    } else if (min < 10 && sec == 10) {
        document.getElementById("time").innerHTML = "0" + min + ":" + sec;
    } else if (min == 10 && sec == 0) {
        document.getElementById("time").innerHTML = min + ":" + "0" + sec;
    } else document.getElementById("time").innerHTML = min + ":" + sec;
    timeset = true;
    })
    timergo=false


  
  
setInterval(()=>{
    console.log(timergo)
    console.log(min+":"+sec)
    if (timergo===true){
        if (min == 0 && sec == 0) {
            clearInterval(myVar);
            timergo = false;
            timeset = false;
            document.getElementById("time").innerHTML = "00:00";
        } else if (sec == 0) {
            min = min - 1;
            sec = 59;
            if (min < 10) {
            document.getElementById("time").innerHTML = "0" + min + ":" + sec;
            } else document.getElementById("time").innerHTML = min + ":" + sec;
        } else {
            sec = sec - 1;
            if (min < 10 && sec > 10) {
            document.getElementById("time").innerHTML = "0" + min + ":" + sec;
            } else if (min < 10 && sec < 10) {
            document.getElementById("time").innerHTML = "0" + min + ":" + "0" + sec;
            } else if (min > 10 && sec < 10) {
            document.getElementById("time").innerHTML = min + ":" + "0" + sec;
            } else if (min < 10 && sec == 10) {
            document.getElementById("time").innerHTML = "0" + min + ":" + sec;
            } else if (min == 10 && sec == 0) {
            document.getElementById("time").innerHTML = min + ":" + "0" + sec;
            } else document.getElementById("time").innerHTML = min + ":" + sec;
        }
    } else if (timergo===false){

    }
}, 1000)
    



  








