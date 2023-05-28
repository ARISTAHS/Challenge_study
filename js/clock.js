const clock = document.querySelector("h2#clock");

function getClock(){
  // 현재 시간 담기
  const date = new Date();

  // 날짜,시간,분,초 담기
  const year = String(date.getFullYear());
  const Month = String(date.getMonth()+1);
  const day = String(date.getDate()).padStart(2,"0");
  const hours = String(date.getHours()).padStart(2,"0"); 
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  
  clock.innerHTML = `${year}년 ${Month}월 ${day}일 <br/> 
                    ${hours}h : ${minutes}m : ${seconds}s`;
}

getClock(); //별도 호출을 해줘야 바로 시간 보기 가능.
setInterval(getClock,1000);
