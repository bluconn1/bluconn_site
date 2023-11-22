<?php

require("../lib/connect.php");
$obj=new connect();
session_start();
if(empty($_SESSION['admin_email']))
{
    header("location:index.php");
}
$res=$obj->allAboutText();

if(isset($_POST['update']))
{
    $id=$_POST['id'];
    $text1=$_POST['text1'];
    $text2=$_POST['text2'];
    $text3=$_POST['text3'];
    $text4=$_POST['text4'];
    $u=$obj->updateAboutText($id,$text1,$text2,$text3,$text4);
    header("location:aboutText.php?stat=1");
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
    <?php
    if(isset($_GET['stat']))
    {
    ?>
    <script>alert("Updated Successfully !!");</script>
    <?php
    }
    ?>
    <div class="wrapper">
        <!-- Sidebar  -->
        <?php include("nav.php");?>

        <!-- Page Content  -->
        <div id="content">

        <?php
        include("header.php");
        ?>

            <div class="m-4">
                <h5 class="py-4">About Page Text Content </h5>
                <div class="row d_table">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Text 1</th>
                                <th>Text 2</th>
                                <th>Text 3</th>
                                <th>Text 4</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            while($a=mysqli_fetch_array($res))
                            {
                            ?>
                                <tr>
                                    <td><?php echo $a['id'];?></td>
                                    <td><?php echo $a['text1'];?></td>
                                    <td><?php echo $a['text2'];?></td>
                                    <td><?php echo $a['text3'];?></td>
                                    <td><?php echo $a['text4'];?></td>
                                    <td><a href="?editid=<?php echo $a['id'];?>" class="btn btn-success"><i class="fas fa-edit"></i></a></td>
                                </tr>
                            <?php
                            }
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        
        <?php
        if(isset($_GET['editid']))
        {
            $r=$obj->getAboutText($_GET['editid']);
            $b=mysqli_fetch_array($r);
        ?>
        <div id="myModal" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <form action="" method="post" enctype="multipart/form-data">
                        <div class="modal-header">
                            <h5 class="modal-title">Edit <i class="fas fa-edit"></i></h5>
                            <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <input type="hidden" name="id" value="<?php echo $b['id'];?>">
                                <div class="col-12 px-4 ">
                                    <label class="form-label"><strong>Text 1 :</strong></label>
                                    <textarea name="text1" class="form-control" rows="1"><?php echo $b['text1'];?></textarea>
                                </div>
                                <div class="col-12 px-4 ">
                                    <label class="form-label"><strong>Text 2 :</strong></label>
                                    <textarea name="text2" class="form-control" rows="1"><?php echo $b['text2'];?></textarea>
                                </div>
                        
                                <div class="col-12 px-4 ">
                                    <label class="form-label"><strong>Text 3 :</strong></label>
                                    <textarea name="text3" class="form-control" rows="1"><?php echo $b['text3'];?></textarea>
                                </div>
                                <div class="col-12 px-4 ">
                                    <label class="form-label"><strong>Text 4 :</strong></label>
                                    <textarea name="text4" class="form-control" rows="1"><?php echo $b['text4'];?></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" name="update" class="btn btn-success">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
    <?php
        }
    ?>
</body>
<script>
    $(document).ready(function () {

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    });

    <?php
        if (isset($_GET['editid'])) {
        ?>
            $(document).ready(function () {
                $("#myModal").modal('show');
            });
        <?php
        }
        ?>

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