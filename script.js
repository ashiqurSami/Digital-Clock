function getDate(){
    const d=new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day=days[d.getDay()];
    const date =d.getDate();
    const month=months[d.getMonth()];
    const year =d.getFullYear();

    return `${day}, ${date}, ${month}, ${year}`;
}
document.querySelector(".date").innerHTML=getDate();

function getTime(){
    const d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();

    const ap= h>=12 ? "PM" : "AM";
    h=h%12 || 12;
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;

    const time=`${h} : ${m} : ${s} ${ap}`;
    document.querySelector(".time").innerHTML=time;

}

setInterval(getTime,1000);