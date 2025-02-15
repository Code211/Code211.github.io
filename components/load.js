function load() {
  const nav = new XMLHttpRequest();
  nav.open("GET", "../components/navbar.html", true);

  nav.onload = function () {
    if (nav.status === 200) {
      document.getElementById("navbar").innerHTML = nav.responseText;
    }
  };
  nav.send();

  const foot = new XMLHttpRequest();
  foot.open("GET", "../components/footer.html", true);

  foot.onload = function () {
    if (foot.status === 200) {
      document.getElementById("footer").innerHTML = foot.responseText;
    }
  };
  foot.send();
}
window.onload = load;
