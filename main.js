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

const getSomething = () => {
	return new Promise((resolve, reject) => {
		resolve('some data')
		// reject('some error')
	})
}

getSomething()
	.then((data) => {
		console.log(data)
	})
	.catch((err) => {
		console.error(err)
	})
