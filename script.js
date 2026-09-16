function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const text = `Hello Ibrahim Khan LLC, my name is ${name}. ${message}`;
  window.open(`https://wa.me/923463052653?text=${encodeURIComponent(text)}`, "_blank");
}

document.getElementById("year").textContent = new Date().getFullYear();
