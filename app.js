setTimeout(() => {
  swal({
    title: "Anchal ❤️",
    text: "Kaisa laga surprise? 🤨",
    icon: "success",
    button: "Boht Achha",
  });
}, 15000);
window.addEventListener("mouseover", play);
window.addEventListener("click", play);
function play() {
  document.getElementById("a").play();
}
