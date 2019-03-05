<?php
    $name = $_POST['name'];
    $company = $_POST['company'];
    $user_email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $email_from = 'ricksondm18@gmail.com';
    $email_subject = 'New contact form submission!';
    $email_body = "Name: $name.\n"
                    "Company: $company\n"
                    "Email: $user_email\n"
                    "Phone: $phone\n"
                    "Message: $message\n";
    $to = "ricksondsilva12@gmail.com";
    $headers = "From: $email_from \r\n"    
    $headers = "Reply-To: $user_email";

    mail($to, $email_subject, $email_body, $headers);
    header("Location: ..\html\contact.html");
    


?>