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
var data="basic";
function level(l){
    data=l;
    return(data);
}
//to generate the random number

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
        type.value="";
        async function level(){
            var response=await fetch("http://localhost:8000/api/v1",{
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({"level":data})
            });
            getdata=await response.json()
            console.log(await getdata)
            content.innerHTML=await getdata;
        }
        level();
        
    }


});


