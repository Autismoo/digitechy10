function switchTest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("ajaxswitchcontent").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "switchContent.txt", true);
    xhttp.send();
  }

  function switchBackTest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("ajaxswitchcontent").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "switchBackContent.txt", true);
    xhttp.send();
  }
