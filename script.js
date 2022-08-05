
// js reference : CodewithHarry
setInterval(() => {
    d= new Date();
    htime= d.getHours();
    mtime= d.getMinutes();
    stime= d.getSeconds();

    hrotation=30*htime+0.5*mtime;
    mrotation=6*mtime;
    srotation=6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);