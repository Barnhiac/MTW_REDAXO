<?php

    ini_set("smtp_port","25");
    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["nachricht"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Da gabs einen Fehler. Versuchen Sie es nochmal.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "alex.c.barnhill@gmail.com";

        // Set the email subject.
        $subject = "Eine neue Nachricht von $name";

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Nachricht:\n$message\n";

        // Build the email headers.
        $email_headers = "Von: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Vielen Dank! Ihre Nachricht wurde versandt.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oh nein! Ihre nachricht wurde nicht versandt.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Da gab's einen Fehler. Versuchen Sie es nochmal.";
    }

?>