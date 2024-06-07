function frontBack(str) {
	if (str.length > 1) {
		return str.slice(-1) + str.slice(1, -1) + str.slice(0, 1)
	} else {
		return str
	}
}
