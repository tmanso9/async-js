const getTodos = (path) => {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest()

		request.addEventListener('readystatechange', () => {
			if (request.readyState === 4) {
				if (request.status === 200) {
					const data = JSON.parse(request.responseText)
					resolve(data)
				} else {
					reject('could not fetch data')
				}
			}
		})

		request.open('GET', path)
		request.send()
	})
}

getTodos('todos/mario.json')
	.then((data) => {
		console.log(data)
	})
	.catch((err) => {
		console.error(err)
	})
