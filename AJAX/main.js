function getRequest(request) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", request, true);
  xhttp.send();
}
function deepLink() {
  // When a vistor goes back we set them back to the good page
  var link = window.location.hash;
  if (link == '') {
    // If we dont need to do anything
    getRequest('index.html');
  }
  else {
    link = link.replace("#", "");
    link += ".html";
    getRequest(link);
  }
}
