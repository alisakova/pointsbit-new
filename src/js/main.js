var openLinks = document.querySelectorAll("._open-popup-block");
var popupBlocks = document.querySelectorAll("._popup-block");
var body = document.querySelector("body");

if (openLinks && popupBlocks) {
  openLinks.forEach(function(item) {
    item.addEventListener("click", function(e) {
      e.stopPropagation();
      var parent = e.target.closest("._popup-block-container");
      var popupBlock = parent.querySelector("._popup-block");
      popupBlock.classList.toggle("active");
      popupBlocks.forEach(function(item) {
        if (item.classList.contains("active") && item !== popupBlock) {
          item.classList.remove("active");
        }
      });
    });
  });

  popupBlocks.forEach(function(item) {
    item.addEventListener("click", function(e) {
      e.stopPropagation();
    });
    item.addEventListener("touchstart", function(e) {
      e.stopPropagation();
    });
  });
}

body.addEventListener("click", function(e) {
  e.stopPropagation();
  popupBlocks.forEach(function(item) {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
});

body.addEventListener("touchstart", function(e) {
  e.stopPropagation();
  popupBlocks.forEach(function(item) {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
});

var accordion = document.querySelectorAll(".accordion");

for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var actionsBtn = document.querySelectorAll(".block__action-btn");

actionsBtn.forEach(function(btn) {
  btn.addEventListener("click", function() {
    actionsBtn.forEach(function(elem) {
      if (elem.classList.contains("block__action-btn_active")) {
        elem.classList.remove("block__action-btn_active");
      }
    });
    btn.classList.add("block__action-btn_active");
  });
});

var dataBtns = document.querySelectorAll(".data");
var dataIndicators = document.querySelectorAll(".data__indicator");
var forms = document.querySelectorAll('._form');
var cardForm = document.querySelector('._card');
var addressForm = document.querySelector('._address');

dataBtns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    dataBtns.forEach(function(elem) {
      var elemName = elem.querySelector('.data__name');
      if (elemName.classList.contains("data__name_active")) {
        elemName.classList.remove("data__name_active");
      }
    });
    forms.forEach(function(elem) {
      if (elem.classList.contains("active")) {
        elem.classList.remove("active");
      }
    });
    dataIndicators.forEach(function(elem) {
      if (elem.classList.contains("data__indicator_active")) {
        elem.classList.remove("data__indicator_active");
      }
    });
    var parent = e.target.closest(".data");
    var indicator = parent.querySelector(".data__indicator");
    var elemName = btn.querySelector('.data__name');
    elemName.classList.add("data__name_active");
    indicator.classList.add("data__indicator_active");
    if (elemName.classList.contains("_card-btn")) {
      cardForm.classList.add('active');
    }
    if (elemName.classList.contains("_address-btn")) {
      addressForm.classList.add('active');
    }
  });
});


$(document).ready(function() {
  if ($(".select").length) {
    $(".select").select2({
      minimumResultsForSearch: Infinity
    });
  }
});
