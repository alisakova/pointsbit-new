var openLinks = document.querySelectorAll("._open-popup-block");
var openWalletBtn = document.querySelector("._open-wallet-btn");
var openWalletBlock = document.querySelector("._open-wallet");
var popupBlocks = document.querySelectorAll("._popup-block");
var closePopup = document.querySelectorAll("._close-popup-block");
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

  closePopup.forEach(function(item) {
    item.addEventListener("click", function(e) {
      e.stopPropagation();
      var parent = e.target.closest("._popup-block-container");
      var popupBlock = parent.querySelector("._popup-block");
      popupBlock.classList.remove("active");
    });
  });
}

if (openWalletBtn && openWalletBlock) {
  openWalletBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    openWalletBlock.classList.add("active");
  });
};

body.addEventListener("click", function(e) {
  e.stopPropagation();
  popupBlocks.forEach(function(item) {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
  if (openWalletBlock.classList.contains("active")) {
    openWalletBlock.classList.remove("active");
  }
});

body.addEventListener("touchstart", function(e) {
  e.stopPropagation();
  popupBlocks.forEach(function(item) {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
});

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
  });
});


$(document).ready(function() {
  if ($(".select").length) {
    $(".select").select2({
      minimumResultsForSearch: Infinity
    });
  }
});
