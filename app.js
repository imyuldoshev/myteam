const openModal = document.querySelector(".header_menu");
const modalWrapper = document.querySelector(".modal_wrapper");
const modal = document.querySelector(".header_modal");
const closeModal = document.querySelector(".modal_close");
const pageHeader = document.querySelector(".header > .container");
const main = document.querySelector("main");
const modalFocusableSelector = 'a[href], button:not([disabled])';

function getModalFocusableElements() {
  return Array.from(modal.querySelectorAll(modalFocusableSelector));
}

function closeNavigation() {
  modal.style.right = "-100%";
  modalWrapper.style.transform = "translateX(100%)";
  modalWrapper.setAttribute("aria-hidden", "true");
  modalWrapper.inert = true;
  openModal.setAttribute("aria-expanded", "false");
  pageHeader.inert = false;
  main.inert = false;
  openModal.focus();
}

function openNavigation() {
  modalWrapper.style.transform = "translateX(0)";
  modal.style.right = "0";
  modalWrapper.inert = false;
  modalWrapper.setAttribute("aria-hidden", "false");
  openModal.setAttribute("aria-expanded", "true");
  pageHeader.inert = true;
  main.inert = true;
  closeModal.focus();
}

openModal.addEventListener("click", openNavigation);
closeModal.addEventListener("click", closeNavigation);

modalWrapper.addEventListener("click", (e) => {
  if (e.target === modalWrapper) {
    closeNavigation();
  }
});

modalWrapper.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    e.preventDefault();
    closeNavigation();
    return;
  }

  if (e.key !== "Tab") {
    return;
  }

  const focusableElements = getModalFocusableElements();
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (e.shiftKey && document.activeElement === firstElement) {
    e.preventDefault();
    lastElement.focus();
  } else if (!e.shiftKey && document.activeElement === lastElement) {
    e.preventDefault();
    firstElement.focus();
  }
});
