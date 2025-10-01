function updateClock(){
    const now=new Date()
    
    const h=String(now.getHours()).padStart(2, '0');
    const m=String(now.getMinutes()).padStart(2, '0');
    const s=String(now.getSeconds()).padStart(2, '0');
    const jam=`${h}:${m}:${s}`;
    document.getElementById('clock').innerText=jam;
    if(h==00 && h<4){
        document.getElementById('ket').innerHTML="Midnight";
    }else if(h==4 && h<6){
        document.getElementById('ket').innerHTML="Dawn";
    }else if(h==6 && h<12){
        document.getElementById('ket').innerHTML="Good Morning";
    }else if(h==12 && h<15){
        document.getElementById('ket').innerHTML="Good Afternoon";
    }else if(h==15 && h<18){
        document.getElementById('ket').innerHTML="Good Evening";
    }else {
        document.getElementById('ket').innerHTML="Good Night";
    }
}
setInterval(updateClock, 1000);