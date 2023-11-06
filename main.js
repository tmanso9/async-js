const getTodos = (callback) => {
	const request = new XMLHttpRequest()
	
	request.addEventListener('readystatechange', () => {
		// console.log(request, request.readyState)
		if (request.readyState === 4) {
			if (request.status === 200) {
				callback(undefined, request.responseText)
			} else {
				callback('could not fetch data')
			}
		}
	})
	
	request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
	request.send()
}

console.log(1)
console.log(2)


getTodos((err, data) => {
	if (err) {
		console.log(err)
	} else {
		console.log(data)
	}
})

console.log(3)
console.log(4)