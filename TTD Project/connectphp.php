<?php
	$firstName =$_POST['firstName'];

	$number =$_POST['number'];
	$fdate =$_POST['date'];
	
	$LastName =$_POST['LastName'];
	$email =$_POST['email'];
	$ldate =$_POST['date'];
	
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
/*$query="CREATE TABLE roomallot(firstName VARCHAR(15) NOT NULL,number integer(10),fdate VARCHAR(10),LastName VARCHAR(15) NOT NULL,email VARCHAR(35),ldate integer(10));";
if(mysqli_query($connection,$query))
{
	echo "table created";
}
else
{
	echo "error:".mysqli_error($connection);
}*/

$query1="INSERT INTO roomallot VALUES('$firstName','$number','$fdate','$LastName','$email','$ldate');";
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
		echo ($row['firstName']."<br>".$row['number']."<br>".$row['date']."<br>".$row['LastName']."<br>".$row['email']."<br>".$row['date']."<br>");
	}
}
else
{
	echo "no records";
}
header("Location:registered.html");
?>
