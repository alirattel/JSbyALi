// made by Ali Ratel 
let second = document.getElementById("sc");
let minute = document.getElementById("mn");
let hour = document.getElementById("hr");

setInterval(()=> {    
    let day = new Date();
    let hr = day.getHours() * 30;
    let mn = day.getMinutes() * 6;
    let sc = day.getSeconds() * 6;
    
    hour.style.transform = `rotateZ(${hr/12}deg)`;
    minute.style.transform = `rotateZ(${mn}deg)`;
    second.style.transform = `rotateZ(${sc}deg)`;

    //digital
    let hours = document.getElementById("hour");
    let mins = document.getElementById("min");
    let secs = document.getElementById("sec");
    let ampm = document.getElementById("a-p")
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    if(h > 12){
        h = h - 12;
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hours.innerText = h;
    mins.innerText = m;
    secs.innerText = s;

    let am = (h >=12) ? "PM" : "AM";
    ampm.innerText = am;
})
















// let flag = true;
// function play(){
//     if(flag){
//         let date = new Date();
//         let h = date.getHours();
//         let m = date.getMinutes();
//         let s = date.getSeconds();
//         h = (h<10) ? "0"+h : h;
//         m = (m<10) ? "0"+m : m;
//         s = (s<10) ? "0"+s : s;
//         let time = h+":"+m;
//         document.getElementById("time").innerText = time;
//         document.getElementById("seconds").innerText = ":"+s;
//         document.querySelector(".localtime").innerText = "Local Time";
//         let t = setTimeout(play, 1000);
//     }
// }

// play();

// function us(){
//     document.getElementById("time").style = "color:transparent; background:none;";
//     document.getElementById("seconds").style = "color:transparent;background:none;";
//     document.querySelector(".localtime").style = "color:transparent;background:none;";
//     let date = new Date();
//     date.setMinutes(date.getUTCMinutes()-4*60);
//     let h = date.getUTCHours();
//     let m = date.getUTCMinutes();
//     let s = date.getUTCSeconds();
//     h = (h<10) ? "0"+h : h;
//     m = (m<10) ? "0"+m : m;
//     s = (s<10) ? "0"+s : s;
//     let time = h+":"+m;
//     document.getElementById("us").innerText = time;    
//     document.getElementById("usseconds").innerText = ":"+s;
//     document.querySelector(".usa").innerText = "USA";   
//     let t  = setTimeout(us, 1000);
// }
// function uk(){
//     let date = new Date();
//     date.setMinutes(date.getUTCMinutes());
//     let h = date.getUTCHours();
//     let m = date.getUTCMinutes();
//     let s = date.getUTCSeconds();
//     h = (h<10) ? "0"+h : h;
//     m = (m<10) ? "0"+m : m;
//     s = (s<10) ? "0"+s : s;
//     let time = h+":"+m;   
//     document.getElementById("uk").innerText = time;    
//     document.getElementById("ukseconds").innerText =":"+s;   
//     document.querySelector(".uk").innerText = "UK"   
//     let t  = setTimeout(uk, 1000);
// }