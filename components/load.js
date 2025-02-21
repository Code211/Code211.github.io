function load() {
  // Load Navbar
  fetch("../components/navbar.html")
    .then((response) => {
      if (response.ok) {
        return response.text();
      }
      throw new Error("Navbar failed to load");
    })
    .then((html) => {
      document.getElementById("navbar").innerHTML = html;
    })
    .catch((error) => console.error(error));

  // Load Footer
  fetch("../components/footer.html")
    .then((response) => {
      if (response.ok) {
        return response.text();
      }
      throw new Error("Footer failed to load");
    })
    .then((html) => {
      document.getElementById("footer").innerHTML = html;
    })
    .catch((error) => console.error(error));
}

window.addEventListener("load", load);
