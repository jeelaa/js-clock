const t_sec = document.getElementById('seconds');
const t_min = document.getElementById('minutes');
const t_hour = document.getElementById('hours');
const sec_num = document.querySelector('#seconds span');

const time = new Date();
console.log(time);
setInterval(()=>getdate(), 1000);

function getdate(){
  const time = new Date();
  t_sec.style.transform = "rotate("+time.getSeconds()*6+"deg)";
  t_min.style.transform = "rotate("+time.getMinutes()*6+"deg)";
  // sec_num.innerHTML = time.getSeconds();
  t_hour.style.transform = "rotate("+time.getHours()*6+"deg)";
  console.log(time.getSeconds());
}