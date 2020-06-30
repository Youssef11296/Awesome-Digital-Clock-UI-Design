const clock = () => {
    let day = new Date();
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    let session = 'am';

    if(h >= 12){
        h = h - 12;
        session = 'pm';
    }
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    let hour = document.getElementById('hr');
    let minute = document.getElementById('mn');
    let second = document.getElementById('sc');
    let ampm = document.getElementById('ampm');

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    ampm.innerHTML = session;
}
clock();
setInterval(clock, 1000);