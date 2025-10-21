// Hiệu ứng chào mừng khi vào trang
window.addEventListener("load", () => {
  const name = "Vũ Duy Bình";
  console.log(`Xin chào ${name}! ✨ Chúc bạn một ngày tuyệt vời 💪`);
});

// Hiệu ứng click vui nhộn
document.addEventListener("click", (e) => {
  const sparkle = document.createElement("span");
  sparkle.classList.add("sparkle");
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
});