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
  var loader = $("loader").style;
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
  $("title").innerHTML = title;
}
function validateMail() {
  // Checks if everything is filled in
  var name = $("nameSender").value;
  var email = $("emailSender").value;
  var subject = $("subject").value;
  var message = $("message").value;

  if (name != "" && email != "" && subject != "" && message != "") {
    // If everything is filled in
    return(true);
  }
  else {
    alert("Je bent iets vergeten");
    return(false);
  }
}
function sendMail() {
  var validation = validateMail();

  if (validation == true) {
    var name = $("nameSender").value;
    var mail = $("emailSender").value;
    var subject = $("subject").value;
    var message = $("message").value;
    // Email values

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        loader("false");
        clearMailForm();
        $("mailstatus").innerHTML = this.responseText;
      }
      else {
        loader("true");
      }
    };
    // contains te post values
    var postParameters = "send=versturen&name=" + name + "&mail=" + mail + "&subject=" + subject + "&message=" + message;
    xhttp.open("POST", "php/ctrl.mail.php?send=versturen", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(postParameters);
    }

    else if (validation == false) {
      alert("Je bent iets vergeten");
    }
  }
  function clearMailForm() {
    // Clears every input form the contact form
    $("nameSender").value = "";
    $("emailSender").value = "";
    $("subject").value = "";
    $("message").value = "";
  }
    function checkValueExists(element) {
    // This function check if the value has a value
    // If it doen't have one we set "" as value
    element = $(element);
    if (element.value != null) {
      return(element.value);
    }
    else {
      return("NULL");
    }
  }
function loadItem(fileLocation) {
  // This function performs a AJAX REQUEST for specific items that needs to be replaced or loaded in ONCE
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
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
  $("content").innerHTML = result.responseText;
}
function showYear() {
  // This function display the year on the footer
  var currentYear = new Date();
  currentYear = currentYear.getFullYear();
  $('footer').innerHTML += "<time>" + currentYear + "</time>";
}
function $(element) {
  // Selects a ID
  element = document.getElementById(element);
  return(element);
}
