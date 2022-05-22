<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <title>MEN'S FASHION</title>
        <meta charset="utf-8"/>
        <meta name="description" content="mens fashion"/>
        <meta name="viewport" content="width=device-width"/>
        <link rel="stylesheet" type="text/css" href="styles/styles.css"/>
        <link rel="stylesheet" type="text/css" href="styles/responsive.css" media="screen and (max-width: 1024px)"/>
        <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png"/>
		<script src="script/slideshow.js"></script>
        <script src="script/responsivemenu.js"></script>
    </head>
    <body>
         <!--header-->
       <header>
        <div class="wrapper clearfix">
        <div class="headercol1">
        <a href="index.html">
         <img id="logo" src="images/mvlogo.png" alt="logo"/>
        </a> 
        <div id="menuicon" onclick="showMenu()">
        <img src="images/menuicon.png" alt="menu"/>
        </div>
        </div>
        <div class="headercol2">
        
        <nav id="nav">
        <a href="product1.html">ARMANI</a>
        <a href="product2.html">RALPH LOUREN</a>
        <a href="product3.html">GUCCI</a>
        <a href="enquiry.html">ENQUIRY</a>
        <a href="aboutme1.html">PROFILE</a>
        <a href="enhancements.html">ENHANCEMENT</a>
        <a href="disclaimer.html">DISCLAIMER</a>
        </nav>
        <nav id="nav2">
        <a href="product1.html">ARMANI</a>
        <a href="product2.html">RALPH LOUREN</a>
        <a href="product3.html">GUCCI</a>
        <a href="enquiry.html">ENQUIRY</a>
        <a href="aboutme1.html">PROFILE</a>
        <a href="enhancements.html">ENHANCEMENT</a>
        <a href="disclaimer.html">DISCLAIMER</a>
        </nav>
        </div>
        </div>
        </header>
	
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "enquiry";

//Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
//Check connection
if (!$conn){
	die("Connection failed: " . mysqli_connect_error());
}

//Get value from preview.php
    $fname = $_POST['first_name'];
	$lname = $_POST['last_name'];
    $email = $_POST['email'];
	$phoneno = $_POST['phone_number'];
	$address = $_POST['street_address'];
	$city = $_POST['city'];
	$state = $_POST['state'];
	$postcode = $_POST['post_code'];
    $subject = $_POST['subject'];
    $product = $_POST['product'];
    $comment = $_POST['comment'];


//Write query to database
$sql = "INSERT INTO enquiry (first_name, last_name, email, phone_number, street_address, city, state, post_code, subject, product, comment) VALUES ('$fname', '$lname', '$email', '$phoneno', '$address', '$city', '$state', '$postcode', '$subject', '$product', '$comment')";

//Check if query is correct
if (mysqli_query($conn, $sql)){
	echo "<p style='color: white; text-align: center; position: relative; top: 20px'>";
	echo "<br><br><br><br><br><br><br><br><br><br><br><br>";
	echo "Your enquiry has been submitted!\n";
	echo "</p>";
}else{
	echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>

	<aside>
	
	<div id="aboutus-aside">


	</div>
	
	</aside>
	
	
	<footer>
        <div class="wrapper clearfix">
        <p id="footertitle"><strong>Designed by</strong></p>
        <div class="footercol">
        <a href="aboutme1.html">TUSAR</a>
        </div>
        <div class="footercol">
        <a href="aboutme2.html">MANTASHA</a>
        </div>
       
        </div>
        <p id="datetime"></p>
        </footer>
</body>
</html>