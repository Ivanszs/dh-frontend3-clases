function hora() {
    document.getElementById("root").innerHTML =
      "<div><h1>Soy un h1</h1><h2>Soy un h2 y son las " +
      new Date().toLocaleTimeString() +
      ".</h2></div>";
  }
  
  setInterval(hora, 1000);