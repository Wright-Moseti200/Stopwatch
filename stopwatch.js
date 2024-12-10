let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");
let microsecond = document.querySelector(".microseconds")
let button = document.querySelector(".btn1");
let button1 = document.querySelector(".btn2");
let icon = document.querySelectorAll("i");
let interval;
let microseconds = 0;
let seconds = 0;
let minutes = 0;

function playPause()
{
  if (icon[1].classList.contains("fa-play"))
  {
    icon[1].classList.remove("fa-play");
    icon[1].classList.add("fa-pause");
    interval = setInterval(() =>
    {
      if (microseconds < 99)
      {
        microseconds += 1;
        if (microseconds < 10)
        {
          microsecond.innerHTML = "0" + microseconds;
        }
        else
        {
          microsecond.innerHTML = microseconds;
         }
        if (microseconds == 99)
        {
          microseconds = 0;
          seconds += 1;
         }
      }

      if (seconds < 60)
      {  
      if (seconds < 10)
        {
          second.innerHTML = "0" + seconds;
        }
        else
        {
          second.innerHTML = seconds;
         }
        if (seconds == 59)
        {
          seconds = 0;
          minutes += 1;
          if (minutes < 10)
          {
            minute.innerHTML = "0" + minutes;
          }
          else
          {
            minute.innerHTML = minutes;
          }
         }
      }
     },10);
  }
  else if (icon[1].classList.contains("fa-pause"))
  {
icon[1].classList.remove("fa-pause");
    icon[1].classList.add("fa-play");
    clearInterval(interval);
  } 
}

function reset()
{
 microseconds = 0;
 seconds = 0;
 minutes = 0;
  minute.innerHTML = "0"+minutes;
  second.innerHTML = "0" + seconds;
  microsecond.innerHTML = "0" + microseconds;
}

button1.addEventListener("click", playPause);
button.addEventListener("click", reset);