function getFormvalue() {
    //Write your code here
    const form = document.querySelector('form');
	const fname = form[0].value;
	const lname = form[1].value;
	alert(fname+ lname);
}
