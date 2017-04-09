<?php

  if(ISSET($_REQUEST['send'])) {

    require_once 'mail.class.php';

    switch ($_REQUEST['send']) {
      case 'versturen':
        $mail = new mail($_POST['name'], $_POST['mail'], $_POST['subject'], $_POST['message']);
        $validateMail = $mail->validateMailAdress($_POST['mail']);
        if ($validateMail == true) {
          $mail->sendMail();
          echo "
          <h3>Uw bericht is verzonden</h3>
          ";
        }
        else {
          echo "<h3>Geen geldig mail adress</h3>";
        }

        break;

      default:
        # code...
        break;
    }
  }

?>
