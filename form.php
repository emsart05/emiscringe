<?php
    if(isset($_POST['submit']))
    {
        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $email = $_POST['email'];
        $username = $_POST['username'];
        $password = $_POST['password'];

        //database details. You have created these details in the third step. Use your own.
        $host = "localhost";
        $username = "emiscringe";
        $password = "874ef497";
        $dbname = "emiscringe";

        //create connection
        $con = mysqli_connect($host, $username, $password, $dbname);
        //check connection if it is working or not
        if (!$con)
        {
            die("Connection failed!" . mysqli_connect_error());
        }
        //This below line is a code to Send form entries to database
        $sql = "INSERT INTO sign_up_entries (id, email_fld, fname_fld, lname_fld, username_fld, password_fld) VALUES ('0', '$email', '$fname', '$lname', '$username', '$password')";
        //fire query to save entries and check it with if statement
        $rs = mysqli_query($con, $sql);
        if($rs)
        {
            echo "<style>
            body {
                background-color: rgb(197, 253, 211);
            }
            div {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
            #return {
                color: green;
                font-family: Arial, Helvetica, sans-serif;
                position: fixed;
                top: 325px;
                font-size: 30px;
            }
            </style>
            <div>
            <a href='projects.html' id='return'>Return to 'projects' page</a>
            </div>";
        }
        
        //connection closed.
        mysqli_close($con);
    }
?>