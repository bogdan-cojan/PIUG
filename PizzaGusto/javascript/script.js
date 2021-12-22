//ScrollTop
$(document).ready(function () {
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
});

//ScrollDown
$(function () {
  $("a[href='#footer']").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});

// Tabbed Menu
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-red";
}
document.getElementById("myLink").click();

//SearchFunctionPizza
function myFunctionPizza() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("Pizza");
  li = ul.getElementsByTagName("h1");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("b")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//SearchFunctionPaste
function myFunctionPaste() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInputPasta");
  filter = input.value.toUpperCase();
  ul = document.getElementById("Pasta");
  li = ul.getElementsByTagName("h1");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("b")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//SearchFunctionStarter
function myFunctionStarter() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInputStarter");
  filter = input.value.toUpperCase();
  ul = document.getElementById("Starter");
  li = ul.getElementsByTagName("h1");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("b")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//Help Button
function HelpButton() {
  document.getElementById("fdm-toggle").addEventListener("click", (event) => {
    document.getElementById("fdm-overlay").classList.toggle("fdm-active");
  });
}
