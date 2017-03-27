<?php

  if(ISSET($_REQUEST['send'])) {

    require_once 'mail.class.php';

    switch ($_REQUEST['send']) {
      case 'sendMail':
        $mail = new mail($_POST[''], $_POST[''], $_POST[''], $_POST['']);
        $mail->sendMail();
        break;

      default:
        # code...
        break;
    }
  }

?>
