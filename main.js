const getTodos = (path) => {
	fetch(path)
		.then((response) => {
			if (!response.ok) {
				throw new Error('error fetching')
			}
			console.log(response)
			return response.json()
		})
		.then((data) => {
			console.log(data)
		})
		.catch((err) => {
			console.error(err)
		})
}

getTodos('todos/luigi.json')
