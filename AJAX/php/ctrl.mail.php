<?php

  if(ISSET($_REQUEST['send'])) {

    require_once 'mail.class.php';

    switch ($_REQUEST['send']) {
      case 'versturen':
        $mail = new mail($_POST['name'], $_POST['mail'], $_POST['subject'], $_POST['message']);
        $mail->sendMail();
        break;

      default:
        # code...
        break;
    }
  }

?>
