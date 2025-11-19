document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".tab-btn.active").classList.remove("active");
    btn.classList.add("active");

    document.querySelector(".tab-content.active").classList.remove("active");
    document.getElementById(btn.dataset.target).classList.add("active");
  });
});
