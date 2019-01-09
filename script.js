var shows = [
  {
    venue: 'Zoo Bar',
    date: '1/19/2019',
    jsDate: new Date(2019, 1, 19),
    link: 'www.facebook.com'
  },
  {
    venue: "Duffy's Tavern",
    date: '2/9/2019',
    jsDate: new Date(2019, 2, 9),
    link: 'www.facebook.com'
  }
]


document.addEventListener("DOMContentLoaded", function(){
  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    var navigation = document.querySelector(".side-navigation");
    if (hamburger.classList.contains('is-active')) {
      navigation.style.width = '200px';
    } else {
      navigation.style.width = '0px';
    }
  });
});
