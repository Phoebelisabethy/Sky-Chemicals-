<?php

  if (isset($_POST['submit'])) {


    $name= $_Post['name'];
    $visitor_email= $_Post['email'];
    $phone= $_Post['phone'];
    $company_name= $_Post['company_name'];
    $job_title= $_Post['job_title'];
    $message= $_Post['message'];


    $email_from = 'info@pericide.co.uk';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                     "User Email: $visitor_email.\n"
                       "User Phone: $phone.\n"
                         "User Company Name: $company_name.\n"
                           "User Job Title: $job_title.\n"
                             "User Message: $message.\n"


    $to = "pericidelimited@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("location: index.html");


}

?>
