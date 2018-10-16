function openTab(evt, name) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabs__content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tabs__tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}

var defaultClick = document.querySelector("._default");

if (defaultClick) {
  defaultClick.click();
}
