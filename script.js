function messageChecker(){
	let m = prompt("Enter your message...");
	var condition;
	
	if (m.indexOf('FR') !== -1){
		condition = 'legitimate';
	} else if (m.indexOf('FR') !== -1 && m.indexOf('AI') !== -1){
		condition = 'legitimate';
	} else if (m.indexOf('AI') !== -1){
		condition = 'tampered with';
	} else if (m.indexOf('aI') !== -1 || m.indexOf('Ai') !== -1){
		condition = 'tampered with';
	} else {
		condition = 'yet to be decoded';
	}
	
	document.getElementById('result').innerHTML = 'The message "' + m + '" is ' + condition + '.';
}