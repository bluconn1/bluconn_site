<?php
class connect{
    private $host="localhost";
    private $user="root";
    private $pwd="";
    private $db="bluconn";
    private $con;

    function __construct() 
    {
        $this->con=mysqli_connect($this->host,$this->user,$this->pwd);
        mysqli_select_db($this->con,$this->db) or die("Problem in connection");
    }
    function checkAdmin($email,$pwd)
    {
        $sql="SELECT * FROM admin_log WHERE email='$email' AND pwd='$pwd'";
        $res=mysqli_query($this->con,$sql);
        $c=mysqli_num_rows($res);
        return $c;
    }
    function allHomeText()
    {
        $sql="SELECT * FROM home_text";
        $res=mysqli_query($this->con,$sql);
        return $res;
    }
    function getHomeText($id)
    {
        $sql="SELECT * FROM home_text WHERE id='$id'";
        $res=mysqli_query($this->con,$sql);
        return $res;
    }
    function updateHomeText($id,$text1,$text2,$text3,$text4)
    {
        $sql = "UPDATE home_text SET 
            text1 = ?,
            text2 = ?,
            text3 = ?,
            text4 = ?
            WHERE id = ?";

        $stmt = mysqli_prepare($this->con, $sql);
        mysqli_stmt_bind_param($stmt, 'ssssi', $text1, $text2, $text3, $text4, $id);
        $res = mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);
        return $res;
    }
    function allHomeImg()
    {
        $sql="SELECT * FROM home_img";
        $res=mysqli_query($this->con,$sql);
        return $res;
    }
    function getHomeImg($id)
    {
        $sql="SELECT * FROM home_img WHERE id='$id'";
        $res=mysqli_query($this->con,$sql);
        return $res;
    }
    function updateHomeImg($id,$img)
    {
        $sql = "UPDATE home_img SET 
            img = ?
            WHERE id = ?";

        $stmt = mysqli_prepare($this->con, $sql);
        mysqli_stmt_bind_param($stmt, 'si', $img, $id);
        $res = mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);
        return $res;
    }
}
?>