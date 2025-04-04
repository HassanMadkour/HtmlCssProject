// function initMap() {
//   const myLatLng = { lat: -25.363, lng: 131.044 };
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: myLatLng,
//   });

//   new google.maps.Marker({
//     position: myLatLng,
//     map,
//     title: "Our-place",
//   });
// }

// window.initMap = initMap;
window.onload = function () {
  // ---------------------------------------slider

  function toggleAnimation() {
    for (var i = 0; i < courses.length; i++) {
      courses[i].classList.toggle("pause-animation");
    }
  }
  var courses = document.getElementsByClassName("course-card");
  var moveFunc = function () {
    toggleAnimation();
    setTimeout(function () {
      toggleAnimation();
    }, 5000);
  };
  setInterval(moveFunc, 5500);

  // ------------------------------------------------

  var listItems = document.querySelector(".navigation > ul").children;
  var sections = document.getElementsByClassName("section");
  var times = document.getElementsByClassName("num-of-timer");

  var startTime = new Date(2025, 0, 1, 0, 0, 0);
  var endTime = new Date(2025, 0, 1, 0, 0, 0);
  endTime.setDate(startTime.getDate() + 365);
  (function remainingTimeFun() {
    remainingTime = endTime.getTime() - new Date().getTime();
    remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    remainingHours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    remainingMinutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    if (remainingTime > 0) {
      times[0].innerHTML = remainingDays;
      times[1].innerHTML = remainingHours;
      times[2].innerHTML = remainingMinutes;
      times[3].innerHTML = remainingSeconds;
      setTimeout(remainingTimeFun, 1000);
    }
  })();

  var tabs = document.getElementsByClassName("tab");
  var tabsDetails = document.getElementsByClassName("tab-details");
  activeOne(0, "selected-tab", tabs);
  activeOne(0, "appear", tabsDetails);

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
      activeOne(i, "selected-tab", tabs);
      activeOne(i, "appear", tabsDetails);
    });
  }

  // ------------------------------------------
  var presentationContent = document.querySelector(".presentation-content");
  var presentationVideoContainer = document.querySelector(
    ".presentation-video-container"
  );
  var heroH2 = document.querySelector(".hero-section .hero-content h2");
  var heroH6 = document.querySelector(".hero-section .hero-content h6");
  var heroButton = document.querySelector(".hero-section .hero-content button");
  if (window.scrollY >= 0) {
    heroH2.style.animation = "fromBottomAnimation 1s ease-in-out forwards";
    heroH6.style.animation = "fromTopAnimation .5s .3s ease-in-out forwards";
    heroButton.style.animation =
      "fromBottomAnimation .5s .6s ease-in-out forwards";
  }
  window.onscroll = function () {
    var scrollPosition = scrollY;

    if (scrollPosition > presentationContent.offsetTop - 400) {
      presentationVideoContainer.style.animation =
        "fromRightAnimation .5s ease-in-out forwards";
      presentationContent.style.animation =
        "fromLeftAnimation .5s ease-in-out forwards";
    }
    for (var i = 0; i < sections.length; i++) {
      if (scrollPosition >= sections[i].offsetTop - 200) {
        activeOne(i, "selected-nav", listItems);
      }
    }
  };
};

function activeOne(index, classStr, elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove(classStr);
    if (i == index) {
      elements[i].classList.add(classStr);
    }
  }
}
