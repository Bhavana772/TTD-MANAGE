<?php
	$fullName =$_POST['fullName'];
	$email =$_POST['email'];
	$number =$_POST['number'];
	$date =$_POST['date'];
	$ADnumber =$_POST['ADnumber'];
	
	

	//database connection
	
	$connection=mysqli_connect("localhost","root","","account");
if($connection)
{
	echo "connection established"."<br>";
}
else
{
	echo "error:".mysqli_error($connection);
}
/*$query="CREATE TABLE details(fullName VARCHAR(15) NOT NULL,email VARCHAR(35),number integer(10),date VARCHAR(10),ADnumber integer(12));";
if(mysqli_query($connection,$query))
{
	echo "table created";
}
else
{
	echo "error:".mysqli_error($connection);
}*/
$query1="INSERT INTO details VALUES('$fullName','$email','$number','$date','$ADnumber');";
if(mysqli_query($connection,$query1))
{
	echo "values inserted";
}
else
{
	echo "error:".mysqli_error($connection);
}
$query3="SELECT * FROM details;";
$check=mysqli_query($connection,$query3);
if(mysqli_num_rows($check))
{
	while($row=mysqli_fetch_assoc($check))
	{
		echo ($row['fullName']."<br>".$row['email']."<br>".$row['number']."<br>".$row['date']."<br>".$row['ADnumber']."<br>");
	}
}
else
{
	echo "no records";
}
header("Location:registered.html");

?>
