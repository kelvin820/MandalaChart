const trigger = document.querySelector(".creator-credit");
const dialog = document.querySelector("#creatorDialog");

trigger.addEventListener("click", () => dialog.showModal());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
