<?php

require("../lib/connect.php");
$obj=new connect();
session_start();
if(empty($_SESSION['admin_email']))
{
    header("location:index.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link rel="shortcut icon" href="../assets/img/logo/browser.png" type="image/x-icon">
    <link rel="stylesheet" href="assets/css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body>
    <div class="wrapper">
        <!-- Sidebar  -->
        <?php include("nav.php");?>

        <!-- Page Content  -->
        <div id="content">

        <?php
        include("header.php");
        ?>

            <div class="m-4">
                <h5 class="py-4">Dashboard <i class="fas fa-chalkboard"></i></h5>
                <div class="row">
                    <div class="card col-md-4 col-lg-3">
                        <a class="card1" href="#">
                            <p> Home Page</p>
                            
                            <div class="go-corner" href="#">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                        </a>
                    </div>
                    <div class="card col-md-4 col-lg-3">
                        <a class="card1" href="#">
                            <p> About Us Page</p>
                            
                            <div class="go-corner" href="#">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                        </a>
                    </div>
                    <div class="card col-md-4 col-lg-3">
                        <a class="card1" href="#">
                            <p> Contact Us Page</p>
                            
                            <div class="go-corner" href="#">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                        </a>
                    </div>
                    <div class="card col-md-4 col-lg-3">
                        <a class="card1" href="#">
                            <p> Products Page</p>
                            
                            <div class="go-corner" href="#">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                        </a>
                    </div>
                    <div class="card col-md-4 col-lg-3">
                        <a class="card1" href="#">
                            <p> Solution Page</p>
                            
                            <div class="go-corner" href="#">
                            <div class="go-arrow">
                                →
                            </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        
</body>
<script>
    $(document).ready(function () {

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    });
        function previewImage(event) {
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var previewImg = document.getElementById('previewImg');
                    previewImg.src = e.target.result;
                };
                reader.readAsDataURL(input.files[0]);
            }
        }
</script>

</html>