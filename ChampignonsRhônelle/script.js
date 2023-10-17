window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    
    document.querySelector(".navbar").style.marginTop = "-110px";
  } else {
   
    document.querySelector(".navbar").style.marginTop = "-8px";
  }
};
