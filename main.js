const getTodos = (path, callback) => {
	const request = new XMLHttpRequest()
	
	request.addEventListener('readystatechange', () => {
		// console.log(request, request.readyState)
		if (request.readyState === 4) {
			if (request.status === 200) {
				const data = JSON.parse(request.responseText)
				callback(undefined, data)
			} else {
				callback('could not fetch data')
			}
		}
	})
	
	request.open('GET', path)
	request.send()
}

console.log(1)
console.log(2)

getTodos('/todos/luigi.json', (err, data) => {
	if (err) {
		console.log(err)
	} else {
		console.log(data)
	}
	getTodos('/todos/yoshi.json', (err, data) => {
		if (err) {
			console.log(err)
		} else {
			console.log(data)
		}
		getTodos('/todos/mario.json', (err, data) => {
			if (err) {
				console.log(err)
			} else {
				console.log(data)
			}
		})
	})
})



console.log(3)
console.log(4)