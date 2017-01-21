function computeEuler(){
	var input = document.getElementById("problem_input");
	var answer = document.getElementById("answer");
	var sum = 0;

 	for (var i = 0; i < input.value ; i++) {
    		if(i%3===0)
    		{
		    
		    sum=sum+i;
		    continue;
		}
		else if (i%5==0) {
		sum=sum+i;
		continue;
	}
}


  answer.innerHTML = sum;
}
