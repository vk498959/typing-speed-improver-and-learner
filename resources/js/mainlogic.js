//important variable
var content = document.getElementById("content");
var type = document.getElementById("typing");
var time = document.getElementById("time");
var speed = document.getElementById("speed");
var tfetch = "";
var typed = "";
var wrong = "";
var t = 0;
var flag = 1;
var numchar = 0;
//to generate the random number
function rand() {
    return (Math.floor(Math.random() * a.length))
}
//to start up when candidate start typing
function onstart() {
    setInterval(() => {
        t++;
        time.innerHTML = "Time:- "+Math.floor(t/60)+":"+Math.floor(t%60);
        speed.innerHTML = Math.floor((numchar / 5) / (t / 60))+" WPM";

    }, 1000);


}
//when candidate press the key for typing
document.addEventListener("keydown", (e) => {
    numchar++;

    if (e.key == "Enter") {
        if (flag == 1) {
            onstart();
            flag = 0;
        }
        tfetch = a[rand()];
        typed = type.value;
        content.innerHTML = tfetch;
        type.value = "";
    }


});


