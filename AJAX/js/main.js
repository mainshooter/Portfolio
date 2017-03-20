function deepLink() {
  // When a vistor goes back we set them back to the good page
  var link = window.location.hash;
  if (link == '') {
    // If we dont need to do anything
    loadItem('index-content.html');
    changeTitle("index.html");
    intializeTyper(["I am a programmer" , "Building web applications and websites", "With: HTML, CSS, Javascript, PHP and SQL"], "normal", "text", "false");
  }
  else {
    cancelTyper();
    link = link.replace("#", "");
    link += ".html";
    loadItem(link);
    changeTitle(link);
  }
}
function loader(status) {
  // This function starts the loader
  var loader = document.getElementById('loader').style;
  if (status == "true") {
    // AJAX is loading
    loader.display = "block";
  }
  else if (status == "false") {
    // Ajax is done
    loader.display = "none";
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
function loadItem(fileLocation) {
  // This function prforms a AJAX REQUEST for specific items that needs to be replaced or loaded in ONCE
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // document.getElementById(elementID).innerHTML = this.responseText;
      callBack(this);
      loader("false");
    }
    else {
      loader("true");
    }
  };
  xhttp.open("GET", fileLocation, true);
  xhttp.send();
}
function callBack(result) {
  document.getElementById('content').innerHTML = result.responseText;
}
function showYear() {
  // This function display the year on the footer
  var currentYear = new Date();
  currentYear = currentYear.getFullYear();
  console.log(currentYear);
  document.getElementById('footer').innerHTML += currentYear;
}
