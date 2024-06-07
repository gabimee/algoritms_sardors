function max1020(a, b) {
	if (b > a) {
		a = a + b
		b = a - b
		a = a - b
	}

	if (10 <= a && a <= 20) return a

	if (10 <= b && b <= 20) return b

	return 0
}
