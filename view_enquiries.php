<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <title>MENS FASHION</title>
       <meta charset="utf-8"/>
        <meta name="author" content="group"/>
        <meta name="viewport" content="width=device-width"/>
        <link rel="stylesheet" type="text/css" href="styles/styles.css"/>
        <link rel="stylesheet" type="text/css" href="styles/responsive.css" media="screen and (max-width: 1024px)"/>
        <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png"/>
		<script src="script/script.js"></script>
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

	$result = mysqli_query($conn, "SELECT * FROM enquiry");
	
	
	//Display Enquiries in table
	echo "<table border='1' align='center' style='color: white; position: relative; top: 95px'>
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Email</th>
			<th>Phone Number</th>
			<th>Street Address</th>
			<th>City</th>
			<th>State</th>
			<th>Postcode</th>
			<th>Subject</th>
			<th>product</th>
			<th>Comment</th>
		</tr>";
	while($row = mysqli_fetch_array($result)){
		echo "<tr>";
		echo "<td>" . $row['first_name'] . "</td>";
		echo "<td>" . $row['last_name'] . "</td>";
		echo "<td>" . $row['email'] . "</td>";
		echo "<td>" . $row['phone_number'] . "</td>";
		echo "<td>" . $row['street_address'] . "</td>";
		echo "<td>" . $row['city'] . "</td>";
		echo "<td>" . $row['state'] . "</td>";
		echo "<td>" . $row['post_code'] . "</td>";
		echo "<td>" . $row['subject'] . "</td>";
		echo "<td>" . $row['product'] . "</td>";
		echo "<td>" . $row['comment'] . "</td>";
		echo "</tr>";
	}
	echo "</table>";
	echo "<br><br><br><br><br><br>";
	
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