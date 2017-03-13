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
    changeTitle("index.html");
  }
  else {
    link = link.replace("#", "");
    link += ".html";
    getRequest(link);
    changeTitle(link);
  }
}
function changeTitle(title) {
  // This function change the Title for the page
  var titleArray = [];
  titleArray["mywork.html"] = "My work";
  titleArray["aboutme.html"] = "About me";
  titleArray['contact.html'] = "Contact"
  titleArray["index.html"] = "Portfolio - Peter Romijn";
  // Here we store the title of every page
  if (titleArray[title] == "Portfolio - Peter Romijn") {
    title = "Portfolio - Peter Romijn";
  }
  else {
    title = "Portfolio - Peter Romijn - " + titleArray[title];
  }
  displayTitle(title);
}
function displayTitle(title) {
  // Dispay the title we changed
  document.getElementById("title").innerHTML = title;
}
function loadItem(elementID, file) {
  // This function prforms a AJAX REQUEST for specific items that needs to be replaced or loaded in ONCE
  console.log(elementID);
  console.log(file);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(elementID).innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", file, true);
  xhttp.send();
}
