function showYouLetter() {
    var x = document.getElementById("youletter");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("meletter").style.display = "none";
      document.getElementById("usletter").style.display = "none";
    } else {
      x.style.display = "none";
    }
  }

function showMeLetter() {
    var x = document.getElementById("meletter");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("usletter").style.display = "none";
      document.getElementById("youletter").style.display = "none";
    } else {
      x.style.display = "none";
    }
  }

function showUsLetter() {
    var x = document.getElementById("usletter");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("meletter").style.display = "none";
      document.getElementById("youletter").style.display = "none";
    } else {
      x.style.display = "none";
    }
  }