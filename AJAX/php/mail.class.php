<?php

  class mail {
    // Created to send emails
    var $nameSender;
    var $mailSender;
    var $subject;
    var $message;
    // Mail properties for the sender

    private var $mailAdress;
    private var $mailPassword;
    private var $host;
    // Login credentials to send a mail

    function __construct($nameSender, $mailSender, $subject, $message) {
      // Runs a launche
      $this->nameSender = $this->checkInput($nameSender);
      $this->mailSender = $this->checkInput($mailSender);
      $this->subject = $this->checkInput($subject);
      $this->message = $this->checkInput($message);
    }
    public function sendMail() {
      // Sends te mail away
    }

    private function checkInput($data) {
      // Use this function to check if any input is dangourse for us
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      $data = htmlentities($data);
      return ($data);

    }
  }
?>
