function getTriangleArea (a, h) {
	if ((a <= 0) && (h <= 0)) {
		return 'Nieprawidłowe dane';
	} else {
		return a*h/2;
	}
};

console.log(getTriangleArea(10,6));

var Triangle1Area = getTriangleArea(11,15),
	Triangle2Area = getTriangleArea(8,10),
	Triangle3Area = getTriangleArea(5,15);
	
console.log(Triangle1Area, Triangle2Area, Triangle2Area);