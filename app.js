const openModal = document.querySelector(".header_menu");
const modalWrapper = document.querySelector(".modal_wrapper");
const modal = document.querySelector(".header_modal");
const closeModal = document.querySelector(".modal_close");

openModal.addEventListener("click", () => {
  modalWrapper.style.transform = "translateX(0)";
  modal.style.right = "0";
});

closeModal.addEventListener("click", () => {
  modal.style.right = "-100%";
  modalWrapper.style.transform = "translateX(100%)";
});

modalWrapper.addEventListener("click", (e) => {
  if (e.target === modalWrapper) {
    modal.style.right = "-100%";
    modalWrapper.style.transform = "translateX(100%)";
  }
});
