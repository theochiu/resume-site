function setAge() {
	const date = new Date();
	const year = date.getFullYear();
	const day = date.getDate();
	const month = date.getMonth() + 1; // 0-11
	var age;

	if (month == 12 && day >= 11)
		age = year - 1998;
	else
		age = year - 1998 - 1;

	document.getElementById("age").innerHTML = age + " years";
}