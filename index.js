function toggleBox(box) {
  let details = box.querySelector(".details");
  let isActive = box.classList.contains("active");

  document.querySelectorAll(".box").forEach((b) => {
    b.classList.remove("active");
    b.style.backgroundColor = "#ffffff";
    b.querySelector(".details").style.display = "none";
  });

  if (!isActive) {
    box.classList.add("active");
    box.style.backgroundColor = "#f5f5f5";
    details.style.display = "flex";
    details.style.flexDirection = "column";
    details.style.gap = "10px";
  }
}
