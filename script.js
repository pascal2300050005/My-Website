function updateClock(){
    const now=new Date()
    
    const h=String(now.getHours()).padStart(2, '0');
    const m=String(now.getMinutes()).padStart(2, '0');
    const s=String(now.getSeconds()).padStart(2, '0');
    const jam=`${h}:${m}:${s}`;
    document.getElementById('clock').innerText=jam;
    const hour = now.getHours();
    let greeting = "";
    if (hour >= 0 && hour < 4) {
        greeting = "Midnight";
    } else if (hour >= 4 && hour < 6) {
        greeting = "Dawn";
    } else if (hour >= 6 && hour < 12) {
        greeting = "Good Morning";
    } else if (hour >= 12 && hour < 15) {
        greeting = "Good Afternoon";
    } else if (hour >= 15 && hour < 18) {
        greeting = "Good Evening";
    } else {
        greeting = "Good Night";
    }
    document.getElementById('ket').innerHTML = greeting;
}
setInterval(updateClock, 1000);
