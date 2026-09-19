const menu = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-dialog]").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.dialog).showModal();
  });
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.querySelector(".close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});

document.getElementById("year").textContent = String(new Date().getFullYear());
