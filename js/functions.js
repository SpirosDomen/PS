  function myFunction() {
      var x = document.getElementById("MyNavBar");
      if (x.className === "NavigationBar") {
        x.className += " responsive";
      } else {
        x.className = "NavigationBar";
      }
  }
