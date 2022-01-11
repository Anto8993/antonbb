
      let raf, x, y;

      document.addEventListener("pointermove", (e) => {
        x = (e.x / window.innerWidth - 0.5) * 2;
        y = (e.y / window.innerWidth - 0.5) * 2;
        raf = raf || requestAnimationFrame(setPos);
      });

      function setPos() {
        document.documentElement.style.setProperty("--x", x);
        document.documentElement.style.setProperty("--y", y);
        raf = null;
      }


//Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
    mybutton.style.cursor = "pointer";
    
   
  } 
  else {
    mybutton.style.opacity = "0";
    mybutton.style.cursor = "default";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.body.scrollIntoView({
    behavior: "smooth",
  });
}
