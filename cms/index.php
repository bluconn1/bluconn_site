<?php
require("../lib/connect.php");
$obj=new connect();
if (isset($_POST['login'])) 
{
    $email=$_POST['email'];
    $pwd=$_POST['pwd'];
    if($obj->checkAdmin($email,$pwd))
    {
        session_start();
        $_SESSION['admin_email']=$email;
        header('location:dashboard.php');
    }
    else{
        header('location:index.php?stat=0');
    }
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Admin Login </title>
	<link rel="shortcut icon" href="../assets/img/logo/browser.png" type="image/x-icon">
	<link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet">
	<script src="https://kit.fontawesome.com/a81368914c.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="assets/css/login.css">
</head>

<body>
	<img class="wave" src="assets/img/wave.png">
	<div class="container">
		<div class="img">
			<img src="assets/img/bg.svg">
		</div>
		<div class="login-content">
			<form method="post" action="">
				<img src="assets/img/avatar.svg">
				<h2 class="title">Welcome</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Email Id</h5>
           		   		<input type="email" name="email" class="input">
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	<input type="password" name="pwd" class="input">
            	   </div>
            	</div>
            	<input type="submit" class="btn" value="Login" name="login">
            </form>
        </div>
    </div>
    <?php
    if(isset($_GET['stat']))
    {
    ?>
        <script>alert("* Wrong Email Id or Password !! Please Check your Credentials...");</script>
    <?php
    }
    ?>
</body>
<script>
    const inputs = document.querySelectorAll(".input");


    function addcl(){
        let parent = this.parentNode.parentNode;
        parent.classList.add("focus");
    }

    function remcl(){
        let parent = this.parentNode.parentNode;
        if(this.value == ""){
            parent.classList.remove("focus");
        }
    }


    inputs.forEach(input => {
        input.addEventListener("focus", addcl);
        input.addEventListener("blur", remcl);
    });

</script>
</html>

