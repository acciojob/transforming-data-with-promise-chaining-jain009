//your JS code here. If required.
document.getElementById("ip").addEventListener("click", function(){
	const outputDiv = document.getElementById("output");
	let num = parseFloat(document.getElementById("ip").value);
	if(isNaN(num)){
		outputDiv.textContent = "Please enter a valid number.";
		return;
	}
	new Promise((resolve => {
	setTimeout(() => {
		outputDiv.textContent = `Result: ${num}`
		resolve(num);
	})
	},2000);
		.then(result => new Promise(resolve => {
		setTimeout(() => {
			result *= 2;
			outputDiv.textContent = `Result: ${result}`
			resolve(result);
		}, 1000);
	}))
	.then(result => new Promise(resolve => {
			setTimeout(() => {
				result -= 3;
				outputDiv.textContent = `Result: ${result}`;
				resolve(result);
			}, 1000);
	}))
		.then(result  => new Promise(resolve => {
				setTimeout(() => {
					result /= 2;
					outputDiv.textContent =`Result: ${result}`;
					resolve(result);
				}, 1000);
		}))
		.then(result => new Promise(resolve =>{
		setTimeout(()  => {
			result += 10;
			outputdiv.textContent = `Final Result: ${result}`;
			resolve(result);
		},1000);document.getElementById("btn").addEventListener("click", function(){
	const outputDiv = document.getElementById("output");
	let num = parseFloat(document.getElementById("ip").value);
	if(isNaN(num)){
		outputDiv.textContent = "Please enter a valid number.";
		return;
	}
	new Promise(resolve => {
		setTimeout(() => {
			outputDiv.textContent = `Result: ${num}`;
			resolve(num);
		}, 2000);
	}).then(result => new Promise(resolve => {
		setTimeout(() => {
			result *= 2;
			outputDiv.textContent = `Result: ${result}`;
			resolve(result);
		}, 2000);
	})).then(result => new Promise(resolve => {
		setTimeout(() => {
			result -= 3;
			outputDiv.textContent = `Result: ${result}`;
			resolve(result);
		}, 1000);
	})).then(result  => new Promise(resolve => {
		setTimeout(() => {
			result /= 2;
			outputDiv.textContent = `Result: ${result}`;
			resolve(result);
		}, 1000);
	})).then(result => new Promise(resolve =>{
		setTimeout(()  => {
			result += 10;
			outputDiv.textContent = `Final Result: ${result}`;
			resolve(result);
		},1000);
	}));
});
		
		}));
				 }));
















		
		}))
	}))
})