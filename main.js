const getTodos = async (path) => {
	const response = await fetch(path)
	try {
		if (!response.ok) {
			throw new Error('error fetching')
		}
		const data = await response.json()
		return data
	} catch (err) {
		throw new Error(err)
	}
}

getTodos('todos/luigi.json')
	.then((data) => console.log(data))
	.catch((err) => console.error(err.message))
