//INDEX PAGE TOP CAROUSEL
$('.top-slider .owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

$(".owl .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  },
});

// slick slider

$('.slider-hero').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
  
});
		
//btnScrollToTop
mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
// marquee
function handleMarquee() {
  const marquee = document.querySelectorAll('.marquee');
  let speed = 1;
  let lastScrollPos = 0;
  let timer;

  marquee.forEach(function (el) {
    // stop animation on mouseenter
    mouseEntered = false;
    document.querySelector('.inner').addEventListener('mouseenter', function () {
      mouseEntered = true;
    })
    document.querySelector('.inner').addEventListener('mouseleave', function () {
      mouseEntered = false
    })

    const container = el.querySelector('.inner');
    const content = el.querySelector('.inner > *');
    //Get total width
    const elWidth = content.offsetWidth;

    //Duplicate content
    let clone = content.cloneNode(true);
    container.appendChild(clone);

    let progress = 1;

    function loop() {
      if (mouseEntered === false) {
        progress = progress - speed;
      }
      if (progress <= elWidth * -1) {
        progress = 0;
      }
      container.style.transform = 'translateX(' + progress + 'px)';
      window.requestAnimationFrame(loop);
    }
    loop();
  });

  function handleSpeedClear() {
    speed = 4;
  }
};

handleMarquee();
// Emi Calculator
function reset() {
  document.getElementById("value1").value = 0;
  document.getElementById("value2").value = 0;
  document.getElementById("value3").value = 0;

  document.getElementById("monthly-interest").innerHTML = " Rs " + 0;
  document.getElementById("monthly-payment").innerHTML = " Rs " + 0;
  document.getElementById("total-repayment").innerHTML = " Rs " + 0;
  document.getElementById("total-interest").innerHTML = " Rs " + 0;
}

function calculation() {

  var loanAmount = document.getElementById("value1").value;
  var interestRate = document.getElementById("value2").value;
  var loanDuration = document.getElementById("value3").value;

  //.......... declarations.............

  var interestPerYear = (loanAmount * interestRate) / 100;
  var monthlyInterest = interestPerYear / 12;


  var monthlyPayment = monthlyInterest + (loanAmount / loanDuration);
  var totalInterestCost = monthlyInterest * loanDuration;
  var totalRepayment = monthlyPayment * loanDuration;

  //----------------monthly interest----------------------

  document.getElementById("monthly-interest").innerHTML = " Rs " + monthlyInterest.toFixed(2);

  //-------------Monthly payment------------

  document.getElementById("monthly-payment").innerHTML = " Rs " + monthlyPayment.toFixed(2);

  //-------------Total repayment-----------

  document.getElementById("total-repayment").innerHTML = " Rs " + totalRepayment.toFixed(2);

  //--------------Total Interest cost----------------

  document.getElementById("total-interest").innerHTML = " Rs " + totalInterestCost.toFixed(2);

}


// NOTICE POP_UP

$(document).ready(function () {
  $("#myModal").modal('show');

});

// FIXED NAVBAR
$(window).scroll(function () {
  if ($(this).scrollTop() > 120) {
    $('.header-wrapper').addClass('fixed');
  } else {
    $('.header-wrapper').removeClass('fixed');
  }
});

