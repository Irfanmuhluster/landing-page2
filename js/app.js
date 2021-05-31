if (matchMedia) {

    const mq2 = window.matchMedia("(min-width: 899px)");
    mq2.addListener(WidthChange2);
    WidthChange2(mq2);
  }
    
    function WidthChange2(mq2) {
        if (mq2.matches) {
          window.onscroll = function() {
            var scroll = document.body.scrollTop;
            console.log(scroll);
      
            if (document.documentElement.scrollTop) {
              document.getElementById("navbar-header").classList.add("navbar-sticky");
              document.getElementById("navbar-header").classList.add("navbar-light");
              document.getElementById("navbar-header").classList.remove("navbar-fixed");
              document.getElementById("navbar-header").classList.remove("navbar-dark");
  
              // console.log(scroll);
            } else {
              document.getElementById("navbar-header").classList.remove("navbar-light");
              document.getElementById("navbar-header").classList.remove("navbar-sticky");
              document.getElementById("navbar-header").classList.add("navbar-dark");
              document.getElementById("navbar-header").classList.add("navbar-fixed");
              
            }
          }
        }
    }
  
  