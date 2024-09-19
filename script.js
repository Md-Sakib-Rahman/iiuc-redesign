


function openMenu(evt, menuName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("menu-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("menu-tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  function openNewsmenu(evt, menuName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("news-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("news-tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // To ensure one tab is open by default
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.menu-tablinks').click();
    document.querySelector('.news-tablinks').click();
  });
  



  // -------------------- number counter -------------------

let valueDisplays= document.querySelectorAll(".num");
let interval=2000;
valueDisplays.forEach((element)=>{
  let startValue = 0 ;
  let endValue= parseInt(element.getAttribute('data-val'));
  let duration = Math.floor(interval/endValue)
  let counter = setInterval(function(){
    startValue+=1;
    element.textContent=startValue;
    if(startValue==endValue){
      clearInterval(counter);
    }
  }, duration);
})
  