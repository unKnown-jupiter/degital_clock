function main() {
    let t = new Date();
    let h = t.getHours();
    let m = t.getMinutes();
    let s = t.getSeconds();
    let x = "AM"; // second clck

    h >= 12 ? x = "PM" : x = "AM"; // second clck

    h >= 12 ? am.innerHTML = "PM" : am.innerHTML = "AM"

    h > 12 ? h = h - 12 : h;

    // for time show 01 format 
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById('h').innerHTML = h;
    document.getElementById('m').innerHTML = m;
    document.getElementById('s').innerHTML = s;


    let time = h + " : " + m + " : " + s + " " + x;
    document.getElementsByTagName('h1')[0].innerHTML = time;
}
setInterval(main, 10);